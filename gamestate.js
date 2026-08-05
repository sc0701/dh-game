// ================================
// 게임 상태(State) + 저장/불러오기
// ================================

const SAVE_KEY = "dh_growth_save_v1";       // 진행 상황 저장 키
const ENDINGS_KEY = "dh_growth_endings_v1"; // 엔딩 도감(리셋해도 유지)
const MAX_ACTION_TURNS = 32; // 전체 플레이에서 쓸 수 있는 총 턴 수(전략적 선택 유도)

function createDefaultState() {
    return {
        playerName: "친구",
        currentYear: 2017,
        myMoney: 250,
        intimacy: 50,
        dhEsteem: 50,
        dhMoney: 0,           // 동현이의 자산(선물/투자 등으로 누적)
        actionTurns: MAX_ACTION_TURNS,
        log: [],              // 추억 일지
        unlockedEndings: [],  // 이번 플레이에서 확인한 엔딩(참고용, 실제 도감은 별도 저장)
        // 연도별, 장소별 완료 여부를 기록 (chat/alba/home/special)
        completedEvents: {
            2017: { chat: [], alba: [], home: [], special: [] },
            2018: { chat: [], alba: [], home: [], special: [] },
            2019: { chat: [], alba: [], home: [], special: [] },
            2020: { chat: [], alba: [], home: [], special: [] },
            2021: { chat: [], alba: [], home: [], special: [] },
            2022: { chat: [], alba: [], home: [], special: [] },
            2023: { chat: [], alba: [], home: [], special: [] },
            2024: { chat: [], alba: [], home: [], special: [] },
            2025: { chat: [], alba: [], home: [], special: [] },
            2026: { chat: [], alba: [], home: [], special: [] }
        }
    };
}

const gameState = createDefaultState();

// ---------- 저장 / 불러오기 ----------
function saveGame() {
    try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
        flashSaveIndicator();
    } catch (e) {
        console.warn("저장 실패:", e);
    }
}

function hasSaveData() {
    try {
        return !!localStorage.getItem(SAVE_KEY);
    } catch (e) {
        return false;
    }
}

// gamestate.js 내부의 loadGame 함수를 아래로 교체
function loadGame() {
    try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (!raw) return false;
        const data = JSON.parse(raw);
        Object.assign(gameState, data);
        
        // 필수 필드 및 누락된 구조 안전 보정
        if (!gameState.playerName) gameState.playerName = "친구";
        if (!gameState.log) gameState.log = [];
        if (!gameState.unlockedEndings) gameState.unlockedEndings = [];
        if (typeof gameState.dhMoney !== "number") gameState.dhMoney = 0;
        if (typeof gameState.actionTurns !== "number") gameState.actionTurns = MAX_ACTION_TURNS;
        
        if (!gameState.completedEvents) {
            gameState.completedEvents = createDefaultState().completedEvents;
        } else {
            Object.keys(yearData).forEach(y => {
                if (!gameState.completedEvents[y]) {
                    gameState.completedEvents[y] = { chat: [], alba: [], home: [], special: [] };
                } else {
                    ['chat', 'alba', 'home', 'special'].forEach(k => {
                        if (!gameState.completedEvents[y][k]) gameState.completedEvents[y][k] = [];
                    });
                }
            });
        }
        return true;
    } catch (e) {
        console.warn("불러오기 실패:", e);
        return false;
    }
}

function clearSave() {
    try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* ignore */ }
}

// ---------- 엔딩 도감(메타 진행도, 리셋해도 유지) ----------
function loadEndingsGallery() {
    try {
        const raw = localStorage.getItem(ENDINGS_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function unlockEndingInGallery(key) {
    try {
        const list = loadEndingsGallery();
        if (!list.includes(key)) {
            list.push(key);
            localStorage.setItem(ENDINGS_KEY, JSON.stringify(list));
        }
    } catch (e) { /* ignore */ }
}

// ---------- 저장 표시등 ----------
function flashSaveIndicator() {
    const el = document.getElementById('save-indicator');
    if (!el) return;
    el.classList.remove('save-flash');
    // 리플로우를 강제해 애니메이션을 재시작
    void el.offsetWidth;
    el.classList.add('save-flash');
}

// ---------- 관계 호칭 시스템 ----------
function getRelationshipTitle(intimacy) {
    if (intimacy >= 90) return "인생 최고의 은인";
    if (intimacy >= 70) return "든든한 친형 같은 존재";
    if (intimacy >= 50) return "편한 형/친구";
    if (intimacy >= 30) return "그냥 아는 사이";
    if (intimacy >= 10) return "서먹서먹한 사이";
    return "손절 직전";
}

// ---------- 추억 일지 ----------
function addLog(text) {
    gameState.log.unshift(`[${gameState.currentYear}년] ${text}`);
    if (gameState.log.length > 60) gameState.log.length = 60;
}
