// ================================================
// 확장 데이터: 티키타카 반응 풀 / 특별 만남 / 돌발 이벤트
// ================================================

// --- 새로 추가되는 이미지 파일명 (images/ 폴더에 넣어주시면 자동 적용됩니다) ---
// 아직 그림이 없어도 게임이 깨지지 않도록 기본 이미지로 자동 대체됩니다.
const IMAGE_FILES = {
    militaryDH: "군복_전동현.png",       // 2019~2020년(입대~군복무) 동안 사용
    examPrepDH: "고시생_전동현.png",     // 2022년(노량진 고시생) 동안 사용
    bgCafe: "bg_cafe.png",              // 특별만남 - 카페
    bgTravel: "bg_travel.png",          // 특별만남 - 여행
    bgBar: "bg_bar.png",                // 특별만남 - 술집
    bgRoom: "bg_room.png"               // 기본 배경(이미 있음)
};

// --- 동현이의 1차 반응 대사 (선택 결과의 "온도"에 따라 5단계) ---
const donghyunReactions = {
    touched: [
        "동현이의 눈이 순식간에 그렁그렁해지더니, \"형 진짜 이러기야... 나 감동받았잖아\"라며 목소리가 떨린다.",
        "동현이가 벌떡 일어나 \"형만한 사람이 없다\"며 두 손을 꽉 붙잡는다.",
        "동현이의 입꼬리가 귀에 걸릴 듯 올라가며, \"오늘 일은 평생 안 잊는다\"고 다짐하듯 말한다.",
        "동현이가 괜히 딴청을 피우며 눈물을 훔치더니, \"크흠, 나 원래 잘 안 우는데...\"라며 헛기침을 한다."
    ],
    pleased: [
        "동현이가 씨익 웃으며 \"역시 형밖에 없다\"고 엄지를 척 들어 보인다.",
        "동현이의 표정이 한결 밝아지며 \"고마워, 다음엔 내가 쏠게\"라고 너스레를 떤다.",
        "동현이가 만족스러운 듯 고개를 끄덕이며 \"형 오늘 좀 멋있었다\"고 인정한다.",
        "동현이가 기분 좋게 어깨를 툭 치며 \"역시 믿을 사람은 형뿐\"이라고 웃는다."
    ],
    awkward: [
        "동현이가 애매한 표정으로 \"음... 그런 건가?\"하며 고개를 갸웃한다.",
        "동현이가 별다른 반응 없이 \"그냥 그런가보다\"하고 넘긴다.",
        "동현이가 뭔가 말하려다 말고 어색하게 웃으며 화제를 돌린다.",
        "동현이가 잠깐 멈칫하더니, \"뭐, 나쁘진 않네\"라고 심드렁하게 대답한다."
    ],
    hurt: [
        "동현이가 입을 삐죽이며 \"형 진짜 너무한 거 아니냐\"고 서운한 티를 낸다.",
        "동현이의 표정이 살짝 어두워지며 \"알겠어...\"라고 힘없이 대답한다.",
        "동현이가 괜히 시선을 피하며 \"그렇구나\"하고 작게 중얼거린다.",
        "동현이가 서운한 눈빛으로 \"형은 항상 그런 식\"이라며 한숨을 쉰다."
    ],
    upset: [
        "동현이의 얼굴이 순식간에 굳더니 \"지금 나 무시하는 거냐\"며 언성을 높인다.",
        "동현이가 자리를 박차고 일어나며 \"됐다, 형한테 기대한 내가 잘못이지\"라고 쏘아붙인다.",
        "동현이의 눈에 분노가 스치며 \"진짜 이럴 거야?\"라고 따진다.",
        "동현이가 화를 꾹 참는 표정으로 \"알았어, 나 혼자 알아서 할게\"라고 차갑게 말한다."
    ]
};

// --- 플레이어의 2차 반응(티키타카 선택지) 풀 ---
// money/intimacy/dhMoney/dhEsteem 은 기본 선택에 "추가"로 더해지는 소량의 보정값
function fu(text, delta) { return Object.assign({ text }, delta); }

const followupPool = {
    touched: [
        fu("나도 뭉클해져서 어깨를 두드려준다", { intimacy: 5, dhEsteem: 3 }),
        fu("오글거리니까 그만하라며 능청스럽게 넘긴다", { intimacy: 2, dhEsteem: 5 }),
        fu("그동안 고생 많았다고 진심을 담아 말해준다", { intimacy: 4, dhEsteem: 6 }),
        fu("손을 슬쩍 뿌리치며 징그럽다고 장난스레 밀어낸다", { intimacy: 3, dhEsteem: 2 }),
        fu("기념으로 사진 한 장 찍자고 폰을 꺼낸다", { intimacy: 6, dhEsteem: 1 })
    ],
    pleased: [
        fu("별거 아니라며 쿨한 척 어깨를 으쓱한다", { intimacy: 2, dhEsteem: 2 }),
        fu("다음엔 네가 사라고 슬쩍 찔러본다", { intimacy: 1, dhEsteem: 1, money: 1 }),
        fu("기분 좋은 김에 하이파이브를 청한다", { intimacy: 3, dhEsteem: 2 }),
        fu("그러니까 평소에 잘하라고 잔소리를 얹는다", { intimacy: 0, dhEsteem: 3 }),
        fu("됐고 밥이나 먹으러 가자고 화제를 돌린다", { intimacy: 2, dhEsteem: 0 })
    ],
    awkward: [
        fu("뭐가 문제냐고 자세히 물어본다", { intimacy: 3, dhEsteem: 1 }),
        fu("굳이 캐묻지 않고 그냥 넘어간다", { intimacy: 0, dhEsteem: 0 }),
        fu("분위기를 풀려고 실없는 농담을 던진다", { intimacy: 2, dhEsteem: 1 }),
        fu("눈치를 보다가 슬쩍 화제를 전환한다", { intimacy: 1, dhEsteem: 0 }),
        fu("괜히 머쓱해져서 딴 곳을 쳐다본다", { intimacy: 0, dhEsteem: 1 })
    ],
    hurt: [
        fu("미안하다고 솔직하게 사과한다", { intimacy: 4, dhEsteem: 2 }),
        fu("그런 뜻은 아니었다고 서둘러 해명한다", { intimacy: 2, dhEsteem: 1 }),
        fu("삐졌냐고 놀리며 장난스럽게 어깨동무한다", { intimacy: 1, dhEsteem: -1 }),
        fu("진심으로 다가가 왜 서운했는지 물어본다", { intimacy: 3, dhEsteem: 3 }),
        fu("그래도 어쩔 수 없었다고 단호하게 선을 긋는다", { intimacy: -2, dhEsteem: 2 })
    ],
    upset: [
        fu("화내지 말라며 진심으로 달랜다", { intimacy: 3, dhEsteem: 0 }),
        fu("나도 나름 사정이 있었다고 맞받아친다", { intimacy: -1, dhEsteem: 2 }),
        fu("미안하다고 바로 고개를 숙인다", { intimacy: 5, dhEsteem: -1 }),
        fu("똑같이 언성을 높이며 맞선다", { intimacy: -5, dhEsteem: 1 }),
        fu("일단 진정하라며 자리를 잠깐 피한다", { intimacy: 0, dhEsteem: 0 })
    ]
};

// 선택 결과의 온도(tier)를 판정
function classifyTier(intimacyDelta, esteemDelta) {
    const score = (intimacyDelta || 0) + (esteemDelta || 0);
    if (score >= 25) return 'touched';
    if (score >= 8) return 'pleased';
    if (score > -12) return 'awkward';
    if (score > -35) return 'hurt';
    return 'upset';
}

function normDelta(obj) {
    return {
        money: obj.money || 0,
        intimacy: obj.intimacy || 0,
        dhMoney: obj.dhMoney || 0,
        dhEsteem: obj.dhEsteem || 0
    };
}

// --- 특별 만남 (카페 / 여행 / 술집) : 연도마다 1번씩 이용 가능 ---
const specialEvents = [
    {
        key: 'cafe',
        name: '카페 데이트',
        bg: IMAGE_FILES.bgCafe,
        situation: "오랜만에 여유롭게 동현이와 조용한 카페에 마주 앉았다. 동현이가 메뉴판을 한참 들여다보다 제일 비싼 케이크 세트를 가리킨다.",
        choices: [
            { text: "흔쾌히 케이크 세트까지 다 결제해준다", money: -3, intimacy: 15, dhEsteem: 5 },
            { text: "아메리카노만 시키라고 타협을 본다", money: -1, intimacy: 5, dhEsteem: 0 },
            { text: "그럴 돈 있으면 적금이나 들라고 잔소리한다", money: 0, intimacy: -10, dhEsteem: 10 }
        ]
    },
    {
        key: 'travel',
        name: '즉흥 여행',
        bg: IMAGE_FILES.bgTravel,
        situation: "동현이가 오랜만에 바람 좀 쐬자며 즉흥적으로 잡은 1박 2일 여행지에 도착했다. 계획 없이 숙소부터 잡자며 두리번거린다.",
        choices: [
            { text: "숙소비를 통 크게 쏘고 편하게 쉬자고 한다", money: -15, intimacy: 20, dhEsteem: 5 },
            { text: "저렴한 게스트하우스를 같이 찾아본다", money: -5, intimacy: 10, dhEsteem: 5 },
            { text: "계획 없이 오냐고 타박하며 혼자 다니라 한다", money: 0, intimacy: -15, dhEsteem: -5 }
        ]
    },
    {
        key: 'bar',
        name: '포차 술자리',
        bg: IMAGE_FILES.bgBar,
        situation: "오랜만에 동네 포차에서 소주 한잔 기울이던 중, 취기가 오른 동현이가 형한테 할 말이 있다며 진지한 얼굴을 한다.",
        choices: [
            { text: "잔을 내려놓고 진지하게 귀를 기울인다", money: 0, intimacy: 20, dhEsteem: 10 },
            { text: "취했다며 웃어넘기고 안주만 더 시킨다", money: -3, intimacy: 0, dhEsteem: 0 },
            { text: "귀찮다는 티를 내며 폰만 들여다본다", money: 0, intimacy: -20, dhEsteem: -15 }
        ]
    }
];

// --- 돌발 이벤트(랜덤 팝인, 티키타카 없이 간단히 진행) ---
const randomEvents = [
    {
        situation: "갑자기 동현이에게 카톡이 왔다. \"형!! 나 로또 5등 당첨됐어! 치킨 쏠게!!\"",
        choices: [
            { text: "치킨은 감사히 얻어먹는다", money: 0, intimacy: 10, dhMoney: -1, dhEsteem: 5 },
            { text: "애걔 5등이냐고 놀린다", money: 0, intimacy: -5, dhMoney: 0, dhEsteem: -5 }
        ]
    },
    {
        situation: "동현이가 갑자기 전화해서 \"형, 나 오늘 기분이 안 좋아... 그냥 목소리만 듣고 싶었어\"라고 한다.",
        choices: [
            { text: "하던 일을 멈추고 한참 통화를 들어준다", money: 0, intimacy: 15, dhMoney: 0, dhEsteem: 10 },
            { text: "바쁘다며 나중에 통화하자고 끊는다", money: 0, intimacy: -15, dhMoney: 0, dhEsteem: -10 }
        ]
    },
    {
        situation: "동현이가 SNS에 형과 함께 찍은 옛날 사진을 올리며 \"이때가 좋았지ㅠㅠ\"라는 글을 남겼다.",
        choices: [
            { text: "댓글로 훈훈한 답글을 달아준다", money: 0, intimacy: 10, dhMoney: 0, dhEsteem: 5 },
            { text: "오글거려서 조용히 좋아요만 누른다", money: 0, intimacy: 3, dhMoney: 0, dhEsteem: 0 }
        ]
    }
];
