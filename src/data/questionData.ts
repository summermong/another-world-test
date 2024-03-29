const questionData = [
  {
    Num: 1,
    Q: '이세계에 온 나. 어떻게 오게 됐을까?',
    A: [
      { type: 'N', text: '나는 선택 받은 아이라 이세계에 끌려 왔다.' },
      { type: 'S', text: '가까운 사람에게 배신을 당해 죽고 환생했다.' },
      { type: 'N', text: '우연히 다른 차원으로 가는 문을 열어버렸다.' },
      { type: 'S', text: '...잘 모르겠다!' },
    ],
  },
  {
    Num: 2,
    Q: '여긴 아무도 없는데... 무엇부터 할까?',
    A: [
      { type: 'P', text: '뭔가 두근두근한데? 일단 조금 걸어볼까?' },
      { type: 'J', text: '조용히 주변 구석구석을 탐색한다.' },
      { type: 'P', text: '저기요! 아무도 없나요! 외친다.' },
      { type: 'J', text: '혹시 모르니 무기 같은 걸 찾아본다.' },
    ],
  },
  {
    Num: 3,
    Q: '나와 잘 맞는 이세계 조력자는?',
    A: [
      { type: 'I', text: '상상 속의 신비로운 동물/요정' },
      { type: 'E', text: '이세계의 인싸 of 인싸인 절친' },
      { type: 'I', text: '신중하고 지혜로운 스승님' },
      { type: 'E', text: '파티를 좋아하는 마당발 귀족 자제' },
    ],
  },
  {
    Num: 4,
    Q: '이세계를 더 알고 싶어! 어떻게 할까?',
    A: [
      { type: 'T', text: '마을의 도서관에서 자료를 찾아본다.' },
      { type: 'F', text: '조력자에게 이것저것 물어본다.' },
      { type: 'T', text: '직접 조금씩 탐험하면서 기록한다.' },
      { type: 'F', text: '번화가나 파티에서 사람들의 말을 듣는다.' },
    ],
  },
  {
    Num: 5,
    Q: '이세계에서 내가 제일 좋아하는 곳은?',
    A: [
      { type: 'I', text: '신성한 나무가 있는 조용한 숲' },
      { type: 'E', text: '매일 파티가 열리는 호화로운 궁' },
      { type: 'I', text: '맛있는 스튜를 파는 아담한 식당' },
      { type: 'E', text: '볼거리가 가득하고 활기찬 도심' },
    ],
  },
  {
    Num: 6,
    Q: '나에게 필요한 마법 능력은?',
    A: [
      { type: 'S', text: '위급 상황에 가장 도움이 될 공격 마법' },
      { type: 'N', text: '언제든 사람들을 도울 수 있는 치유 능력' },
      { type: 'S', text: '1인분은 할 수 있는 고급 방어 능력' },
      { type: 'N', text: '동식물과 교감할 수 있는 희귀 능력' },
    ],
  },
  {
    Num: 7,
    Q: '무시무시한 몬스터가 당신을 습격한다.',
    A: [
      { type: 'P', text: '손에 잡히는 것부터 다 던져!' },
      { type: 'J', text: '몸을 피하면서 행동 패턴을 분석한다.' },
      { type: 'P', text: '도망가든 공격하든 주변 사람들을 따라한다.' },
      { type: 'J', text: '혹시 몰라 갖고 있던 호신용품을 사용한다.' },
    ],
  },
  {
    Num: 8,
    Q: '몬스터를 해치웠다! 이제 어떡할까?',
    A: [
      { type: 'T', text: '몬스터의 가죽이나 보상 아이템을 챙긴다.' },
      { type: 'F', text: '그는 참 (좋은) 몬스터였습니다. 묻어준다.' },
      { type: 'T', text: '앞으로 다신 몬스터가 못 오게 결계를 친다.' },
      { type: 'F', text: '몬스터도 생명이에요! 기도해준다.' },
    ],
  },
  {
    Num: 9,
    Q: '소식을 들은 왕이 당신을 궁에 초대했다.',
    A: [
      { type: 'I', text: '고마우면 돈으로 줘. 안 갈래요.' },
      { type: 'E', text: '벌써 떨리는군^^ 미리 착장을 골라둔다.' },
      { type: 'I', text: '가만히 있다가 조용히 돌아갈래요.' },
      { type: 'E', text: '이 날은 내가 주인공! 사교의 중심이 될래요.' },
    ],
  },
  {
    Num: 10,
    Q: '평화로운 휴일, 무엇을 할까?',
    A: [
      { type: 'S', text: '다른 곳을 탐색하거나 마을을 둘러본다.' },
      { type: 'N', text: '나의 잠재력과 마력을 시험해본다.' },
      { type: 'S', text: '이세계에서 사귄 친구들과 논다.' },
      { type: 'N', text: '어떻게 해야 돌아갈 수 있는지 알아본다.' },
    ],
  },
  {
    Num: 11,
    Q: '원래 세계로 돌아가는 법을 찾았다!',
    A: [
      { type: 'P', text: '빨리 돌아가고 싶어! 지금 당장 간다.' },
      { type: 'J', text: '가다가 죽는 거 아니고? 좀 더 알아본다.' },
      { type: 'P', text: '...그냥 여기서 살면 안되나?' },
      { type: 'J', text: '마지막일지도 몰라! 마음의 준비를 한다.' },
    ],
  },
  {
    Num: 12,
    Q: '당신은 이제 원래 세계로 돌아갑니다.',
    A: [
      { type: 'T', text: '만남이 있으면 헤어짐도 있지! 쿨하게 간다.' },
      { type: 'F', text: '가기 전 즐거웠다고 모두에게 인사한다.' },
      { type: 'T', text: '현실의 나는 뭐 하고 있었을지 생각한다.' },
      { type: 'F', text: '나를 잊지 말아줘! 편지를 쓰고 간다.' },
    ],
  },
];

export default questionData;
