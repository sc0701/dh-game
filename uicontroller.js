// ================================
// UI 컨트롤러 & 이벤트 처리
// ================================

function updateUI() {
    document.getElementById('current-year').innerText = gameState.currentYear;
    
    // 내 돈 숫자 색상 처리 (20만 원 이하일 때 빨간색, 그 외 초록색)
    const moneyEl = document.getElementById('my-money');
    moneyEl.innerText = gameState.myMoney;
    moneyEl.style.color = gameState.myMoney <= 20 ? '#e74c3c' : '#2ecc71';

    // 친밀도 숫자 색상 처리 (위험 범위: 15 이하 또는 90 이상일 때 빨간색)
    const intimacyEl = document.getElementById('intimacy');
    intimacyEl.innerText = gameState.intimacy;
    intimacyEl.style.color = (gameState.intimacy <= 15 || gameState.intimacy >= 90) ? '#e74c3c' : '#2ecc71';

    // 자존감 숫자 색상 처리 (위험 범위: 15 이하 또는 85 이상일 때 빨간색)
    const esteemEl = document.getElementById('dh-esteem');
    esteemEl.innerText = gameState.dhEsteem;
    esteemEl.style.color = (gameState.dhEsteem <= 15 || gameState.dhEsteem >= 85) ? '#e74c3c' : '#2ecc71';

    const dhMoneyEl = document.getElementById('dh-money');
    if (dhMoneyEl) dhMoneyEl.innerText = gameState.dhMoney;
    
    const turnsEl = document.getElementById('action-turns');
    if (turnsEl) turnsEl.innerText = gameState.actionTurns;

    // 표정 이미지 반영
    setDonghyunImage();
    // 특별만남 중이 아니면 항상 기본 방 배경
    setBackground(null);

    // 연도별 장소별 완료 여부 확인하여 버튼 잠금(disabled) 처리
    const year = gameState.currentYear;
    ['chat', 'alba', 'home', 'special'].forEach(locKey => {
        const btn = document.getElementById(`nav-${locKey}`);
        if (!btn) return;
        const available = getAvailableEvent(year, locKey);
        if (!available) {
            btn.disabled = true;
            btn.innerText = `🔒 ${getLocationName(locKey)} (완료)`;
        } else {
            const icon = locKey === 'special' ? '🌟' : '✨';
            btn.disabled = false;
            btn.innerText = `${icon} ${getLocationName(locKey)}`;
        }
    });

    // 메인 대화창 초기화
    document.getElementById('choices-container').style.display = 'block';
    document.getElementById('chat-panel').style.display = 'none';
    const title = getRelationshipTitle(gameState.intimacy);
    document.getElementById('speaker-title').innerText = `${year}년 대기 중 · ${title} (${gameState.playerName})`;
    document.getElementById('situation-text').innerText =
        (yearData[year] ? yearData[year].title : "") + `\n\n(남은 턴: ${gameState.actionTurns}) 하단의 장소 버튼을 눌러 스토리를 진행하세요!`;
    document.getElementById('choices-container').innerHTML = "";
}

// 모달 제어 함수들
let modalCallback = null;
function showModal(title, msg, callback) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-message').innerText = msg;
    document.getElementById('game-modal').style.display = 'flex';
    modalCallback = callback;
}

function closeModal() {
    document.getElementById('game-modal').style.display = 'none';
    if (typeof modalCallback === 'function') {
        let cb = modalCallback;
        modalCallback = null;
        cb();
    } else {
        updateUI();
    }
}

// 우측 메뉴 (선물, 출석, 미션) 인터랙티브 모달 로직
function openGiftModal() {
    const body = document.getElementById('menu-modal-body');
    document.getElementById('menu-modal-title').innerText = "🎁 동현이에게 선물 보내기";
    body.innerHTML = `
        <p>동현이에게 깜짝 선물을 보내 호감도나 자존감을 올릴 수 있습니다!</p>
        <button class="choice-btn" onclick="applyGift(1)">비타민 영양제 세트 (비용: 1만, 자존감 +5)</button>
        <button class="choice-btn" onclick="applyGift(2)">최신형 무선 이어폰 (비용: 20만, 친밀도 +15)</button>
        <button class="choice-btn" onclick="applyGift(3)">편의점 컵라면 세트 (비용: 5천원, 친밀도 +3)</button>
    `;
    document.getElementById('menu-modal').style.display = 'flex';
}

function applyGift(type) {
    if (type === 1) {
        if (gameState.myMoney < 1) { alert("돈이 부족합니다!"); return; }
        gameState.myMoney -= 1;
        gameState.dhEsteem += 5;
        addLog("선물: 비타민 영양제 세트");
        alert("비타민을 선물했습니다! 동현이의 건강과 자존감이 소폭 상승했습니다.");
    } else if (type === 2) {
        if (gameState.myMoney < 20) { alert("돈이 부족합니다!"); return; }
        gameState.myMoney -= 20;
        gameState.intimacy += 15;
        addLog("선물: 무선 이어폰");
        alert("무선 이어폰을 선물했습니다! 동현이가 감동하여 친밀도가 올랐습니다.");
    } else if (type === 3) {
        if (gameState.myMoney < 1) { alert("돈이 부족합니다!"); return; }
        gameState.myMoney -= 1;
        gameState.intimacy += 3;
        addLog("선물: 컵라면 세트");
        alert("컵라면을 쥐어주었습니다.");
    }
    limitsCheck();
    saveGame();
    closeMenuModal();
    updateUI();
}

function openAttendanceModal() {
    const body = document.getElementById('menu-modal-body');
    document.getElementById('menu-modal-title').innerText = "📅 일일 출석 체크";
    body.innerHTML = `
        <p>매일 접속한 보상으로 소정의 용돈과 호감도를 수령하세요!</p>
        <button class="choice-btn" onclick="applyAttendance()">출석 보상 수령하기 (+10만 원)</button>
    `;
    document.getElementById('menu-modal').style.display = 'flex';
}

function applyAttendance() {
    gameState.myMoney += 10;
    addLog("출석 보상 수령 (+10만 원)");
    alert("출석 보상으로 10만 원이 충전되었습니다!");
    saveGame();
    closeMenuModal();
    updateUI();
}

function openMissionModal() {
    const body = document.getElementById('menu-modal-body');
    document.getElementById('menu-modal-title').innerText = "⭐ 특별 미션 센터";
    body.innerHTML = `
        <p>현재 달성 가능한 특별 미션 목록입니다.</p>
        <ul>
            <li>친밀도 70 이상 달성하기 (현재: ${gameState.intimacy})</li>
            <li>자금 300만 원 이상 모으기 (현재: ${gameState.myMoney}만)</li>
        </ul>
        <button class="choice-btn" onclick="checkMissionReward()">미션 보상 확인</button>
    `;
    document.getElementById('menu-modal').style.display = 'flex';
}

function checkMissionReward() {
    if (gameState.myMoney >= 300) {
        gameState.intimacy += 10;
        addLog("미션 달성: 부자 미션 (+친밀도 10)");
        alert("축하합니다! 부자 미션 달성 보상으로 친밀도 +10 획득!");
        limitsCheck();
        saveGame();
    } else {
        alert("아직 조건을 만족하지 못했습니다. 자금을 더 모아보세요!");
    }
    closeMenuModal();
    updateUI();
}

// 추억 일지 & 엔딩 도감
function openLogModal() {
    const body = document.getElementById('menu-modal-body');
    document.getElementById('menu-modal-title').innerText = "📖 추억 일지 & 엔딩 도감";

    const galleryKeys = loadEndingsGallery();
    const allEndingKeys = Object.keys(endings);
    const galleryHtml = allEndingKeys.map(k => {
        const unlocked = galleryKeys.includes(k);
        return `<li style="margin-bottom:4px;">${unlocked ? '✅' : '🔒'} ${unlocked ? endings[k].title : '???'}</li>`;
    }).join('');

    const logHtml = gameState.log.length
        ? gameState.log.slice(0, 20).map(l => `<li style="margin-bottom:4px;">${l}</li>`).join('')
        : '<li>아직 기록이 없습니다.</li>';

    body.innerHTML = `
        <p style="font-weight:bold; margin-bottom:4px;">🏁 엔딩 도감</p>
        <ul style="padding-left:18px; margin-top:0;">${galleryHtml}</ul>
        <p style="font-weight:bold; margin:10px 0 4px;">📝 최근 추억 (최대 20개)</p>
        <ul style="padding-left:18px; margin-top:0;">${logHtml}</ul>
    `;
    document.getElementById('menu-modal').style.display = 'flex';
}

function closeMenuModal() {
    document.getElementById('menu-modal').style.display = 'none';
}

function triggerEnding(endingKey) {
    const ending = endings[endingKey];
    unlockEndingInGallery(endingKey);
    if (!gameState.unlockedEndings.includes(endingKey)) gameState.unlockedEndings.push(endingKey);

    document.getElementById('speaker-title').innerText = ending.title;
    document.getElementById('situation-text').innerText = ending.text;
    document.getElementById('choices-container').innerHTML =
        `<button class="choice-btn" onclick="restartGame()" style="background:#2ecc71;">다시 하기</button>`;
    document.getElementById('chat-panel').style.display = 'none';
    setBackground(null);
    setDonghyunImage(ending.imageName);

    clearSave(); // 이번 회차 저장 데이터는 정리(엔딩 도감은 별도로 유지됨)
}

function restartGame() {
    location.reload();
}

// ---------- 이어하기 / 새로 시작 및 이름 설정 ----------
function continueSavedGame() {
    loadGame();
    document.getElementById('continue-modal').style.display = 'none';
    updateUI();
}

function startNewGame() {
    clearSave();
    document.getElementById('continue-modal').style.display = 'none';
    document.getElementById('intro-modal').style.display = 'flex';
}

function submitPlayerName() {
    const input = document.getElementById('player-name-input');
    if (input && input.value.trim()) {
        gameState.playerName = input.value.trim();
    }
    document.getElementById('intro-modal').style.display = 'none';
    saveGame();
    updateUI();
}

window.onload = () => {
    if (hasSaveData()) {
        document.getElementById('continue-modal').style.display = 'flex';
        document.getElementById('intro-modal').style.display = 'none';
    } else {
        document.getElementById('intro-modal').style.display = 'flex';
    }
};

// 창을 닫거나 새로고침해도 마지막 상태가 저장되도록 보강
window.addEventListener('beforeunload', () => {
    saveGame();
});