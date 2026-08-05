const yearData = {
    2017: {
        title: "2017년: 대전에 사는 중부대학교 경찰행정학과 대학생",
        events: {
            chat: [
                { 
                    id: "17_chat_1", 
                    type: "choice", 
                    title: "단톡방 동기들의 과제 질의", 
                    situation: "동현이가 단톡방에 '얘들아 나 경찰학개론 레포트 좀 대충 쓰면 안 되냐 ㅠㅠ, 아직 1학년인데 뭔 과제가 이리 빡세냐... ㅜㅜ'라며 징징대는 카톡을 올렸다.", 
                    choices: [
                        { text: "참고할 수 있는 나의 레포트 파일을 통째로 던져준다", money: 0, intimacy: 15, dhEsteem: 5 },
                        { text: "목차랑 참고문헌만 살짝 찍어서 보내준다", money: 0, intimacy: 5, dhEsteem: 0 },
                        { text: "귀찮아서 '안읽씹' 해버린다", money: 0, intimacy: -10, dhEsteem: -5 }
                    ],
                    steps: {
                        1: [
                            { text: "어려우면 내가 아는 선에서 조금 도와줄게", money: 0, intimacy: 10, dhEsteem: 5 },
                            { text: "벌써부터 징징대지 말고 대충 적당히 해라", money: 0, intimacy: 5, dhEsteem: 2 },
                            { text: "내꺼 베껴 쓸 생각 말고 혼자서 좀 해봐라", money: 0, intimacy: -2, dhEsteem: 5 }
                        ],
                        2: [
                            { text: "모르는 거 있으면 언제든 물어봐, 힘내자", money: 0, intimacy: 8, dhEsteem: 4 },
                            { text: "다음엔 진짜 이런 거 없다, 알아서 해라", money: 0, intimacy: 3, dhEsteem: 2 },
                            { text: "대학생이 레포트 하나 가지고 엄살은", money: 0, intimacy: -3, dhEsteem: 3 }
                        ]
                    }
                },
                { id: "17_chat_2", type: "chat", title: "어머니 용돈 미입금 사태", situation: "동현이가 급하게 카톡을 보냈다.", chatMessage: "친구야... 우리 엄마가 아직 용돈을 안 보내주셨어 ㅠㅠ 전공책 사야 하는데 5만원만 빌려주라...", keywords: [
                    { keyword: "돈", result: { text: "책 사라고 5만 원을 보내주었다.", money: -5, intimacy: 15, dhEsteem: 0 } },
                    { keyword: "알바", result: { text: "알바나 하라고 팩폭을 날렸다.", money: 0, intimacy: -10, dhEsteem: -10 } }
                ], defaultResult: { text: "거짓말 치지 말라고 무시했다.", money: 0, intimacy: -5, dhEsteem: 0 }}
            ],
            alba: [
                { 
                    id: "17_alba_1", 
                    type: "choice", 
                    title: "동현이의 편의점 야간 알바 습격", 
                    situation: "동현이가 알바하는 편의점에 놀러갔다. 그런데 동현이는 카운터에서 폰게임만 하고 있고, 손님이 계산도 안 하고 나가려 한다!", 
                    choices: [
                        { text: "내가 대신 손님을 붙잡고 계산을 유도한다", money: 0, intimacy: 10, dhEsteem: 5 },
                        { text: "동현이가 짤릴까봐 내 돈으로 몰래 결제해둔다", money: -2, intimacy: 20, dhEsteem: -5 },
                        { text: "재밌는 구경거리라며 동현이가 털리는 걸 방관한다", money: 0, intimacy: -15, dhEsteem: -10 }
                    ],
                    steps: {
                        1: [
                            { text: "다음에 정신 차리면 되지, 너무 기죽지 마라", money: 0, intimacy: 5, dhEsteem: 5 },
                            { text: "일은 안 하고 게임만 하니까 이 사단이 나지", money: 0, intimacy: 2, dhEsteem: 5 },
                            { text: "정신 안 차릴래? 손님 나가는 것도 모르고 원참", money: 0, intimacy: 5, dhEsteem: 2 }
                        ],
                        2: [
                            { text: "고생했어, 다음엔 더 잘할 수 있을 거야", money: 0, intimacy: 5, dhEsteem: 3 },
                            { text: "다음부터 알바할 때는 핸드폰 집어넣어라", money: 0, intimacy: 5, dhEsteem: 3 },
                            { text: "진짜 못 말린다 너도 참", money: 0, intimacy: 3, dhEsteem: 1 }
                        ]
                    }
                },
                { 
                    id: "17_alba_2", 
                    type: "choice", 
                    title: "전공 스터디 구경", 
                    situation: "동현이의 전공 스터디 모임에 밥을 사주러 갔다. 동현이는 형법 판례를 하나도 몰라 어버버대고 있다.", 
                    choices: [
                        { text: "옆에 앉아서 판례 요약본을 같이 정리해준다", money: 0, intimacy: 15, dhEsteem: 10 },
                        { text: "밥이나 먹자며 동현이를 스터디에서 빼내어 PC방에 데려간다", money: -10, intimacy: 20, dhEsteem: -15 },
                        { text: "한심하다는 눈빛을 보내고 밥값만 결제하고 나온다", money: -5, intimacy: -10, dhEsteem: -5 }
                    ],
                    steps: {
                        1: [
                            { text: "천천히 하나씩 익히면 다 이해할 수 있어", money: 0, intimacy: 8, dhEsteem: 6 },
                            { text: "기본 판례도 모르면 어쩌자는 거냐", money: 0, intimacy: 3, dhEsteem: 5 },
                            { text: "머리 아프니까 일단 골치 아픈 건 접어두자", money: 0, intimacy: 10, dhEsteem: -5 }
                        ],
                        2: [
                            { text: "다음엔 미리미리 준비해서 가보자", money: 0, intimacy: 5, dhEsteem: 5 },
                            { text: "다음엔 공부 좀 제대로 해오고 참여해라", money: 0, intimacy: 5, dhEsteem: 5 },
                            { text: "몰라도 너무 모른다 야", money: 0, intimacy: 2, dhEsteem: -2 }
                        ]
                    }
                }
            ],
            home: [
                { 
                    id: "17_home_1", 
                    type: "choice", 
                    title: "동현이의 대전 자취방 방문", 
                    situation: "주말에 동현이 자취방에 놀러갔더니, 방은 돼지우리에 동현이는 누워서 맨시티 축구 영상만 보고 있다.", 
                    choices: [
                        { text: "한숨을 쉬며 방 청소를 싹 대신 해준다", money: 0, intimacy: 20, dhEsteem: -10 },
                        { text: "치킨을 시켜주고 같이 축구를 본다", money: -20, intimacy: 30, dhEsteem: 0 },
                        { text: "이게 사람 사는 방이냐며 잔소리 폭격을 쏟아붓는다", money: 0, intimacy: -15, dhEsteem: 10 }
                    ],
                    steps: {
                        1: [
                            { text: "내가 같이 치워줄 테니까 너무 걱정 마", money: 0, intimacy: 15, dhEsteem: 5 },
                            { text: "방 좀 치우고 살아라 진짜 쓰레기장이 따로 없네", money: 0, intimacy: 5, dhEsteem: 2 },
                            { text: "일단 배고프니까 입에 뭐부터 넣자", money: 0, intimacy: 10, dhEsteem: 0 }
                        ],
                        2: [
                            { text: "앞으로는 깔끔하게 잘 지내보자", money: 0, intimacy: 6, dhEsteem: 4 },
                            { text: "다음번에 왔을 때도 이 모양이면 진짜 안 온다", money: 0, intimacy: 5, dhEsteem: 3 },
                            { text: "축구 그만 보고 사람답게 좀 살아라", money: 0, intimacy: 4, dhEsteem: 2 }
                        ]
                    }
                },
                { 
                    id: "17_home_2", 
                    type: "choice", 
                    title: "진로 상담", 
                    situation: "동현이가 술자리에서 '나는 경찰이랑 안 맞는 것 같아...'라며 휴학을 고민하며 징징댄다.", 
                    choices: [
                        { text: "소주를 사주며 넌 할 수 있다고 독서실을 끊어준다", money: -15, intimacy: 25, dhEsteem: 20 },
                        { text: "경찰이 장난이냐며 당장 군대나 가라고 조언한다", money: -2, intimacy: 5, dhEsteem: -5 },
                        { text: "징징대는 게 듣기 싫어서 먼저 집에 가버린다", money: 0, intimacy: -20, dhEsteem: -15 }
                    ],
                    steps: {
                        1: [
                            { text: "힘든 거 있으면 언제든 다 들어줄게", money: 0, intimacy: 12, dhEsteem: 10 },
                            { text: "술이 들어간다 쭉쭉쭉, 고민은 나중에 해라", money: 0, intimacy: 10, dhEsteem: 5 },
                            { text: "정신 단단히 차려라, 다 그렇게 버티는 거다", money: 0, intimacy: 5, dhEsteem: 10 }
                        ],
                        2: [
                            { text: "네가 뭘 하든 난 늘 응원해", money: 0, intimacy: 12, dhEsteem: 10 },
                            { text: "할 수 있다니까, 믿고 가보자", money: 0, intimacy: 10, dhEsteem: 8 },
                            { text: "정 안 되겠으면 휴학을 하든 정리를 하든 해라", money: 0, intimacy: -2, dhEsteem: -5 }
                        ]
                    }
                }
            ]
        }
    },
    2018: {
        title: "2018년: 중퇴를 심각하게 고민하는 대학생",
        events: {
            chat: [
                { id: "18_chat_1", type: "chat", title: "갑작스러운 자퇴 통보 카톡", situation: "동현이가 뜬금없이 카톡을 보냈다.", chatMessage: "친구야 나 진짜 중부대 자퇴할까봐... 내 길이 아닌 거 같아.", keywords: [
                    { keyword: "군대", result: { text: "헛소리 말고 군대나 가라고 일침을 놨다.", money: 0, intimacy: 5, dhEsteem: -10 } },
                    { keyword: "지랄", result: { text: "지랄한다... 너가 그럴때냐?", money: 0, intimacy: -5, dhEsteem: -15 } },
                    { keyword: "자퇴", result: { text: "자퇴는 오바니까 휴학부터 하라고 말렸다.", money: 0, intimacy: 15, dhEsteem: 10 } }
                ], defaultResult: { text: "네 인생 네가 알아서 하라고 대답했다.", money: 0, intimacy: -10, dhEsteem: -10 }},
                { 
                    id: "18_chat_2", 
                    type: "choice", 
                    title: "중고거래 사기 사건", 
                    situation: "동현이가 중고나라에서 노트북을 사려다 30만 원을 사기당했다며 경찰서 앞에서 울며 전화가 왔다.", 
                    choices: [
                        { text: "불쌍해서 내 돈으로 30만 원을 쏴준다", money: -30, intimacy: 40, dhEsteem: -10 },
                        { text: "경찰서에 들어가서 진술서 쓰는 걸 옆에서 도와준다", money: 0, intimacy: 25, dhEsteem: 5 },
                        { text: "사기 당하는 능지도 대단하다며 전화로 실컷 놀린다", money: 0, intimacy: -25, dhEsteem: -20 }
                    ],
                    steps: {
                        1: [
                            { text: "정말 속상하겠다, 힘내자 내가 위로해줄게", money: 0, intimacy: 12, dhEsteem: 5 },
                            { text: "세상에 믿을 놈 하나 없다, 조심 좀 하지", money: 0, intimacy: 10, dhEsteem: 2 },
                            { text: "에휴 이걸 또 사기를 당하냐 머리 아프다", money: 0, intimacy: -5, dhEsteem: -5 }
                        ],
                        2: [
                            { text: "이번 기회로 삼아 돈 관리 더 잘해보자", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "다음부터는 중고거래 절대 하지 마라", money: 0, intimacy: 5, dhEsteem: 3 },
                            { text: "돈 관리를 어떻게 하는 거냐 진짜", money: 0, intimacy: -2, dhEsteem: -3 }
                        ]
                    }
                }
            ],
            alba: [
                { 
                    id: "18_alba_1", 
                    type: "choice", 
                    title: "배달 대행 알바하는 동현이", 
                    situation: "야식으로 치킨을 시켰는데, 휴학하고 배달 대행을 시작한 동현이가 배달을 왔다. 팁을 달라고 쳐다본다.", 
                    choices: [
                        { text: "고생한다며 팁으로 5만 원을 쥐어준다", money: -5, intimacy: 25, dhEsteem: 10 },
                        { text: "수고하라고 비타음료수 하나만 쥐어준다", money: 0, intimacy: 5, dhEsteem: 0 },
                        { text: "배달이나 빨리 다니라고 핀잔을 주고 문을 닫는다", money: 0, intimacy: -15, dhEsteem: -10 }
                    ],
                    steps: {
                        1: [
                            { text: "날씨도 추운데 정말 고생 많다", money: 0, intimacy: 10, dhEsteem: 5 },
                            { text: "조심히 다녀라 도로 위 위험하다", money: 0, intimacy: 8, dhEsteem: 3 },
                            { text: "열심히 사는 건 좋은데 안전운전 해라", money: 0, intimacy: 5, dhEsteem: 2 }
                        ],
                        2: [
                            { text: "다음에 올 때 맛있는 거 대접해 줄게", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "다 다음에 또 오면 그때 제대로 대접해 줄게", money: 0, intimacy: 5, dhEsteem: 2 },
                            { text: "딴 데 새지 말고 배달이나 빨리 가라", money: 0, intimacy: -2, dhEsteem: -2 }
                        ]
                    }
                },
                { 
                    id: "18_alba_2", 
                    type: "choice", 
                    title: "휴학계 대리 제출 부탁", 
                    situation: "동현이가 늦잠을 자서 오늘이 휴학 마감일인데, 나보고 대신 학과 사무실에 가달라고 부탁한다.", 
                    choices: [
                        { text: "욕을 하면서도 대신 뛰어가서 서류를 내준다", money: 0, intimacy: 30, dhEsteem: -5 },
                        { text: "직접 오라고 학과 조교를 바꿔준다", money: 0, intimacy: -10, dhEsteem: 5 },
                        { text: "내 알 바 아니라고 부탁을 무시한다", money: 0, intimacy: -40, dhEsteem: -30 }
                    ],
                    steps: {
                        1: [
                            { text: "급할수록 차분하게 잘 처리해보자", money: 0, intimacy: 10, dhEsteem: 2 },
                            { text: "진짜 너 같은 웬수는 세상에 없다", money: 0, intimacy: 10, dhEsteem: -2 },
                            { text: "이번만 특별히 해주는 줄 알아라", money: 0, intimacy: 8, dhEsteem: 0 }
                        ],
                        2: [
                            { text: "고생했어, 다음엔 미리 준비하자", money: 0, intimacy: 6, dhEsteem: 3 },
                            { text: "다음부터는 네가 직접 와서 처리해라", money: 0, intimacy: 5, dhEsteem: 2 },
                            { text: "정신 좀 차리고 살아라 제발", money: 0, intimacy: 2, dhEsteem: 1 }
                        ]
                    }
                }
            ],
            home: [
                { 
                    id: "18_home_1", 
                    type: "choice", 
                    title: "방구석 도박장 변신", 
                    situation: "동현이 방에 갔더니, 모니터에 온갖 가상화폐 차트를 띄워놓고 나보고 투자금을 빌려달라고 한다.", 
                    choices: [
                        { text: "차트를 같이 분석해주며 100만 원을 투자해본다", money: -100, intimacy: 15, dhEsteem: 10 },
                        { text: "도박하지 말라며 컴퓨터 전원을 뽑아버린다", money: 0, intimacy: -25, dhEsteem: -10 },
                        { text: "말기 암환자 보듯 혀를 차며 집에 돌아간다", money: 0, intimacy: -15, dhEsteem: -20 }
                    ],
                    steps: {
                        1: [
                            { text: "너무 무리하게 투자하진 마라", money: 0, intimacy: 5, dhEsteem: 5 },
                            { text: "이러다 진짜 한강 간다 정신 차려라", money: 0, intimacy: 2, dhEsteem: 5 },
                            { text: "코인 같은 소리 하고 있네 아주", money: 0, intimacy: -2, dhEsteem: -5 }
                        ],
                        2: [
                            { text: "안전하게 차근차근 다시 시작하자", money: 0, intimacy: 8, dhEsteem: 8 },
                            { text: "정신 제대로 차리고 본업이나 해라", money: 0, intimacy: 5, dhEsteem: 5 },
                            { text: "뼈도 못 바른다 진짜로", money: 0, intimacy: -5, dhEsteem: -5 }
                        ]
                    }
                },
                { 
                    id: "18_home_2", 
                    type: "choice", 
                    title: "본가에서 쫓겨난 동현이", 
                    situation: "휴학 문제로 부모님과 대판 싸우고 쫓겨난 동현이가 내 자취방 문을 두드린다.", 
                    choices: [
                        { text: "일주일 동안 내 방에서 먹여주고 재워준다", money: -30, intimacy: 40, dhEsteem: -10 },
                        { text: "찜질방 비만 쥐어주고 내보낸다", money: -2, intimacy: 5, dhEsteem: 0 },
                        { text: "없는 척하고 문을 열어주지 않는다", money: 0, intimacy: -30, dhEsteem: -30 }
                    ],
                    steps: {
                        1: [
                            { text: "편하게 쉬다 가라, 마음 풀고", money: 0, intimacy: 12, dhEsteem: 5 },
                            { text: "부모님이랑 대단하다 진짜로", money: 0, intimacy: 10, dhEsteem: -2 },
                            { text: "일단 들어와서 밥이나 먹어라", money: 0, intimacy: 15, dhEsteem: 2 }
                        ],
                        2: [
                            { text: "부모님 마음도 헤아려서 잘 풀자", money: 0, intimacy: 10, dhEsteem: 8 },
                            { text: "나중에 부모님께 제대로 사과해라", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "얹혀사는 동안 청소나 똑바로 해라", money: 0, intimacy: 5, dhEsteem: 3 }
                        ]
                    }
                }
            ]
        }
    },
    2019: {
        title: "2019년: 입대를 앞둔 군인 대기생",
        events: {
            chat: [
                { id: "19_chat_1", type: "chat", title: "입영 통지서 발급", situation: "동현이가 울상이 되어 카톡을 보냈다.", chatMessage: "친구... 나 다음 달에 논산 가... 군대 가기 전에 얼굴 좀 보자 ㅠㅠ", keywords: [
                    { keyword: "밥", result: { text: "군대 가기 전 밥이나 사주겠다고 약속했다.", money: -5, intimacy: 20, dhEsteem: 5 } },
                    { keyword: "축하", result: { text: "국방의 의무를 축하한다며 실컷 놀려댔다.", money: 0, intimacy: -10, dhEsteem: -10 } }
                ], defaultResult: { text: "잘 다녀오라고 이모티콘만 보냈다.", money: 0, intimacy: 0, dhEsteem: 0 }},
                { 
                    id: "19_chat_2", 
                    type: "choice", 
                    title: "입대 전 송별회 계산", 
                    situation: "동현이 송별회 술자리. 다 먹고 났는데 동현이가 '나 군대 가는데 친구들이 내는 거지?'라며 버틴다.", 
                    choices: [
                        { text: "불쌍한 놈 하면서 카드를 시원하게 긁는다", money: -20, intimacy: 30, dhEsteem: 15 },
                        { text: "가위바위보를 해서 진 사람이 내기로 한다", money: -5, intimacy: 10, dhEsteem: 5 },
                        { text: "무슨 소리냐며 동현이 몫까지 철저히 더치페이 시킨다", money: 0, intimacy: -30, dhEsteem: -20 }
                    ],
                    steps: {
                        1: [
                            { text: "군대 가기 전이니까 내가 통 크게 쏜다", money: 0, intimacy: 12, dhEsteem: 8 },
                            { text: "군대가 유세냐 아주 그냥 지갑을 털어먹네", money: 0, intimacy: 5, dhEsteem: 5 },
                            { text: "가기 전이니까 한번 봐준다 진짜", money: 0, intimacy: 10, dhEsteem: 3 }
                        ],
                        2: [
                            { text: "몸 건강히 무사히 잘 다녀와라", money: 0, intimacy: 10, dhEsteem: 5 },
                            { text: "훈련소 가서 고생이나 해라", money: 0, intimacy: 2, dhEsteem: 2 },
                            { text: "몸 건강히 잘 다녀와라 제발", money: 0, intimacy: 8, dhEsteem: 5 }
                        ]
                    }
                }
            ],
            alba: [
                { 
                    id: "19_alba_1", 
                    type: "choice", 
                    title: "상하차 알바 구출 작전", 
                    situation: "군대 가기 전 돈을 번다며 상하차를 간 동현이. 새벽 2시에 허리가 끊어질 것 같다며 데리러 오라고 전화가 왔다.", 
                    choices: [
                        { text: "택시를 타고 달려가서 동현이를 집에 데려온다", money: -3, intimacy: 35, dhEsteem: -15 },
                        { text: "남자면 끝까지 버티라고 훈계하고 전화를 끊는다", money: 0, intimacy: -15, dhEsteem: 10 },
                        { text: "자느라 전화를 안 받는다", money: 0, intimacy: -10, dhEsteem: -20 }
                    ],
                    steps: {
                        1: [
                            { text: "고생했어, 얼른 타고 편히 가자", money: 0, intimacy: 12, dhEsteem: 2 },
                            { text: "상하차가 그렇게 만만해 보였냐", money: 0, intimacy: 5, dhEsteem: -5 },
                            { text: "에휴 어쩌겠냐 데리러 간다 기다려라", money: 0, intimacy: 15, dhEsteem: -2 }
                        ],
                        2: [
                            { text: "다리 아프지? 조심히 들어가 쉬어라", money: 0, intimacy: 10, dhEsteem: 3 },
                            { text: "군대 가기 전에 사람 하나 살린다 진짜", money: 0, intimacy: 8, dhEsteem: 0 },
                            { text: "정신 좀 차려라 허리 나가기 전에", money: 0, intimacy: 5, dhEsteem: 2 }
                        ]
                    }
                },
                { 
                    id: "19_alba_2", 
                    type: "choice", 
                    title: "입대 전 헬스장 동반 등록", 
                    situation: "군대 가서 고문관 안 되려면 체력을 길러야 한다며, 나보고 헬스장 같이 끊자고 조른다.", 
                    choices: [
                        { text: "내 돈으로 2인권을 결제해서 억지로 끌고 다닌다", money: -30, intimacy: 20, dhEsteem: 25 },
                        { text: "등록은 안 하고 동네 공원 뜀걸음이나 같이 해준다", money: 0, intimacy: 15, dhEsteem: 10 },
                        { text: "네 체력은 노답이라며 단칼에 거절한다", money: 0, intimacy: -20, dhEsteem: -15 }
                    ],
                    steps: {
                        1: [
                            { text: "같이 열심히 해서 건강해지자", money: 0, intimacy: 10, dhEsteem: 10 },
                            { text: "운동 좀 해서 사람 만들어야지", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "군대가기 전 체력 단련은 필수다", money: 0, intimacy: 5, dhEsteem: 8 }
                        ],
                        2: [
                            { text: "무리하지 말고 끝까지 파이팅하자", money: 0, intimacy: 8, dhEsteem: 8 },
                            { text: "낙오하지 말고 끝까지 완주해라", money: 0, intimacy: 6, dhEsteem: 5 },
                            { text: "의지박약이라 걱정이다 진짜", money: 0, intimacy: 2, dhEsteem: 3 }
                        ]
                    }
                }
            ],
            home: [
                { 
                    id: "19_home_1", 
                    type: "choice", 
                    title: "입대 전날 밤, 바리깡 컷", 
                    situation: "입대 전날 동현이 자취방. 미용실 갈 돈도 아깝다며 나보고 바리깡으로 머리를 밀어달라고 한다.", 
                    choices: [
                        { text: "눈물을 훔치며 예쁘게 반삭을 해준다", money: 0, intimacy: 30, dhEsteem: 10 },
                        { text: "장난기가 발동해 고속도로(가운데만 밀기)를 내버린다", money: 0, intimacy: -15, dhEsteem: -30 },
                        { text: "징그럽다며 미용실이나 가라고 내쫓는다", money: 0, intimacy: -20, dhEsteem: -10 }
                    ],
                    steps: {
                        1: [
                            { text: "내가 예쁘게 잘 깎아줄 테니까 걱정 마", money: 0, intimacy: 12, dhEsteem: 8 },
                            { text: "가만히 있어라 예쁘게 밀어줄 테니까", money: 0, intimacy: 10, dhEsteem: 5 },
                            { text: "머리 깎는 꼴 보니까 진짜 가긴 가는구나", money: 0, intimacy: 8, dhEsteem: 3 }
                        ],
                        2: [
                            { text: "몸 건강히 훈련 잘 받고 무사히 돌아와", money: 0, intimacy: 12, dhEsteem: 8 },
                            { text: "입대 잘하고 훈련소에서 살아 돌아와라", money: 0, intimacy: 10, dhEsteem: 5 },
                            { text: "눈물 흘리지 말고 씩씩하게 가라", money: 0, intimacy: 5, dhEsteem: 3 }
                        ]
                    }
                },
                { 
                    id: "19_home_2", 
                    type: "choice", 
                    title: "훈련소 쓸데없는 쇼핑", 
                    situation: "위장크림, 고급 깔창, 라이트 펜 등 필요 없는 훈련소 세트를 10만 원어치 장바구니에 담아놓고 나보고 사달라 조른다.", 
                    choices: [
                        { text: "군생활 편하게 하라며 전부 결제해준다", money: -10, intimacy: 20, dhEsteem: 5 },
                        { text: "진짜 필요한 전자시계 하나만 딱 사준다", money: -3, intimacy: 10, dhEsteem: 10 },
                        { text: "훈련소 가면 다 뺏긴다며 장바구니를 꺼버린다", money: 0, intimacy: -10, dhEsteem: 5 }
                    ],
                    steps: {
                        1: [
                            { text: "군생활에 도움 될 만한 걸로 골라줄게", money: 0, intimacy: 10, dhEsteem: 5 },
                            { text: "이런 거 다 쓸모없다니까", money: 0, intimacy: 3, dhEsteem: 2 },
                            { text: "그래도 군생활 템빨이라니 하나 사준다", money: 0, intimacy: 8, dhEsteem: 3 }
                        ],
                        2: [
                            { text: "몸 조심히 잘 다녀오기만 해라", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "몸 건강히 훈련 잘 받고 와라", money: 0, intimacy: 5, dhEsteem: 4 },
                            { text: "쓸데없는 짓 하지 말고 조용히 있다 와라", money: 0, intimacy: 2, dhEsteem: 2 }
                        ]
                    }
                }
            ]
        }
    },
    2020: {
        title: "2020년: 군바리 상병 전동현",
        events: {
            chat: [
                { id: "20_chat_1", type: "chat", title: "사지방에서 날아온 생존 신고", situation: "군대에 있는 동현이가 카톡을 보냈다.", chatMessage: "친구... 나 유격 훈련 끝났어... 온몸이 부서질 거 같아 PX 냉동 먹고 싶다.", keywords: [
                    { keyword: "돈", result: { text: "맛있는 거 사 먹으라고 용돈을 보냈다.", money: -5, intimacy: 25, dhEsteem: 10 } },
                    { keyword: "뺑이", result: { text: "더 고생하라고 놀렸다.", money: 0, intimacy: -15, dhEsteem: -10 } }
                ], defaultResult: { text: "고생했다고 영혼 없이 위로했다.", money: 0, intimacy: 5, dhEsteem: 0 }},
                { 
                    id: "20_chat_2", 
                    type: "choice", 
                    title: "휴가 복귀비 대출", 
                    situation: "동현이가 상병 휴가로 나와서 신나게 놀다가, 부대 복귀할 택시비가 없다며 돈을 빌려달라 한다.", 
                    choices: [
                        { text: "미귀향 탈영병 될까봐 5만 원을 보내준다", money: -5, intimacy: 20, dhEsteem: 0 },
                        { text: "지하철과 버스를 타고 가라고 노선을 찾아준다", money: 0, intimacy: 5, dhEsteem: 5 },
                        { text: "알아서 걸어가라며 전화를 뚝 끊어버린다", money: 0, intimacy: -30, dhEsteem: -20 }
                    ],
                    steps: {
                        1: [
                            { text: "휴가 나와서 돈 쓰느라 고생했다, 조심히 들어가라", money: 0, intimacy: 10, dhEsteem: 5 },
                            { text: "군바리가 휴가 나와서 돈을 다 쓰면 어쩌냐", money: 0, intimacy: 5, dhEsteem: 2 },
                            { text: "탈영하기 전에 얼른 들어가라", money: 0, intimacy: 8, dhEsteem: 3 }
                        ],
                        2: [
                            { text: "다음 휴가 때 또 재밌게 놀자", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "복귀 잘하고 다음 휴가 때 갚아라", money: 0, intimacy: 5, dhEsteem: 2 },
                            { text: "정신 똑바로 차리고 부대로 돌아가라", money: 0, intimacy: 3, dhEsteem: 1 }
                        ]
                    }
                }
            ],
            alba: [
                { 
                    id: "20_alba_1", 
                    type: "choice", 
                    title: "군부대 면회 가기", 
                    situation: "주말을 희생해 동현이네 부대 면회장에 찾아갔다. 동현이가 PX에서 먹을 걸 한가득 담아오며 나를 쳐다본다.", 
                    choices: [
                        { text: "면회 온 김에 PX 풀코스를 시원하게 결제한다", money: -10, intimacy: 30, dhEsteem: 15 },
                        { text: "적당히 먹을 것만 결제하고 빼버린다", money: -3, intimacy: 10, dhEsteem: 0 },
                        { text: "군인이 돈이 어딨냐며 동현이 월급 카드로 긁게 한다", money: 0, intimacy: -20, dhEsteem: -10 }
                    ],
                    steps: {
                        1: [
                            { text: "면회 와서 기쁘지? 맛있게 먹어라", money: 0, intimacy: 10, dhEsteem: 8 },
                            { text: "군대 오니까 면회 오니 좋냐", money: 0, intimacy: 10, dhEsteem: 5 },
                            { text: "마실 거 왕창 먹고 힘내라", money: 0, intimacy: 8, dhEsteem: 4 }
                        ],
                        2: [
                            { text: "남은 군생활도 화이팅하자", money: 0, intimacy: 10, dhEsteem: 8 },
                            { text: "남은 군생활도 잘 버텨라", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "나중에 제대하면 밥 한 끼 사라이", money: 0, intimacy: 5, dhEsteem: 3 }
                        ]
                    }
                },
                { 
                    id: "20_alba_2", 
                    type: "choice", 
                    title: "포상 휴가증 자랑", 
                    situation: "동현이가 사격 만발을 쏴서 휴가증을 땄다고 자랑하며 나보고 놀아달라 한다.", 
                    choices: [
                        { text: "기특하다며 하루 종일 술과 고기를 사맥인다", money: -15, intimacy: 35, dhEsteem: 25 },
                        { text: "딱 PC방 비용만 내주고 같이 게임만 한다", money: -5, intimacy: 15, dhEsteem: 5 },
                        { text: "나 바쁘니까 너네 부모님이나 뵈러 가라고 혼낸다", money: 0, intimacy: -10, dhEsteem: 15 }
                    ],
                    steps: {
                        1: [
                            { text: "사격 대단하다! 축하한다 정말", money: 0, intimacy: 12, dhEsteem: 12 },
                            { text: "웬일로 에이스 짓을 다 했냐", money: 0, intimacy: 8, dhEsteem: 8 },
                            { text: "포상 휴가 나왔으니 시원하게 놀자", money: 0, intimacy: 10, dhEsteem: 10 }
                        ],
                        2: [
                            { text: "휴가 동안 푹 쉬고 복귀해라", money: 0, intimacy: 8, dhEsteem: 8 },
                            { text: "군생활 에이스로 거듭났네", money: 0, intimacy: 6, dhEsteem: 5 },
                            { text: "복귀할 때 긴장 풀지 말고 잘 가라", money: 0, intimacy: 4, dhEsteem: 3 }
                        ]
                    }
                }
            ],
            home: [
                { 
                    id: "20_home_1", 
                    type: "choice", 
                    title: "휴가 중 본가 탈출", 
                    situation: "휴가 나온 동현이가 부모님 잔소리가 듣기 싫다며 내 자취방으로 야반도주를 해왔다.", 
                    choices: [
                        { text: "숨겨주고 같이 치킨을 뜯으며 밤새 논다", money: -5, intimacy: 25, dhEsteem: -10 },
                        { text: "부모님께 안부 전화는 하라고 시키고 재워준다", money: 0, intimacy: 15, dhEsteem: 10 },
                        { text: "불효자식이라며 당장 본가로 쫓아낸다", money: 0, intimacy: -25, dhEsteem: -5 }
                    ],
                    steps: {
                        1: [
                            { text: "편하게 쉬다 가라, 마음껏 놀고", money: 0, intimacy: 10, dhEsteem: 5 },
                            { text: "부모님 걱정하시니까 전화는 드려라", money: 0, intimacy: 5, dhEsteem: 5 },
                            { text: "야반도주 클라스 대단하다", money: 0, intimacy: 8, dhEsteem: -2 }
                        ],
                        2: [
                            { text: "조용히 잘 쉬다가 부대 복귀해라", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "휴가 기간 동안 사고 치지 말고 조용히 쉬어라", money: 0, intimacy: 6, dhEsteem: 3 },
                            { text: "군인 신분 망각하지 말고 조심해라", money: 0, intimacy: 4, dhEsteem: 2 }
                        ]
                    }
                },
                { 
                    id: "20_home_2", 
                    type: "choice", 
                    title: "군적금 해지 선언", 
                    situation: "동현이가 군적금을 깨서 요새 핫하다는 코인에 넣겠다고 고집을 부린다.", 
                    choices: [
                        { text: "군적금은 절대 안 된다며 통장을 내가 압수한다", money: 0, intimacy: -15, dhEsteem: 20 },
                        { text: "그럴 바엔 우량 주식에 넣으라고 경제 스터디를 시킨다", money: 0, intimacy: 10, dhEsteem: 15 },
                        { text: "네 돈이니 맘대로 하라며 방관한다", money: 0, intimacy: -10, dhEsteem: -30 }
                    ],
                    steps: {
                        1: [
                            { text: "소중한 적금이니까 신중하게 생각해봐", money: 0, intimacy: 8, dhEsteem: 10 },
                            { text: "제발 적금은 깨지 마라 거따 박으면 망한다", money: 0, intimacy: 2, dhEsteem: 8 },
                            { text: "정신 차려라 피 같은 돈이다", money: 0, intimacy: 5, dhEsteem: 10 }
                        ],
                        2: [
                            { text: "안전하게 지키는 게 가장 좋아", money: 0, intimacy: 8, dhEsteem: 8 },
                            { text: "안전하게 모아두는 게 최고다", money: 0, intimacy: 5, dhEsteem: 5 },
                            { text: "나중에 후회하지 말고 똑바로 해라", money: 0, intimacy: 3, dhEsteem: 5 }
                        ]
                    }
                }
            ]
        }
    },
    2021: {
        title: "2021년: 전역한 민간인 전동현 (자존감 폭발)",
        events: {
            chat: [
                { id: "21_chat_1", type: "chat", title: "전역 신고 카톡", situation: "동현이가 군복 입은 사진과 함께 카톡을 보냈다.", chatMessage: "친구! 나 드디어 민간인이다!! 세상 다 씹어먹을 수 있을 것 같아ㅋㅋ", keywords: [
                    { keyword: "축하", result: { text: "진심으로 전역을 축하해주었다.", money: 0, intimacy: 25, dhEsteem: 30 } },
                    { keyword: "민방위", result: { text: "예비군, 민방위 지옥이 남았다고 팩폭했다.", money: 0, intimacy: -10, dhEsteem: -10 } }
                ], defaultResult: { text: "적당히 축하한다고 넘겼다.", money: 0, intimacy: 10, dhEsteem: 10 }},
                { 
                    id: "21_chat_2", 
                    type: "choice", 
                    title: "전역 기념 폰 할부 보증", 
                    situation: "동현이가 전역 기념으로 아이폰 최신형을 사려는데 신용이 안 나와서 나보고 할부 보증을 서달라 한다.", 
                    choices: [
                        { text: "전역 선물 겸 할부 보증을 서준다", money: -20, intimacy: 40, dhEsteem: 20 },
                        { text: "미쳤냐고 욕하며 내가 안 쓰는 공기계를 던져준다", money: -2, intimacy: 10, dhEsteem: -10 },
                        { text: "알바해서 알뜰폰이나 쓰라고 욕하고 차단한다", money: 0, intimacy: -40, dhEsteem: -30 }
                    ],
                    steps: {
                        1: [
                            { text: "신중하게 생각해서 결정해봐", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "벌써부터 신용 불량자 되려고 작정했냐", money: 0, intimacy: 5, dhEsteem: 5 },
                            { text: "공기계 쓰는 것만으로도 감사해라", money: 0, intimacy: 2, dhEsteem: -2 }
                        ],
                        2: [
                            { text: "차근차근 하나씩 해나가면 돼", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "일단 사회 적응부터 똑바로 해라", money: 0, intimacy: 5, dhEsteem: 3 },
                            { text: "허세 부릴 생각에 눈이 멀었구만", money: 0, intimacy: -2, dhEsteem: -5 }
                        ]
                    }
                }
            ],
            alba: [
                { 
                    id: "21_alba_1", 
                    type: "choice", 
                    title: "동현이의 카페 알바 염탐", 
                    situation: "동현이가 새로 구한 카페 알바에 가봤다. 일은 안 하고 카운터에서 여자 손님들에게 전역 썰을 풀며 허세를 부리고 있다.", 
                    choices: [
                        { text: "사장님 빙의해서 동현이의 일머리를 폭풍 칭찬해준다", money: 0, intimacy: 20, dhEsteem: 25 },
                        { text: "조용히 아메리카노만 시키고 부담스러운 시선을 보낸다", money: -1, intimacy: -5, dhEsteem: -5 },
                        { text: "사장님께 일 안 한다고 컴플레인을 걸어버린다", money: 0, intimacy: -40, dhEsteem: -40 }
                    ],
                    steps: {
                        1: [
                            { text: "열심히 일하는 모습 보기 좋다", money: 0, intimacy: 8, dhEsteem: 8 },
                            { text: "일이나 해라 허세 부리지 말고", money: 0, intimacy: 5, dhEsteem: 5 },
                            { text: "입 다물고 주문이나 받아라 민간인 2일 차야", money: 0, intimacy: 8, dhEsteem: 2 }
                        ],
                        2: [
                            { text: "힘내서 알바 잘 마무리해라", money: 0, intimacy: 6, dhEsteem: 5 },
                            { text: "손님 부담스러워하신다 정신 차려라", money: 0, intimacy: 4, dhEsteem: 3 },
                            { text: "제발 얌전하게 일 좀 해라", money: 0, intimacy: 3, dhEsteem: 2 }
                        ]
                    }
                },
                { 
                    id: "21_alba_2", 
                    type: "choice", 
                    title: "복학 수강신청 대행", 
                    situation: "동현이가 복학 수강신청 방법을 다 까먹었다며 내 노트북으로 대신 해달라고 징징댄다.", 
                    choices: [
                        { text: "한숨 쉬며 꿀교양 위주로 완벽한 시간표를 짜준다", money: 0, intimacy: 30, dhEsteem: 10 },
                        { text: "하는 방법만 알려주고 네가 하라고 윽박지른다", money: 0, intimacy: 5, dhEsteem: 5 },
                        { text: "일부러 금요일 1교시 폭탄 강좌만 신청해버린다", money: 0, intimacy: -30, dhEsteem: -20 }
                    ],
                    steps: {
                        1: [
                            { text: "내가 도와줄 테니까 너무 걱정 마", money: 0, intimacy: 10, dhEsteem: 5 },
                            { text: "대학생이 수강신청도 혼자 못 하냐", money: 0, intimacy: 5, dhEsteem: 2 },
                            { text: "이번만 해준다 앞으로는 혼자 해라", money: 0, intimacy: 10, dhEsteem: 3 }
                        ],
                        2: [
                            { text: "즐거운 학교 생활 보내길 바란다", money: 0, intimacy: 8, dhEsteem: 6 },
                            { text: "꿀교양 위주로 넣어놨으니 지각하지 마라", money: 0, intimacy: 8, dhEsteem: 4 },
                            { text: "학교 생활 좀 제대로 해봐라 복학생 형", money: 0, intimacy: 5, dhEsteem: 3 }
                        ]
                    }
                }
            ],
            home: [
                { 
                    id: "21_home_1", 
                    type: "choice", 
                    title: "백수왕 동현이 구출", 
                    situation: "전역 후 두 달째 방에만 박혀 게임만 하는 동현이. 방 문을 열어보니 홀애비 냄새가 진동한다.", 
                    choices: [
                        { text: "억지로 끌고 나와 옷을 사주고 미용실에 데려간다", money: -15, intimacy: 30, dhEsteem: 30 },
                        { text: "창문을 열고 환기시키며 폭풍 잔소리를 시전한다", money: 0, intimacy: -10, dhEsteem: 5 },
                        { text: "노답이라며 사진을 찍어 단톡방에 박제한다", money: 0, intimacy: -25, dhEsteem: -30 }
                    ],
                    steps: {
                        1: [
                            { text: "새 마음으로 멋지게 변신해 보자", money: 0, intimacy: 10, dhEsteem: 10 },
                            { text: "방 안에서 썩어 문드러질 일 있냐", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "사람 꼴 좀 하고 살자 제발", money: 0, intimacy: 10, dhEsteem: 8 }
                        ],
                        2: [
                            { text: "천천히 하나씩 준비해 나가면 돼", money: 0, intimacy: 8, dhEsteem: 8 },
                            { text: "옷 갈아입었으면 이제 알바든 공부든 알아봐라", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "백수 탈출 좀 하자 진짜", money: 0, intimacy: 5, dhEsteem: 4 }
                        ]
                    }
                },
                { 
                    id: "21_home_2", 
                    type: "choice", 
                    title: "경찰 시험 재도전 선언", 
                    situation: "동현이가 갑자기 눈빛이 돌변하더니, 복학을 미루고 노량진에 가서 경찰 시험에 올인하겠다고 선언한다.", 
                    choices: [
                        { text: "그 결심 응원한다며 합격 부적 삼아 용돈을 쥐어준다", money: -10, intimacy: 30, dhEsteem: 30 },
                        { text: "현실 도피 아니냐며 진짜 할 수 있는지 팩폭으로 검증한다", money: 0, intimacy: 5, dhEsteem: -10 },
                        { text: "넌 100% 떨어진다며 찬물을 확 끼얹는다", money: 0, intimacy: -30, dhEsteem: -40 }
                    ],
                    steps: {
                        1: [
                            { text: "네가 원한다면 끝까지 응원할게", money: 0, intimacy: 10, dhEsteem: 10 },
                            { text: "진짜 제대로 할 자신 있는 거 맞지", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "이번엔 장난 아니니까 단단히 마음 먹어라", money: 0, intimacy: 10, dhEsteem: 8 }
                        ],
                        2: [
                            { text: "이번엔 정말 멋지게 해내자", money: 0, intimacy: 10, dhEsteem: 10 },
                            { text: "노량진 들어가서 사람 돼서 나와라", money: 0, intimacy: 8, dhEsteem: 6 },
                            { text: "이번에 또 떨어지면 인간도 아니다", money: 0, intimacy: 3, dhEsteem: 2 }
                        ]
                    }
                }
            ]
        }
    },
    2022: {
        title: "2022년: 노량진 고시생 전동현 관찰기",
        events: {
            chat: [
                { id: "22_chat_1", type: "chat", title: "노량진 독서실 인증샷", situation: "동현이가 형소법 기본서 사진을 찍어 보냈다.", chatMessage: "친구들아! 나 오늘 인강 5개 완강했다. 나 내년엔 진짜 제복 입는다!", keywords: [
                    { keyword: "파이팅", result: { text: "멋지다며 기프티콘을 쏴줬다.", money: -2, intimacy: 20, dhEsteem: 20 } },
                    { keyword: "오버", result: { text: "벌써부터 입 털지 말라고 경고했다.", money: 0, intimacy: -10, dhEsteem: -10 } }
                ], defaultResult: { text: "읽고 쿨하게 이모티콘만 보냈다.", money: 0, intimacy: 5, dhEsteem: 0 }},
                { 
                    id: "22_chat_2", 
                    type: "choice", 
                    title: "학원 특강비 구걸", 
                    situation: "동현이가 마무리 모의고사 특강을 들어야 하는데 돈이 없다며 30만 원만 빌려달라 조른다.", 
                    choices: [
                        { text: "대한민국 경찰을 위해 기부한다 치고 30만 원 송금", money: -30, intimacy: 40, dhEsteem: 15 },
                        { text: "인터넷 무료 강의나 들으라며 만 원짜리 밥 쿠폰만 준다", money: -1, intimacy: 5, dhEsteem: -5 },
                        { text: "학원비 빙자해서 술 먹으려는 거 아니냐며 차단한다", money: 0, intimacy: -30, dhEsteem: -20 }
                    ],
                    steps: {
                        1: [
                            { text: "공부하는 데 보탬이 된다면 기꺼이 도와줄게", money: 0, intimacy: 10, dhEsteem: 8 },
                            { text: "진짜 공부하는 데 쓰는 돈 맞지?", money: 0, intimacy: 8, dhEsteem: 3 },
                            { text: "이번이 진짜 마지막인 줄 알아라", money: 0, intimacy: 10, dhEsteem: 5 }
                        ],
                        2: [
                            { text: "꼭 합격해서 좋은 소식 들려줘", money: 0, intimacy: 10, dhEsteem: 10 },
                            { text: "공부 똑바로 해서 꼭 합격해라", money: 0, intimacy: 10, dhEsteem: 8 },
                            { text: "딴 데 쓰면 가만 안 둔다", money: 0, intimacy: 3, dhEsteem: 2 }
                        ]
                    }
                }
            ],
            alba: [
                { 
                    id: "22_alba_1", 
                    type: "choice", 
                    title: "체력 학원 농땡이 현장", 
                    situation: "동현이가 체력 시험 학원에 있다고 해서 찾아가 보니, 혼자 벤치에 앉아 쉬면서 노가리만 까고 있다.", 
                    choices: [
                        { text: "내가 옆에 붙어서 스파르타식으로 강제 윗몸일으키기를 시킨다", money: 0, intimacy: -10, dhEsteem: 20 },
                        { text: "안쓰러워 보여서 포카리스웨트를 사다 준다", money: -2, intimacy: 15, dhEsteem: 5 },
                        { text: "그렇게 해서 경찰 되겠냐며 동네방네 망신을 준다", money: 0, intimacy: -30, dhEsteem: -30 }
                    ],
                    steps: {
                        1: [
                            { text: "조금만 더 힘내서 같이 해보자", money: 0, intimacy: 8, dhEsteem: 10 },
                            { text: "벌써 퍼져 있으면 어쩌자는 거냐", money: 0, intimacy: 2, dhEsteem: 8 },
                            { text: "일어나서 운동 마저 해라", money: 0, intimacy: 5, dhEsteem: 10 }
                        ],
                        2: [
                            { text: "체력 관리 잘해서 꼭 합격하자", money: 0, intimacy: 8, dhEsteem: 10 },
                            { text: "필기 붙어도 체력에서 떨어지면 억울하다", money: 0, intimacy: 6, dhEsteem: 8 },
                            { text: "정신 바짝 차리고 단련해라", money: 0, intimacy: 4, dhEsteem: 5 }
                        ]
                    }
                },
                { 
                    id: "22_alba_2", 
                    type: "choice", 
                    title: "독서실 총무석의 비밀", 
                    situation: "동현이가 알바하는 독서실 총무석에 찾아갔다. 모니터를 듀얼로 해놓고 한쪽엔 인강, 한쪽엔 롤(LOL)을 켜놨다.", 
                    choices: [
                        { text: "원장님 오기 전에 빨리 끄라고 내가 망을 봐준다", money: 0, intimacy: 20, dhEsteem: -10 },
                        { text: "마우스를 뺏어버리고 인강 창을 최대로 키워버린다", money: 0, intimacy: -15, dhEsteem: 15 },
                        { text: "증거 사진을 찍어서 동현이 어머니께 전송한다", money: 0, intimacy: -50, dhEsteem: -40 }
                    ],
                    steps: {
                        1: [
                            { text: "조심해서 잘 처리해 나갈게", money: 0, intimacy: 8, dhEsteem: 3 },
                            { text: "일하면서 롤을 돌리고 자빠졌네", money: 0, intimacy: 5, dhEsteem: -2 },
                            { text: "총무가 이래도 되는 거냐 아주", money: 0, intimacy: 8, dhEsteem: -5 }
                        ],
                        2: [
                            { text: "무사히 잘 넘어가서 다행이다", money: 0, intimacy: 8, dhEsteem: 6 },
                            { text: "걸리면 대형 사고니까 당장 꺼라", money: 0, intimacy: 6, dhEsteem: 3 },
                            { text: "공부랑 알바 둘 다 똑바로 해라", money: 0, intimacy: 4, dhEsteem: 5 }
                        ]
                    }
                }
            ],
            home: [
                { 
                    id: "22_home_1", 
                    type: "choice", 
                    title: "경찰 시험 낙방 후폭풍", 
                    situation: "필기 시험 광탈 후, 방에 소주병을 줄 세워놓고 폐인이 된 동현이를 발견했다.", 
                    choices: [
                        { text: "소주병을 치우고 해장국을 먹이며 내년을 기약하자고 위로한다", money: -5, intimacy: 35, dhEsteem: 10 },
                        { text: "같이 술을 마셔주며 신세 한탄을 다 들어준다", money: -10, intimacy: 25, dhEsteem: -10 },
                        { text: "공부 안 하고 롤 할 때부터 알아봤다며 팩폭을 꽂는다", money: 0, intimacy: -40, dhEsteem: -40 }
                    ],
                    steps: {
                        1: [
                            { text: "속상하겠지만 내가 맛있는 거 사줄게", money: 0, intimacy: 12, dhEsteem: 8 },
                            { text: "이번에 떨어졌다고 인생 끝난 거 아니다", money: 0, intimacy: 12, dhEsteem: 5 },
                            { text: "술 그만 마시고 일단 속부터 채워라", money: 0, intimacy: 10, dhEsteem: 3 }
                        ],
                        2: [
                            { text: "다시 일어설 수 있게 옆에서 도와줄게", money: 0, intimacy: 15, dhEsteem: 12 },
                            { text: "툭툭 털고 일어나서 내년에 다시 도전해 보자", money: 0, intimacy: 15, dhEsteem: 10 },
                            { text: "내가 옆에서 지켜볼 테니까 낙심하지 마라", money: 0, intimacy: 12, dhEsteem: 8 }
                        ]
                    }
                },
                { 
                    id: "22_home_2", 
                    type: "choice", 
                    title: "포기 선언과 잠적", 
                    situation: "동현이가 '경찰은 내 길이 아닌가봐' 라며 방문을 잠그고 며칠째 나오질 않는다.", 
                    choices: [
                        { text: "문을 강제로 열고 들어가 뺨을 한 대 치고 정신 차리게 한다", money: 0, intimacy: 10, dhEsteem: 30 },
                        { text: "문 앞에 좋아하는 치킨만 조용히 걸어두고 온다", money: -5, intimacy: 20, dhEsteem: 5 },
                        { text: "내버려 두면 알아서 기어 나오겠지 하고 무시한다", money: 0, intimacy: -20, dhEsteem: -15 }
                    ],
                    steps: {
                        1: [
                            { text: "마음 편히 먹고 언제든 나와", money: 0, intimacy: 12, dhEsteem: 10 },
                            { text: "문 열어라 이 자식아 언제까지 숨어 있을래", money: 0, intimacy: 8, dhEsteem: 10 },
                            { text: "기죽지 말고 나와서 얼굴 좀 보자", money: 0, intimacy: 10, dhEsteem: 8 }
                        ],
                        2: [
                            { text: "혼자 아파하지 말고 함께 이겨내자", money: 0, intimacy: 15, dhEsteem: 12 },
                            { text: "네가 원하면 다른 길도 찾아보자 일단 나와라", money: 0, intimacy: 12, dhEsteem: 10 },
                            { text: "혼자 끙끙 앓지 말고 얘기 좀 하자", money: 0, intimacy: 10, dhEsteem: 8 }
                        ]
                    }
                }
            ]
        }
    },
    2023: {
        title: "2023년: 다단계와 스타트업 헛바람의 해",
        events: {
            chat: [
                { id: "23_chat_1", type: "chat", title: "옥장판 강매 카톡", situation: "공무원을 포기한 동현이가 다단계에 빠져 카톡을 보냈다.", chatMessage: "친구야! 나 진짜 이번에 인생 역전한다. 초기 자본금만 빌려주면 내가 3배로 갚을게. 옥장판 한 세트만 사주라!", keywords: [
                    { keyword: "다단계", result: { text: "사기 당하지 말고 정신 차리라고 일갈했다.", money: 0, intimacy: -20, dhEsteem: -10 } },
                    { keyword: "신고", result: { text: "경찰에 신고한다고 협박했다.", money: 0, intimacy: -30, dhEsteem: -20 } }
                ], defaultResult: { text: "일단 한 세트 팔아주며 호구가 되었다.", money: -30, intimacy: 30, dhEsteem: 20 }},
                { 
                    id: "23_chat_2", 
                    type: "choice", 
                    title: "돌멩이 키우기 스타트업", 
                    situation: "AI 기반 '돌멩이 키우기' 어플을 만들겠다며 카페로 불러내서 시드머니 투자를 강요한다.", 
                    choices: [
                        { text: "스토리텔링에 감동해 50만 원을 쾌척한다", money: -50, intimacy: 50, dhEsteem: 40 },
                        { text: "기획서가 쓰레기라며 커피만 사주고 돌려보낸다", money: -1, intimacy: -10, dhEsteem: -15 },
                        { text: "정신병원 번호를 적어주고 자리를 박차고 나온다", money: 0, intimacy: -40, dhEsteem: -30 }
                    ],
                    steps: {
                        1: [
                            { text: "아이디어는 좋지만 조금 더 신중해봐", money: 0, intimacy: -2, dhEsteem: 2 },
                            { text: "돌멩이를 누가 키운다고 미쳤냐", money: 0, intimacy: -5, dhEsteem: -5 },
                            { text: "너 진짜 병원에 상담 한번 받아봐라", money: 0, intimacy: -8, dhEsteem: -10 }
                        ],
                        2: [
                            { text: "현실적인 길을 찾아보는 게 어떨까", money: 0, intimacy: -2, dhEsteem: 2 },
                            { text: "헛소리 그만하고 정상적인 일 좀 해라", money: 0, intimacy: -3, dhEsteem: -8 },
                            { text: "정신 차리게 찬물 좀 마셔라", money: 0, intimacy: -2, dhEsteem: -5 }
                        ]
                    }
                }
            ],
            alba: [
                { 
                    id: "23_alba_1", 
                    type: "choice", 
                    title: "강남 다단계 센터 구출 작전", 
                    situation: "동현이가 나를 좋은 세미나라고 속여 강남의 거대 다단계 센터에 데려왔다.", 
                    choices: [
                        { text: "같이 멍청하게 세뇌당해서 물건을 사주고 만다", money: -80, intimacy: 40, dhEsteem: 10 },
                        { text: "동현이 뒷덜미를 잡고 억지로 행사장을 빠져나온다", money: 0, intimacy: -20, dhEsteem: 15 },
                        { text: "강사에게 쌍욕을 박고 동현이를 버리고 도망친다", money: 0, intimacy: -50, dhEsteem: -20 }
                    ],
                    steps: {
                        1: [
                            { text: "정신 차리게 빨리 여기서 벗어나자", money: 0, intimacy: 8, dhEsteem: 8 },
                            { text: "여기가 어디라고 나를 끌고 와", money: 0, intimacy: -10, dhEsteem: 5 },
                            { text: "당장 도망치자 미쳤어 여기", money: 0, intimacy: 5, dhEsteem: 10 }
                        ],
                        2: [
                            { text: "고생했어, 다시는 이런 데 오지 마", money: 0, intimacy: 6, dhEsteem: 6 },
                            { text: "다시는 이런 데 얼씬도 하지 마라", money: 0, intimacy: 5, dhEsteem: 8 },
                            { text: "사람 홀리는 재주만 늘었네 아주", money: 0, intimacy: 2, dhEsteem: 3 }
                        ]
                    }
                },
                { 
                    id: "23_alba_2", 
                    type: "choice", 
                    title: "편의점 알바 대타 요구", 
                    situation: "다단계 빚을 갚느라 편의점 주말 알바를 구한 동현이. 갑자기 사업 미팅이 잡혔다며 나보고 대타를 뛰어달란다.", 
                    choices: [
                        { text: "한숨을 쉬며 내 주말을 희생해 알바를 대신 뛰어준다", money: 0, intimacy: 35, dhEsteem: -10 },
                        { text: "안 된다고 단칼에 거절하고 알바나 똑바로 하라 한다", money: 0, intimacy: -20, dhEsteem: 5 },
                        { text: "점장님한테 전화해서 동현이가 농땡이 친다고 고발한다", money: 0, intimacy: -40, dhEsteem: -30 }
                    ],
                    steps: {
                        1: [
                            { text: "이번만 특별히 도와주는 거야", money: 0, intimacy: 8, dhEsteem: 2 },
                            { text: "알바 대신 뛰어주는 건 이번뿐이다", money: 0, intimacy: 10, dhEsteem: -2 },
                            { text: "사업 미팅은 개뿔 정신 차려라", money: 0, intimacy: 5, dhEsteem: 5 }
                        ],
                        2: [
                            { text: "다음엔 미리 말하고 준비해", money: 0, intimacy: 6, dhEsteem: 5 },
                            { text: "제발 엉뚱한 짓 그만하고 본업에 충실해라", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "주말 날린 거 나중에 비싸게 갚아라", money: 0, intimacy: 6, dhEsteem: 3 }
                        ]
                    }
                }
            ],
            home: [
                { 
                    id: "23_home_1", 
                    type: "choice", 
                    title: "스타트업 합숙소 방문", 
                    situation: "스타트업을 한답시고 빌라 반지하에 남자 4명이 합숙하는 곳에 가봤다. 다들 컵라면만 먹고 있다.", 
                    choices: [
                        { text: "불쌍해서 피자와 치킨을 넉넉하게 시켜주고 응원한다", money: -15, intimacy: 35, dhEsteem: 20 },
                        { text: "이게 무슨 실리콘밸리냐며 팩폭을 꽂아 팀 분위기를 망친다", money: 0, intimacy: -30, dhEsteem: -25 },
                        { text: "동현이 짐을 강제로 싸서 본가로 끌고 간다", money: 0, intimacy: -15, dhEsteem: 10 }
                    ],
                    steps: {
                        1: [
                            { text: "든든하게 먹고 힘내서 시작해보자", money: 0, intimacy: 10, dhEsteem: 8 },
                            { text: "이게 무슨 실리콘밸리냐 반지하지", money: 0, intimacy: 2, dhEsteem: -5 },
                            { text: "일단 배고플 테니 맛있는 거나 먹자", money: 0, intimacy: 12, dhEsteem: 8 }
                        ],
                        2: [
                            { text: "너무 무리하지 말고 건강 챙겨가며 해", money: 0, intimacy: 8, dhEsteem: 6 },
                            { text: "꿈도 좋지만 현실도 좀 돌아봐라", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "여기서 맨날 컵라면만 먹을 거냐", money: 0, intimacy: 5, dhEsteem: 3 }
                        ]
                    }
                },
                { 
                    id: "23_home_2", 
                    type: "choice", 
                    title: "본가에서 호적 파일 위기", 
                    situation: "사기 당한 사실을 부모님이 알고 동현이를 집에서 내쫓았다. 동현이가 내 방 문을 두드린다.", 
                    choices: [
                        { text: "내 방에 재워주며 진지하게 인생 상담을 해준다", money: 0, intimacy: 30, dhEsteem: 15 },
                        { text: "부모님께 전화해서 내가 잘 데리고 있겠다고 안심시킨다", money: 0, intimacy: 20, dhEsteem: 5 },
                        { text: "내 인생도 피곤하다며 매정하게 문을 닫는다", money: 0, intimacy: -40, dhEsteem: -30 }
                    ],
                    steps: {
                        1: [
                            { text: "편하게 지내면서 다시 마음 다잡아봐", money: 0, intimacy: 12, dhEsteem: 10 },
                            { text: "에휴 어디 갈 데도 없는 신세네 들어와라", money: 0, intimacy: 10, dhEsteem: 5 },
                            { text: "부모님 마음도 좀 이해해 드려라", money: 0, intimacy: 8, dhEsteem: 8 }
                        ],
                        2: [
                            { text: "좋은 기회 삼아서 새롭게 시작하자", money: 0, intimacy: 12, dhEsteem: 12 },
                            { text: "이번 기회에 싹 다 털고 새로 시작하자", money: 0, intimacy: 10, dhEsteem: 10 },
                            { text: "얹혀사는 동안 사고 치면 바로 쫓아낸다", money: 0, intimacy: 5, dhEsteem: 4 }
                        ]
                    }
                }
            ]
        }
    },
    2024: {
        title: "2024년: 이별 상처와 유튜버 데뷔 선언",
        events: {
            chat: [
                { id: "24_chat_1", type: "chat", title: "이별 후유증 허세 카톡", situation: "여친에게 차인 동현이가 제정신이 아닌 카톡을 보냈다.", chatMessage: "친구야... 나 여친한테 차였어. 내가 외제차 타고 나타나면 다시 돌아올까? 렌트하게 30만 원만 빌려주라...", keywords: [
                    { keyword: "소주", result: { text: "헛소리 말고 소주나 한잔 하자고 불렀다.", money: -5, intimacy: 20, dhEsteem: 5 } },
                    { keyword: "차단", result: { text: "찌질하게 굴면 차단한다고 경고했다.", money: 0, intimacy: -20, dhEsteem: -20 } }
                ], defaultResult: { text: "외제차 타령 그만하라고 혼냈다.", money: 0, intimacy: -10, dhEsteem: -10 }},
                { 
                    id: "24_chat_2", 
                    type: "choice", 
                    title: "먹방 유튜버 장비 결제", 
                    situation: "동현이가 빚을 유튜버로 갚겠다며 최고급 방송용 마이크와 조명을 내 카드로 긁으려 한다.", 
                    choices: [
                        { text: "마지막이다 생각하고 장비 풀세트를 결제해준다", money: -80, intimacy: 40, dhEsteem: 30 },
                        { text: "스마트폰 카메라로 시작하라며 삼각대 하나만 사준다", money: -3, intimacy: 10, dhEsteem: 0 },
                        { text: "네 얼굴과 입담으론 어림없다며 장바구니를 삭제한다", money: 0, intimacy: -30, dhEsteem: -30 }
                    ],
                    steps: {
                        1: [
                            { text: "차근차근 준비해서 멋지게 도전해 봐", money: 0, intimacy: 8, dhEsteem: 6 },
                            { text: "장비만 좋으면 다 유튜브 뜨는 줄 아냐", money: 0, intimacy: 5, dhEsteem: 2 },
                            { text: "스마트폰으로 먼저 해보고 시작해라", money: 0, intimacy: 8, dhEsteem: 5 }
                        ],
                        2: [
                            { text: "열심히 해서 좋은 결과 만들어보자", money: 0, intimacy: 8, dhEsteem: 8 },
                            { text: "콘텐츠를 제대로 짜서 도전해 봐라", money: 0, intimacy: 6, dhEsteem: 5 },
                            { text: "이번에도 대충 하면 장비 압수다", money: 0, intimacy: 3, dhEsteem: 3 }
                        ]
                    }
                }
            ],
            alba: [
                { 
                    id: "24_alba_1", 
                    type: "choice", 
                    title: "첫 먹방 유튜브 촬영 보조", 
                    situation: "자취방에서 대왕 짜장면 10그릇 먹방을 찍는데, 동현이가 3그릇 먹고 토할 것 같다며 헬프를 요청한다.", 
                    choices: [
                        { text: "카메라 사각지대에서 내가 대신 7그릇을 먹어치워준다", money: 0, intimacy: 40, dhEsteem: -10 },
                        { text: "억지로라도 다 먹으라고 스파르타식으로 갈군다", money: 0, intimacy: -10, dhEsteem: 10 },
                        { text: "짜장면을 엎어버리고 촬영을 강제로 종료시킨다", money: 0, intimacy: -40, dhEsteem: -20 }
                    ],
                    steps: {
                        1: [
                            { text: "힘들면 내가 같이 도와줄게", money: 0, intimacy: 10, dhEsteem: 3 },
                            { text: "못 먹겠으면 완주를 하지 마라 미련하게", money: 0, intimacy: -2, dhEsteem: 5 },
                            { text: "내가 도와줄 테니까 천천히 해라", money: 0, intimacy: 12, dhEsteem: -2 }
                        ],
                        2: [
                            { text: "천천히 끝까지 완주해 보자", money: 0, intimacy: 8, dhEsteem: 6 },
                            { text: "유튜브가 그렇게 만만한 줄 알았냐", money: 0, intimacy: 5, dhEsteem: 3 },
                            { text: "토하지 말고 정신 바짝 차려라", money: 0, intimacy: 4, dhEsteem: 2 }
                        ]
                    }
                },
                { 
                    id: "24_alba_2", 
                    type: "choice", 
                    title: "유튜브 편집 외주 대행", 
                    situation: "동현이가 다른 유튜버 영상 편집 알바를 받아왔는데 컷편집도 할 줄 모른다며 나보고 해달란다.", 
                    choices: [
                        { text: "밤을 새워 컷편집과 자막을 완벽하게 달아준다", money: 0, intimacy: 35, dhEsteem: -10 },
                        { text: "프리미어 프로 튜토리얼 영상 링크만 달랑 보내준다", money: 0, intimacy: 0, dhEsteem: 5 },
                        { text: "일 못하겠다고 네가 직접 거래처에 사과하라고 시킨다", money: 0, intimacy: -25, dhEsteem: -15 }
                    ],
                    steps: {
                        1: [
                            { text: "천천히 배우면서 같이 해나가자", money: 0, intimacy: 10, dhEsteem: 5 },
                            { text: "편집도 할 줄 모르면서 일을 받아오면 어쩌냐", money: 0, intimacy: 5, dhEsteem: -3 },
                            { text: "이번만 해줄 테니까 다음엔 네가 배워서 해라", money: 0, intimacy: 10, dhEsteem: -2 }
                        ],
                        2: [
                            { text: "이번 기회에 확실히 배워둬", money: 0, intimacy: 8, dhEsteem: 6 },
                            { text: "강의 좀 보면서 편집 툴 기술 좀 익혀라", money: 0, intimacy: 6, dhEsteem: 4 },
                            { text: "남의 돈 벌어먹기 쉬운 줄 알았냐", money: 0, intimacy: 4, dhEsteem: 2 }
                        ]
                    }
                }
            ],
            home: [
                { 
                    id: "24_home_1", 
                    type: "choice", 
                    title: "방구석 폭식러 구출", 
                    situation: "이별 후유증으로 매일 배달 음식만 먹어 체중이 15kg이나 불어난 동현이를 발견했다.", 
                    choices: [
                        { text: "강제로 헬스장에 끌고 가 PT를 끊어준다", money: -20, intimacy: 20, dhEsteem: 25 },
                        { text: "배달 어플을 다 지워버리고 닭가슴살을 쥐어준다", money: -3, intimacy: 10, dhEsteem: 15 },
                        { text: "돼지 다 됐다며 사진을 찍어 놀린다", money: 0, intimacy: -30, dhEsteem: -30 }
                    ],
                    steps: {
                        1: [
                            { text: "건강을 위해서 함께 운동해 보자", money: 0, intimacy: 10, dhEsteem: 10 },
                            { text: "살이 왜 이렇게 쪘냐 거울 좀 봐라", money: 0, intimacy: 2, dhEsteem: 5 },
                            { text: "건강 망가지기 전에 운동 좀 하자", money: 0, intimacy: 8, dhEsteem: 8 }
                        ],
                        2: [
                            { text: "조금씩 식단 관리부터 시작해 보자", money: 0, intimacy: 8, dhEsteem: 8 },
                            { text: "배달 음식 이제 그만 끊어라", money: 0, intimacy: 6, dhEsteem: 5 },
                            { text: "예전 모습으로 돌아가려면 멀었다", money: 0, intimacy: 4, dhEsteem: 3 }
                        ]
                    }
                },
                { 
                    id: "24_home_2", 
                    type: "choice", 
                    title: "유튜브 악플 멘탈 붕괴", 
                    situation: "먹방 채널에 '노잼이다', '더럽게 먹네' 악플이 달리자 동현이가 키보드 배틀을 뜨고 있다.", 
                    choices: [
                        { text: "내가 선플 100개를 달아주며 여론 조작을 해준다", money: 0, intimacy: 30, dhEsteem: 20 },
                        { text: "악플러는 무시가 답이라며 멘탈 케어를 해준다", money: 0, intimacy: 15, dhEsteem: 10 },
                        { text: "나라도 악플 달 것 같다며 팩폭으로 채널을 접게 만든다", money: 0, intimacy: -40, dhEsteem: -40 }
                    ],
                    steps: {
                        1: [
                            { text: "신경 쓰지 말고 너만의 콘텐츠를 만들어봐", money: 0, intimacy: 8, dhEsteem: 8 },
                            { text: "악플러들이랑 싸워서 뭐 하냐 무시해라", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "멘탈 관리 못 하면 방송 못 한다", money: 0, intimacy: 5, dhEsteem: 8 }
                        ],
                        2: [
                            { text: "좋은 응원만 생각하고 힘내자", money: 0, intimacy: 8, dhEsteem: 8 },
                            { text: "좋은 댓글만 보고 콘텐츠 연구나 해라", money: 0, intimacy: 6, dhEsteem: 5 },
                            { text: "신경 쓰지 말고 너 할 거나 해라", money: 0, intimacy: 4, dhEsteem: 3 }
                        ]
                    }
                }
            ]
        }
    },
    2025: {
        title: "2025년: 연대보증 위기와 벼랑 끝의 삶",
        events: {
            chat: [
                { id: "25_chat_1", type: "chat", title: "인생 최대 위기: 연대보증 SOS", situation: "사채 빚에 쫓기는 동현이가 미친 카톡을 보냈다.", chatMessage: "친구... 나 진짜 사채업자한테 끌려갈지도 몰라... 제발 서류에 연대보증 사인 한 번만...", keywords: [
                    { keyword: "보증", result: { text: "친구끼리도 절대 안 서는 게 보증이라며 쌍욕을 박았다.", money: 0, intimacy: -50, dhEsteem: -30 } },
                    { keyword: "신고", result: { text: "사채업자를 당장 경찰에 신고하라고 조언했다.", money: 0, intimacy: 10, dhEsteem: 5 } }
                ], defaultResult: { text: "읽고 무시하며 차단을 고민했다.", money: 0, intimacy: -30, dhEsteem: -20 }},
                { 
                    id: "25_chat_2", 
                    type: "choice", 
                    title: "긴급 이자 대출 100만원", 
                    situation: "보증은 거절당하자, 오늘 밤까지 내야 할 이자 100만 원만 제발 당겨달라며 내 바지가랑이를 잡는다.", 
                    choices: [
                        { text: "내 비상금을 털어 눈물을 머금고 100만 원을 쏴준다", money: -100, intimacy: 50, dhEsteem: 10 },
                        { text: "20만 원만 던져주며 이젠 내 인생에서 꺼지라고 한다", money: -20, intimacy: -20, dhEsteem: -20 },
                        { text: "완강하게 뿌리치고 휴대폰 번호를 차단해버린다", money: 0, intimacy: -80, dhEsteem: -50 }
                    ],
                    steps: {
                        1: [
                            { text: "힘내서 이겨낼 수 있을 거야", money: 0, intimacy: 8, dhEsteem: 5 },
                            { text: "진짜 이번이 마지막인 줄 알아라", money: 0, intimacy: 10, dhEsteem: 3 },
                            { text: "사채는 건드리는 게 아니었는데 왜 그랬냐", money: 0, intimacy: 8, dhEsteem: 5 }
                        ],
                        2: [
                            { text: "이번 기회로 빚 꼭 다 털어내자", money: 0, intimacy: 8, dhEsteem: 8 },
                            { text: "정신 똑바로 차리고 빚부터 갚아나가라", money: 0, intimacy: 10, dhEsteem: 8 },
                            { text: "앞으로 이런 일 있으면 진짜 손절이다", money: 0, intimacy: 2, dhEsteem: 2 }
                        ]
                    }
                }
            ],
            alba: [
                { 
                    id: "25_alba_1", 
                    type: "choice", 
                    title: "야간 택배 상하차 투잡 현장", 
                    situation: "빚 갚느라 야간 상하차를 뛰는 동현이를 보러 갔다. 허리가 아프다며 내게 박스 하나만 들어달라 눈치 준다.", 
                    choices: [
                        { text: "소매를 걷어붙이고 새벽 내내 같이 까대기를 해준다", money: 0, intimacy: 40, dhEsteem: 20 },
                        { text: "고생한다며 자판기 율무차 하나 뽑아주고 난 구경만 한다", money: 0, intimacy: 10, dhEsteem: 5 },
                        { text: "일당백으로 일하라고 채찍질하며 잔소리만 한다", money: 0, intimacy: -20, dhEsteem: -10 }
                    ],
                    steps: {
                        1: [
                            { text: "내가 곁에서 도울 테니까 힘내", money: 0, intimacy: 12, dhEsteem: 8 },
                            { text: "허리 부서지기 전에 살살 해라", money: 0, intimacy: 10, dhEsteem: 5 },
                            { text: "내가 같이 좀 들어줄 테니까 힘내라", money: 0, intimacy: 15, dhEsteem: 8 }
                        ],
                        2: [
                            { text: "이번 고생이 좋은 밑거름이 될 거야", money: 0, intimacy: 10, dhEsteem: 8 },
                            { text: "이번 고생을 발판 삼아 정신 차려라", money: 0, intimacy: 8, dhEsteem: 6 },
                            { text: "남의 돈 갚는 게 이렇게 힘든 거다", money: 0, intimacy: 5, dhEsteem: 5 }
                        ]
                    }
                },
                { 
                    id: "25_alba_2", 
                    type: "choice", 
                    title: "신용회복위원회 동행", 
                    situation: "동현이가 개인회생을 신청하러 가는데 무섭다며 신용회복위원회까지 같이 가달라고 한다.", 
                    choices: [
                        { text: "반차를 내고 같이 동행해서 서류 작성까지 꼼꼼히 돕는다", money: 0, intimacy: 35, dhEsteem: 25 },
                        { text: "입구 앞까지만 바래다주고 알아서 하라며 돌아온다", money: 0, intimacy: 10, dhEsteem: 0 },
                        { text: "성인인데 그런 것도 혼자 못 하냐며 거절한다", money: 0, intimacy: -30, dhEsteem: -20 }
                    ],
                    steps: {
                        1: [
                            { text: "함께 해결해 나가면 다 잘 될 거야", money: 0, intimacy: 12, dhEsteem: 10 },
                            { text: "혼자 오기 무서웠냐 가자 같이 들어가자", money: 0, intimacy: 12, dhEsteem: 8 },
                            { text: "이번 기회에 채무 정리 확실히 해라", money: 0, intimacy: 10, dhEsteem: 10 }
                        ],
                        2: [
                            { text: "새로운 마음으로 멋지게 살아가자", money: 0, intimacy: 12, dhEsteem: 12 },
                            { text: "앞으로는 절대로 빚 내서 살지 마라", money: 0, intimacy: 10, dhEsteem: 8 },
                            { text: "새 인생 산다 생각하고 성실하게 살자", money: 0, intimacy: 12, dhEsteem: 10 }
                        ]
                    }
                }
            ],
            home: [
                { 
                    id: "25_home_1", 
                    type: "choice", 
                    title: "빨간 딱지와 사채업자", 
                    situation: "동현이 방에 놀러갔는데, 문을 쾅쾅 두드리며 빚쟁이들이 찾아왔다. 동현이는 덜덜 떨고 있다.", 
                    choices: [
                        { text: "내가 나서서 빚쟁이들을 막아서고 상황을 중재한다", money: 0, intimacy: 40, dhEsteem: -10 },
                        { text: "몰래 112에 문자로 경찰 신고를 해준다", money: 0, intimacy: 25, dhEsteem: 10 },
                        { text: "나랑은 상관없는 일이라며 창문으로 나 혼자 도망친다", money: 0, intimacy: -60, dhEsteem: -40 }
                    ],
                    steps: {
                        1: [
                            { text: "너무 걱정 마, 내가 곁에 있어 줄게", money: 0, intimacy: 15, dhEsteem: 10 },
                            { text: "기죽지 말고 뒤에 숨어 있어라", money: 0, intimacy: 15, dhEsteem: 5 },
                            { text: "경찰 부를 테니까 조금만 버텨라", money: 0, intimacy: 12, dhEsteem: 8 }
                        ],
                        2: [
                            { text: "이번 일 잘 해결하고 평화롭게 지내자", money: 0, intimacy: 12, dhEsteem: 10 },
                            { text: "이런 무서운 일 다시는 겪지 말자", money: 0, intimacy: 10, dhEsteem: 8 },
                            { text: "정신 바짝 차리고 살아야 한다 진짜", money: 0, intimacy: 8, dhEsteem: 6 }
                        ]
                    }
                },
                { 
                    id: "25_home_2", 
                    type: "choice", 
                    title: "벼랑 끝의 현타", 
                    situation: "모든 짐을 빼고 내 자취방 구석에 웅크린 동현이가 '친구야... 나 인생 포기할까?' 라며 묻는다.", 
                    choices: [
                        { text: "어깨를 꽉 쥐고 넌 다시 일어설 수 있다고 진심으로 위로한다", money: 0, intimacy: 50, dhEsteem: 40 },
                        { text: "지금 죽는 소리 할 때냐며 당장 구인구직 사이트를 켜게 한다", money: 0, intimacy: 20, dhEsteem: 25 },
                        { text: "네 인생 네가 망친 거라며 차갑게 팩폭을 꽂는다", money: 0, intimacy: -50, dhEsteem: -50 }
                    ],
                    steps: {
                        1: [
                            { text: "다시 일어설 수 있으니까 힘내자", money: 0, intimacy: 18, dhEsteem: 15 },
                            { text: "포기하기엔 아직 젊다 다시 시작하자", money: 0, intimacy: 20, dhEsteem: 15 },
                            { text: "내가 옆에 있을 테니까 나쁜 마음 먹지 마라", money: 0, intimacy: 25, dhEsteem: 20 }
                        ],
                        2: [
                            { text: "천천히 다시 시작하면 돼, 응원할게", money: 0, intimacy: 20, dhEsteem: 18 },
                            { text: "처음부터 차근차근 다시 올라가 보자", money: 0, intimacy: 18, dhEsteem: 15 },
                            { text: "너라면 충분히 다시 일어설 수 있다", money: 0, intimacy: 20, dhEsteem: 18 }
                        ]
                    }
                }
            ]
        }
    },
    2026: {
        title: "2026년: 정신 차린 동현이의 취업 면접",
        events: {
            chat: [
                { id: "26_chat_1", type: "chat", title: "중소기업 최종 면접 통보", situation: "드디어 정신을 차린 동현이가 감격스러운 카톡을 보냈다.", chatMessage: "친구야!! 나 중소기업이긴 하지만 드디어 최종 면접 잡혔어! 근데 입고 갈 정장이 없네...", keywords: [
                    { keyword: "정장", result: { text: "내 정장을 빌려주겠다고 듬직하게 말했다.", money: 0, intimacy: 30, dhEsteem: 25 } },
                    { keyword: "면접", result: { text: "면접 잘 보라고 커피 쿠폰을 보내줬다.", money: -1, intimacy: 20, dhEsteem: 20 } }
                ], defaultResult: { text: "다이소 가서 넥타이나 사라고 했다.", money: 0, intimacy: -5, dhEsteem: -10 }},
                { 
                    id: "26_chat_2", 
                    type: "choice", 
                    title: "면접용 맞춤 정장 지원", 
                    situation: "첫 직장 면접이라며 내 정장은 사이즈가 안 맞는다고 아울렛에서 정장 한 벌만 사달라 조른다.", 
                    choices: [
                        { text: "새 출발을 응원하며 50만 원짜리 정장을 시원하게 긁어준다", money: -50, intimacy: 45, dhEsteem: 40 },
                        { text: "내 예전 정장을 억지로 입히고 드라이클리닝 비만 내준다", money: -2, intimacy: 15, dhEsteem: 10 },
                        { text: "취준생이 무슨 새 정장이냐며 동묘 구제시장으로 끌고 간다", money: 0, intimacy: -20, dhEsteem: -20 }
                    ],
                    steps: {
                        1: [
                            { text: "멋진 모습으로 면접 잘 보고 와", money: 0, intimacy: 12, dhEsteem: 12 },
                            { text: "첫 면접이니까 깔끔하게 입고 가라", money: 0, intimacy: 10, dhEsteem: 10 },
                            { text: "합격해서 나중에 첫 월급으로 갚아라", money: 0, intimacy: 12, dhEsteem: 8 }
                        ],
                        2: [
                            { text: "준비한 만큼 좋은 결과 있을 거야", money: 0, intimacy: 12, dhEsteem: 12 },
                            { text: "면접 대박 나라 꼭 붙어라", money: 0, intimacy: 15, dhEsteem: 12 },
                            { text: "실수하지 말고 준비한 대로 잘 하고 와라", money: 0, intimacy: 10, dhEsteem: 10 }
                        ]
                    }
                }
            ],
            alba: [
                { 
                    id: "26_alba_1", 
                    type: "choice", 
                    title: "면접장 데려다주기", 
                    situation: "면접 당일, 긴장해서 청심환을 먹고 떠는 동현이를 내 차(혹은 택시)로 면접장까지 데려다주고 있다.", 
                    choices: [
                        { text: "긴장을 풀어주기 위해 모의 면접을 도와주며 멘탈을 케어한다", money: 0, intimacy: 30, dhEsteem: 30 },
                        { text: "파이팅 하라며 엉덩이를 툭 쳐주고 쿨하게 보낸다", money: 0, intimacy: 15, dhEsteem: 10 },
                        { text: "떨어질 게 뻔하다며 재수 없는 소리만 늘어놓는다", money: 0, intimacy: -30, dhEsteem: -40 }
                    ],
                    steps: {
                        1: [
                            { text: "차분하게 잘 해내고 올 수 있어", money: 0, intimacy: 12, dhEsteem: 12 },
                            { text: "떨지 말고 평소대로만 해라", money: 0, intimacy: 10, dhEsteem: 10 },
                            { text: "들어가서 목소리 크게 대답하고 나와라", money: 0, intimacy: 12, dhEsteem: 12 }
                        ],
                        2: [
                            { text: "좋은 소식 기다리고 있을게", money: 0, intimacy: 15, dhEsteem: 15 },
                            { text: "합격 통보 기다리고 있을 테니까 힘내라", money: 0, intimacy: 15, dhEsteem: 15 },
                            { text: "넌 할 수 있다 들어가 봐", money: 0, intimacy: 10, dhEsteem: 10 }
                        ]
                    }
                },
                { 
                    id: "26_alba_2", 
                    type: "choice", 
                    title: "합격 통보와 첫 출근", 
                    situation: "최종 합격 전화를 받은 동현이가 오열하며 나를 껴안는다. 다음 주가 첫 출근이다.", 
                    choices: [
                        { text: "비싼 소고기를 사주며 내 일처럼 진심으로 기뻐해준다", money: -15, intimacy: 40, dhEsteem: 50 },
                        { text: "축하한다며 소주 한잔에 삼겹살로 소박하게 건배한다", money: -5, intimacy: 25, dhEsteem: 20 },
                        { text: "얼마 못 가 퇴사할 거라며 찬물을 확 끼얹는다", money: 0, intimacy: -40, dhEsteem: -30 }
                    ],
                    steps: {
                        1: [
                            { text: "정말 고생 많았다, 축하해", money: 0, intimacy: 15, dhEsteem: 15 },
                            { text: "고생많았다 진짜 합격이라니 감동이다", money: 0, intimacy: 15, dhEsteem: 15 },
                            { text: "이제부터 시작이니까 열심히 다녀라", money: 0, intimacy: 12, dhEsteem: 12 }
                        ],
                        2: [
                            { text: "멋진 사회인이 된 걸 진심으로 축하해", money: 0, intimacy: 15, dhEsteem: 15 },
                            { text: "첫 출근 지각하지 말고 잘 준비해라", money: 0, intimacy: 10, dhEsteem: 10 },
                            { text: "이제 진짜 사회인 다 됐네 축하한다", money: 0, intimacy: 15, dhEsteem: 15 }
                        ]
                    }
                }
            ],
            home: [
                { 
                    id: "26_home_1", 
                    type: "choice", 
                    title: "첫 월급, 그리고 빚 청산", 
                    situation: "첫 달 월급을 탄 동현이가 내 자취방으로 찾아왔다. 두툼한 봉투를 꺼내며 나를 쳐다본다.", 
                    choices: [
                        { id: "26_h1_1", text: "그동안 빌려준 돈을 전액 돌려받고 찐하게 포옹한다", money: 100, intimacy: 50, dhEsteem: 40 },
                        { id: "26_h1_2", text: "원금만 받고 이자 명목으로 고급 식당에서 밥을 얻어먹는다", money: 50, intimacy: 30, dhEsteem: 20 },
                        { id: "26_h1_3", text: "봉투를 낚아채듯 뺏어 세어보고 부족하다며 화를 낸다", money: 100, intimacy: -40, dhEsteem: -30 }
                    ],
                    steps: {
                        1: [
                            { text: "정말 감격스럽다, 고생 많았어", money: 0, intimacy: 18, dhEsteem: 15 },
                            { text: "드디어 돈을 갚는 날이 오는구나 감격이다", money: 0, intimacy: 15, dhEsteem: 10 },
                            { text: "고생했다 정말 장하다 우리 동현이", money: 0, intimacy: 20, dhEsteem: 15 }
                        ],
                        2: [
                            { text: "앞으로 꽃길만 걷자 정말 축하해", money: 0, intimacy: 18, dhEsteem: 18 },
                            { text: "앞으로는 절대 빚지지 말고 저축해라", money: 0, intimacy: 12, dhEsteem: 10 },
                            { text: "이제 완벽한 사회인이 된 걸 환영한다", money: 0, intimacy: 15, dhEsteem: 15 }
                        ]
                    }
                },
                { 
                    id: "26_home_2", 
                    type: "choice", 
                    title: "전동현의 최종 삶의 결말", 
                    situation: "취업 후 6개월이 지났다. 동현이의 독립 여부를 결정지을 마지막 대화가 남았다.", 
                    choices: [
                        { text: "이제 완벽히 독립했다며 칭찬하고 좋은 친구로 남는다", money: 0, intimacy: 50, dhEsteem: 50 },
                        { text: "아직 방심하지 말라며 경제 관념을 끝까지 다잡아준다", money: 0, intimacy: 30, dhEsteem: 20 },
                        { text: "이제 볼 일 없다며 매정하게 연락을 서서히 끊는다", money: 0, intimacy: -50, dhEsteem: -50 }
                    ],
                    steps: {
                        1: [
                            { text: "멋지게 성장한 모습 보니 뿌듯하다", money: 0, intimacy: 22, dhEsteem: 22 },
                            { text: "인생 고생 많았다 진짜 떳떳한 내 친구다", money: 0, intimacy: 20, dhEsteem: 20 },
                            { text: "앞으로도 쭉 이대로만 살아가자", money: 0, intimacy: 25, dhEsteem: 25 }
                        ],
                        2: [
                            { text: "언제나 너의 앞날을 응원할게", money: 0, intimacy: 22, dhEsteem: 22 },
                            { text: "언제나 응원한다 멋진 내 친구", money: 0, intimacy: 20, dhEsteem: 20 },
                            { text: "앞으로 꽃길만 걸어라", money: 0, intimacy: 20, dhEsteem: 20 }
                        ]
                    }
                }
            ]
        }
    }
};

const endings = {
    trueEnding: { title: "✨ 진엔딩: 건실한 사회인 독립", text: "동현이가 취업에 성공하고 당신에게 진 빚을 모두 갚았습니다. 당신의 헌신 덕에 진정한 사회인이자 절친으로 거듭났습니다!", imageName: "자존감이_올라간_전동현.png" },
    badEnding1: { title: "💀 배드엔딩 1: 파산한 호구", text: "동현이의 끝없는 보증과 헛발질을 받아주다 당신의 통장 잔고가 0원이 되어 함께 파산했습니다.", imageName: "자존감이_떨어진_전동현.png" },
    badEnding2: { title: "💔 배드엔딩 2: 남보다 못한 손절", text: "매정하게 방관하고 상처만 준 결과, 친밀도가 바닥을 쳐 동현이에게 카톡 차단을 당하고 연을 끊었습니다.", imageName: "슬픈_전동현.png" },
    hiddenEnding: { title: "🧟 히든엔딩: 평생 기생수 동거", text: "동현이의 모든 응석을 다 받아준 결과... 아예 짐을 싸 들고 당신 자취방에 들어와 평생 빌붙어 살게 되었습니다.", imageName: "고마워_하는_전동현.png" }
};