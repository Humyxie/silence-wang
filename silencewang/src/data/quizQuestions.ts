import type { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  // E/I 维度 - 5题
  {
    dimension: 'E',
    index: 0,
    text: '在与汪苏泷粉丝互动时，你更倾向于：',
    options: [
      { text: '主动在社交媒体上分享和讨论他的新歌', value: 2 },
      { text: '偶尔参与讨论和分享', value: 1 },
      { text: '更喜欢私下享受他的音乐', value: -1 },
      { text: '独自一个人静静地听音乐，不太参与互动', value: -2 },
    ],
  },
  {
    dimension: 'E',
    index: 1,
    text: '你参加粉丝见面会或演唱会时：',
    options: [
      { text: '兴奋地准备应援、与其他粉丝互动', value: 2 },
      { text: '开心地参加，有时会与人互动', value: 1 },
      { text: '更喜欢享受音乐和演出本身', value: -1 },
      { text: '倾向于保持低调，只为了听音乐', value: -2 },
    ],
  },
  {
    dimension: 'E',
    index: 2,
    text: '假期时你会：',
    options: [
      { text: '组织或参加热闹的活动和聚会', value: 2 },
      { text: '和朋友外出活动为主', value: 1 },
      { text: '在家休息和放松为主，偶尔外出', value: -1 },
      { text: '更喜欢独处或与亲密的人共处', value: -2 },
    ],
  },
  {
    dimension: 'E',
    index: 3,
    text: '面对新事物时你：',
    options: [
      { text: '迫不及待地跳入尝试，充满热情', value: 2 },
      { text: '愿意主动尝试新的体验', value: 1 },
      { text: '需要一些时间观察和思考', value: -1 },
      { text: '更倾向于谨慎观察再做决定', value: -2 },
    ],
  },
  {
    dimension: 'E',
    index: 4,
    text: '在工作或学习中你：',
    options: [
      { text: '喜欢团队合作和频繁沟通', value: 2 },
      { text: '可以适应团队也能独立工作', value: 1 },
      { text: '倾向于独立完成任务', value: -1 },
      { text: '更喜欢独自专注于工作', value: -2 },
    ],
  },

  // S/N 维度 - 5题
  {
    dimension: 'S',
    index: 5,
    text: '听音乐时你更注重：',
    options: [
      { text: '具体的歌词内容和音乐旋律', value: 2 },
      { text: '歌词和音乐都很重要', value: 1 },
      { text: '音乐背后的情感和意义', value: -1 },
      { text: '音乐所传达的深层思想和哲理', value: -2 },
    ],
  },
  {
    dimension: 'S',
    index: 6,
    text: '在日常生活中你：',
    options: [
      { text: '关注眼前的现实，按部就班', value: 2 },
      { text: '既关注现实也会有些想象', value: 1 },
      { text: '经常思考潜在的可能性', value: -1 },
      { text: '经常陷入幻想和对未来的遐想', value: -2 },
    ],
  },
  {
    dimension: 'S',
    index: 7,
    text: '你倾向于做出决定时：',
    options: [
      { text: '根据具体的事实和数据', value: 2 },
      { text: '考虑具体信息和一些直觉', value: 1 },
      { text: '依靠直觉和想象力', value: -1 },
      { text: '完全跟随自己的直觉和灵感', value: -2 },
    ],
  },
  {
    dimension: 'S',
    index: 8,
    text: '对于计划和目标你：',
    options: [
      { text: '制定详细的计划并按步骤执行', value: 2 },
      { text: '制定计划但也保持一定灵活性', value: 1 },
      { text: '更倾向于灵活应对，不过分计划', value: -1 },
      { text: '不太喜欢详细计划，跟随内心想法', value: -2 },
    ],
  },
  {
    dimension: 'S',
    index: 9,
    text: '旅行或探索时你：',
    options: [
      { text: '喜欢有详细的行程规划', value: 2 },
      { text: '计划和随性结合', value: 1 },
      { text: '倾向于随意探索', value: -1 },
      { text: '完全随性，享受未知的冒险', value: -2 },
    ],
  },

  // F/T 维度 - 5题
  {
    dimension: 'F',
    index: 10,
    text: '面对他人的困难时你：',
    options: [
      { text: '立刻感同身受，想要帮助和安慰', value: 2 },
      { text: '既感同身受又会考虑实际解决方案', value: 1 },
      { text: '更多地思考解决问题的方案', value: -1 },
      { text: '首先分析问题的原因和逻辑', value: -2 },
    ],
  },
  {
    dimension: 'F',
    index: 11,
    text: '在做决定时你认为最重要的是：',
    options: [
      { text: '这个决定如何影响人际关系', value: 2 },
      { text: '权衡人情和逻辑', value: 1 },
      { text: '理性分析和客观判断', value: -1 },
      { text: '纯粹的逻辑和事实', value: -2 },
    ],
  },
  {
    dimension: 'F',
    index: 12,
    text: '面对批评你：',
    options: [
      { text: '感到被伤害，需要温暖的支持', value: 2 },
      { text: '会有些难过但也认真听取意见', value: 1 },
      { text: '客观地分析批评的有效性', value: -1 },
      { text: '只关注批评是否有逻辑根据', value: -2 },
    ],
  },
  {
    dimension: 'F',
    index: 13,
    text: '与朋友的冲突中你倾向于：',
    options: [
      { text: '强调和谐，优先恢复关系', value: 2 },
      { text: '既想和谐也想解决问题', value: 1 },
      { text: '更关注问题本身的解决', value: -1 },
      { text: '客观分析谁对谁错', value: -2 },
    ],
  },
  {
    dimension: 'F',
    index: 14,
    text: '你欣赏的人品质是：',
    options: [
      { text: '温暖、体贴、有同理心', value: 2 },
      { text: '温暖和聪明的结合', value: 1 },
      { text: '聪明、理性、有能力', value: -1 },
      { text: '逻辑清晰、客观公正', value: -2 },
    ],
  },

  // J/P 维度 - 5题
  {
    dimension: 'J',
    index: 15,
    text: '在日程安排中你：',
    options: [
      { text: '喜欢提前规划，按计划执行', value: 2 },
      { text: '有基本计划但保持灵活性', value: 1 },
      { text: '倾向于临时应对，不过度计划', value: -1 },
      { text: '完全随性，不喜欢被计划束缚', value: -2 },
    ],
  },
  {
    dimension: 'J',
    index: 16,
    text: '在工作或学习中你：',
    options: [
      { text: '喜欢有清晰的目标和截止日期', value: 2 },
      { text: '需要目标但也有一定灵活性', value: 1 },
      { text: '在截止日期前才会加紧', value: -1 },
      { text: '更享受过程，不太在意截止日期', value: -2 },
    ],
  },
  {
    dimension: 'J',
    index: 17,
    text: '你的房间和工作空间通常是：',
    options: [
      { text: '井井有条，每样东西都有位置', value: 2 },
      { text: '大致整洁，可以接受一些混乱', value: 1 },
      { text: '有些凌乱但你知道东西在哪', value: -1 },
      { text: '很凌乱，创意氛围很浓', value: -2 },
    ],
  },
  {
    dimension: 'J',
    index: 18,
    text: '面对新项目时你的第一反应是：',
    options: [
      { text: '立即制定详细计划和步骤', value: 2 },
      { text: '思考主要步骤并灵活调整', value: 1 },
      { text: '先尝试再调整方案', value: -1 },
      { text: '直接开始，在过程中探索', value: -2 },
    ],
  },
  {
    dimension: 'J',
    index: 19,
    text: '对于规则和约定你：',
    options: [
      { text: '认为规则很重要，应该遵守', value: 2 },
      { text: '大多数情况下遵守规则', value: 1 },
      { text: '根据情况灵活对待规则', value: -1 },
      { text: '更注重规则的目的而非形式', value: -2 },
    ],
  },
];
