// ================================================
// 게임 엔진: 장소 진입 -> 선택 -> 티키타카(반응 2회) -> 결과 반영
// ================================================

let activeEventData = null;   // 현재 진행 중인 원본 이벤트(situation, choices 등)
let currentLocKey = null;     // 'chat' | 'alba' | 'home' | 'special'
let pendingStats = null;      // 이번 턴에 누적되고 있는 변동치
let tikitakaStep = 0;         // 0: 대기, 1~2: 티키타카 진행 중
let currentTier = 'awkward';
let usedFollowupTexts = [];   // 같은 턴 안에서 같은 대사가 또 나오지 않도록

// ---------- 장소/이벤트 헬퍼 ----------
function getLocationName(key) {
    const names = { chat: '카톡', alba: '알바/학업', home: '숙소/집', special: '특별만남' };
    return names[key] || key;
}

function getAvailableEvent(year, key) {
    if (key === 'special') {
        const done = gameState.completedEvents[year].special;
        if (done.length > 0) return null; // 연도당 1회
        // 연도가 바뀔 때마다 다른 특별 이벤트가 나오도록 순환 배정
        const idx = (year - 2017) % specialEvents.length;
        return specialEvents[idx];
    }
    const events = yearData[year] && yearData[year].events[key];
    if (!events) return null;
    const done = gameState.completedEvents[year][key];
    return events.find(e => !done.includes(e.id)) || null;
}

// ---------- 캐릭터 이미지 ----------
function getDonghyunImage() {
    const year = gameState.currentYear;
    if (gameState.intimacy <= 20) return "슬픈_전동현.png";
    if (year === 2019 || year === 2020) return IMAGE_FILES.militaryDH;
    if (year === 2022) return IMAGE_FILES.examPrepDH;
    if (gameState.dhEsteem < 30) return "자존감이_떨어진_전동현.png";
    if (gameState.dhEsteem >= 70 && gameState.intimacy >= 70) return "고마워_하는_전동현.png";
    if (gameState.dhEsteem >= 50) return "자존감이_올라간_전동현.png";
    return "부탁하는_전동현.png";
}

function setDonghyunImage(fileOverride) {
    const img = document.getElementById('dh-image');
    const file = fileOverride || getDonghyunImage();
    img.onerror = () => {
        // 아직 준비되지 않은 그림(군복/고시생 등)이면 기본 이미지로 자연스럽게 대체
        img.onerror = null;
        img.src = "images/부탁하는_전동현.png";
    };
    img.src = "images/" + file;
}

function setBackground(fileName) {
    const container = document.getElementById('game-container');
    const url = fileName ? `images/${fileName}` : `images/${IMAGE_FILES.bgRoom}`;
    container.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('${url}')`;
}

// ---------- 장소 진입 ----------
function enterLocation(key) {
    const year = gameState.currentYear;
    const event = getAvailableEvent(year, key);
    if (!event) {
        showModal("알림", `${getLocationName(key)}에서 올해 진행할 수 있는 이벤트가 없습니다.`, () => {});
        return;
    }
    currentLocKey = key;
    activeEventData = event;

    document.getElementById('chat-panel').style.display = 'none';
    const container = document.getElementById('choices-container');
    container.style.display = 'block';
    container.innerHTML = "";

    if (key === 'special') {
        setBackground(event.bg);
        document.getElementById('speaker-title').innerText = event.name;
    } else {
        document.getElementById('speaker-title').innerText = getLocationName(key);
    }

    if (event.type === 'chat') {
        container.style.display = 'none';
        document.getElementById('chat-panel').style.display = 'block';
        document.getElementById('situation-text').innerText = event.situation;
        document.getElementById('kakao-chat-content').innerText = event.chatMessage;
        return;
    }

    document.getElementById('situation-text').innerText = event.situation;
    renderPrimaryChoices(event.choices);
}

function renderPrimaryChoices(choices) {
    const container = document.getElementById('choices-container');
    container.style.display = 'block';
    container.innerHTML = "";
    choices.forEach((choice) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = choice.text;
        btn.onclick = () => handlePrimaryChoice(choice);
        container.appendChild(btn);
    });
}

// ---------- 1차 선택 처리 ----------
function handlePrimaryChoice(choice) {
    pendingStats = normDelta(choice);
    currentTier = classifyTier(pendingStats.intimacy, pendingStats.dhEsteem);
    startTikitaka();
}

function submitChatAnswer() {
    const input = document.getElementById('user-chat-input');
    const text = input.value.trim();
    if (!text) return;
    input.value = "";

    let matched = activeEventData.defaultResult;
    for (let rule of activeEventData.keywords) {
        if (text.includes(rule.keyword)) {
            matched = rule.result;
            break;
        }
    }

    pendingStats = normDelta(matched);
    currentTier = classifyTier(pendingStats.intimacy, pendingStats.dhEsteem);

    document.getElementById('chat-panel').style.display = 'none';
    document.getElementById('speaker-title').innerText = "카톡";
    document.getElementById('situation-text').innerText =
        `[내가 보낸 답장]: "${text}"\n\n${matched.text}`;

    // 잠깐 답장 결과를 보여준 뒤 티키타카로 이어짐
    startTikitaka();
}

// ---------- 티키타카(2회 반응 교환) ----------
function startTikitaka() {
    tikitakaStep = 1;
    usedFollowupTexts = [];
    showReactionStep();
}

function pickReactionLine() {
    const pool = donghyunReactions[currentTier];
    const candidates = pool.filter(l => !usedFollowupTexts.includes(l));
    const line = (candidates.length ? candidates : pool)[Math.floor(Math.random() * (candidates.length ? candidates.length : pool.length))];
    usedFollowupTexts.push(line);
    return line;
}

function pickFollowupOptions() {
    const pool = followupPool[currentTier];
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
}

function showReactionStep() {
    document.getElementById('chat-panel').style.display = 'none';
    const container = document.getElementById('choices-container');
    container.style.display = 'block';
    container.innerHTML = "";

    document.getElementById('speaker-title').innerText = "전동현";
    document.getElementById('situation-text').innerText = pickReactionLine();

    const options = pickFollowupOptions();
    options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = opt.text;
        btn.onclick = () => handleFollowup(opt);
        container.appendChild(btn);
    });
}

function handleFollowup(opt) {
    pendingStats.money += opt.money || 0;
    pendingStats.intimacy += opt.intimacy || 0;
    pendingStats.dhMoney += opt.dhMoney || 0;
    pendingStats.dhEsteem += opt.dhEsteem || 0;

    if (tikitakaStep < 2) {
        tikitakaStep++;
        showReactionStep();
    } else {
        finalizeTurn();
    }
}

// ---------- 턴 마무리: 스탯 반영 + 결과 모달 ----------
function finalizeTurn() {
    gameState.myMoney += pendingStats.money;
    gameState.intimacy += pendingStats.intimacy;
    gameState.dhMoney += pendingStats.dhMoney;
    gameState.dhEsteem += pendingStats.dhEsteem;
    limitsCheck();

    // 완료 기록
    if (currentLocKey === 'special') {
        gameState.completedEvents[gameState.currentYear].special.push(activeEventData.key);
        setBackground(null); // 방 배경으로 복귀
    } else {
        gameState.completedEvents[gameState.currentYear][currentLocKey].push(activeEventData.id);
    }

    addLog(`${getLocationName(currentLocKey)} · 친밀도 ${pendingStats.intimacy >= 0 ? '+' : ''}${pendingStats.intimacy}, 자존감 ${pendingStats.dhEsteem >= 0 ? '+' : ''}${pendingStats.dhEsteem}`);

    const parts = [];
    parts.push(`자금 ${pendingStats.money >= 0 ? '+' : ''}${pendingStats.money}만`);
    parts.push(`친밀도 ${pendingStats.intimacy >= 0 ? '+' : ''}${pendingStats.intimacy}`);
    parts.push(`동현 자존감 ${pendingStats.dhEsteem >= 0 ? '+' : ''}${pendingStats.dhEsteem}`);
    if (pendingStats.dhMoney) parts.push(`동현 자산 ${pendingStats.dhMoney >= 0 ? '+' : ''}${pendingStats.dhMoney}만`);

    saveGame();
    showModal("결과", parts.join(' / '), finishTurnAction);
}

function limitsCheck() {
    if (gameState.intimacy > 100) gameState.intimacy = 100;
    if (gameState.intimacy < 0) gameState.intimacy = 0;
    if (gameState.dhEsteem > 100) gameState.dhEsteem = 100;
    if (gameState.dhEsteem < 0) gameState.dhEsteem = 0;
    if (gameState.dhMoney < 0) gameState.dhMoney = 0;
}

function finishTurnAction() {
    if (gameState.myMoney <= 0) {
        gameState.myMoney = 0;
        triggerEnding('badEnding1');
        return;
    }
    if (gameState.intimacy <= 0) {
        gameState.intimacy = 0;
        triggerEnding('badEnding2');
        return;
    }

    gameState.actionTurns--;
    saveGame();

    if (gameState.actionTurns <= 0) {
        if (gameState.intimacy === 100 && gameState.myMoney > 60) triggerEnding('hiddenEnding');
        else if (gameState.intimacy >= 40 && gameState.dhEsteem >= 45) triggerEnding('trueEnding');
        else triggerEnding('badEnding2');
        return;
    }

    // 약 15% 확률로 보너스 돌발 이벤트 (추가 턴 소모 없음)
    if (currentLocKey !== 'special' && Math.random() < 0.15) {
        triggerRandomEvent();
    } else {
        updateUI();
    }
}

// ---------- 돌발 이벤트(간단 버전, 티키타카 없음) ----------
function triggerRandomEvent() {
    const randEvent = randomEvents[Math.floor(Math.random() * randomEvents.length)];
    document.getElementById('chat-panel').style.display = 'none';
    const container = document.getElementById('choices-container');
    container.style.display = 'block';
    container.innerHTML = "";

    document.getElementById('speaker-title').innerText = "돌발 상황!";
    document.getElementById('situation-text').innerText = randEvent.situation;

    randEvent.choices.forEach((choice) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = choice.text;
        btn.onclick = () => {
            gameState.myMoney += choice.money || 0;
            gameState.intimacy += choice.intimacy || 0;
            gameState.dhMoney += choice.dhMoney || 0;
            gameState.dhEsteem += choice.dhEsteem || 0;
            limitsCheck();
            addLog(`돌발 이벤트: ${choice.text}`);
            saveGame();

            if (gameState.myMoney <= 0) { gameState.myMoney = 0; showModal("돌발 위기 결과", "스탯이 변동되었습니다!", () => triggerEnding('badEnding1')); return; }
            if (gameState.intimacy <= 0) { gameState.intimacy = 0; showModal("돌발 위기 결과", "스탯이 변동되었습니다!", () => triggerEnding('badEnding2')); return; }
            showModal("돌발 위기 결과", "스탯이 변동되었습니다!", updateUI);
        };
        container.appendChild(btn);
    });
}

// ---------- 연도 진행 ----------
function forceNextYear() {
    if (gameState.currentYear >= 2026) {
        if (gameState.intimacy === 100 && gameState.myMoney > 60) triggerEnding('hiddenEnding');
        else if (gameState.intimacy >= 40 && gameState.dhEsteem >= 45) triggerEnding('trueEnding');
        else triggerEnding('badEnding2');
        return;
    }
    gameState.currentYear++;
    saveGame();
    updateUI();
}
