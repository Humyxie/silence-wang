import type { Question } from '../types/quiz';
import { PERSONALITY_IDS } from '../types/personality';

const {
  LITTLE_STAR, GRAVITY_PERSON, EXCLUSIVE_TASTE, ETERNAL_LOVER,
  RING_ENGRAVER, ART_REBEL, SUDDEN_SUMMER, STAR_HIDER, ENTERTAINER,
  LOVE_ANIMAL, DANCE_BEFORE_GOODBYE, DEFIANT, MARS_RESEARCHER,
  ISLAND_POET, SUNNY_COLLECTOR, LUBRICANT, THINK_OF_US
} = PERSONALITY_IDS;

export const questions: Question[] = [
  {
    id: 1,
    text: '周末一整天完全属于自己，你更可能怎么过？',
    dimension: 'energy',
    options: [
      { id: 'A', text: '一个人在家听歌、写点东西，或者什么都不做', scores: { [LITTLE_STAR]: 1, [ISLAND_POET]: 1, [SUNNY_COLLECTOR]: 1 } },
      { id: 'B', text: '约朋友出来聚聚，去热闹的地方', scores: { [GRAVITY_PERSON]: 1, [ENTERTAINER]: 1 } },
      { id: 'C', text: '完成一件一直想做但没做的事', scores: { [STAR_HIDER]: 1, [ETERNAL_LOVER]: 1 } },
      { id: 'D', text: '随机：看心情决定，可能出门也可能宅', scores: { [ART_REBEL]: 1, [DANCE_BEFORE_GOODBYE]: 1 } }
    ]
  },
  {
    id: 2,
    text: '听到一首很触动的歌，你的第一反应通常是？',
    dimension: 'emotion',
    options: [
      { id: 'A', text: '单曲循环，沉浸其中，会想"这写的就是我"', scores: { [RING_ENGRAVER]: 1, [THINK_OF_US]: 1 } },
      { id: 'B', text: '分析这首歌的歌词写得妙在哪里', scores: { [LOVE_ANIMAL]: 1 } },
      { id: 'C', text: '分享到朋友圈或发给特定的人', scores: { [GRAVITY_PERSON]: 1, [SUDDEN_SUMMER]: 1 } },
      { id: 'D', text: '默默收藏，不会告诉任何人', scores: { [ISLAND_POET]: 1, [STAR_HIDER]: 1 } }
    ]
  },
  {
    id: 3,
    text: '在感情里，你更接近哪种状态？',
    dimension: 'relationship',
    options: [
      { id: 'A', text: '希望"不分手的恋爱"，害怕失去，愿意付出很多', scores: { [ETERNAL_LOVER]: 2 } },
      { id: 'B', text: '喜欢一个人会小心翼翼，像藏着一颗小星星', scores: { [LITTLE_STAR]: 2 } },
      { id: 'C', text: '理性看待，不会轻易上头，会分析合不合适', scores: { [LOVE_ANIMAL]: 2 } },
      { id: 'D', text: '随缘，合则来不合则去，不想太累', scores: { [DANCE_BEFORE_GOODBYE]: 1, [ART_REBEL]: 1 } }
    ]
  },
  {
    id: 4,
    text: '面对一个很难但很想实现的目标，你会？',
    dimension: 'attitude',
    options: [
      { id: 'A', text: '死磕到底，不服输，证明自己可以', scores: { [DEFIANT]: 2 } },
      { id: 'B', text: '慢慢来，把它藏心里，默默努力', scores: { [STAR_HIDER]: 2 } },
      { id: 'C', text: '享受过程，结果随缘，不行就换条路', scores: { [MARS_RESEARCHER]: 1, [ART_REBEL]: 1 } },
      { id: 'D', text: '拉着朋友一起，有人陪着更有动力', scores: { [GRAVITY_PERSON]: 1, [THINK_OF_US]: 1 } }
    ]
  },
  {
    id: 5,
    text: '在朋友聚会中，你通常是？',
    dimension: 'relationship',
    options: [
      { id: 'A', text: '气氛担当，有你在就不会冷场', scores: { [ENTERTAINER]: 2 } },
      { id: 'B', text: '照顾大家情绪的那个人，会注意到谁被冷落了', scores: { [THINK_OF_US]: 1, [SUNNY_COLLECTOR]: 1 } },
      { id: 'C', text: '话不多，但每句话都在点上，让人舒服', scores: { [LUBRICANT]: 2 } },
      { id: 'D', text: '想说话但不知道怎么开口，有时觉得自己不合群', scores: { [LITTLE_STAR]: 1, [ISLAND_POET]: 1 } }
    ]
  },
  {
    id: 6,
    text: '当你难过时，你更倾向于？',
    dimension: 'emotion',
    options: [
      { id: 'A', text: '一个人扛着，不想让别人看到', scores: { [STAR_HIDER]: 1, [RING_ENGRAVER]: 1 } },
      { id: 'B', text: '找最信任的人说出来，说出来就好多了', scores: { [THINK_OF_US]: 1, [SUDDEN_SUMMER]: 1 } },
      { id: 'C', text: '用幽默掩盖，嘻嘻哈哈就过去了', scores: { [ENTERTAINER]: 2 } },
      { id: 'D', text: '听歌、写东西，把情绪放进作品里', scores: { [ISLAND_POET]: 1, [SUNNY_COLLECTOR]: 1 } }
    ]
  },
  {
    id: 7,
    text: '翻到老照片/旧聊天记录，你会？',
    dimension: 'relationship',
    options: [
      { id: 'A', text: '看得停不下来，陷入回忆里，有点emo', scores: { [SUDDEN_SUMMER]: 2, [RING_ENGRAVER]: 2 } },
      { id: 'B', text: '笑一笑，感慨一下，然后关掉', scores: { [EXCLUSIVE_TASTE]: 1, [THINK_OF_US]: 1 } },
      { id: 'C', text: '截图发给当时一起的那个人', scores: { [GRAVITY_PERSON]: 1 } },
      { id: 'D', text: '几乎不翻，过去就过去了', scores: { [DANCE_BEFORE_GOODBYE]: 1, [ART_REBEL]: 1 } }
    ]
  },
  {
    id: 8,
    text: '对于"依赖别人"这件事，你的态度是？',
    dimension: 'relationship',
    options: [
      { id: 'A', text: '很难依赖别人，习惯自己扛', scores: { [LITTLE_STAR]: 1, [ISLAND_POET]: 1 } },
      { id: 'B', text: '会依赖很信任的人，但也怕给对方添麻烦', scores: { [THINK_OF_US]: 1, [SUNNY_COLLECTOR]: 1 } },
      { id: 'C', text: '享受互相依赖的感觉，这是亲密的表现', scores: { [ETERNAL_LOVER]: 2 } },
      { id: 'D', text: '不太想依赖别人，也不想被人依赖', scores: { [LOVE_ANIMAL]: 1, [DEFIANT]: 1 } }
    ]
  },
  {
    id: 9,
    text: '什么样的环境让你最有安全感？',
    dimension: 'energy',
    options: [
      { id: 'A', text: '安静、熟悉、只有自己的空间', scores: { [ISLAND_POET]: 1, [STAR_HIDER]: 1 } },
      { id: 'B', text: '有熟悉的人在身边，不需要做什么就很安心', scores: { [THINK_OF_US]: 1, [SUNNY_COLLECTOR]: 1 } },
      { id: 'C', text: '热闹、有音乐、可以释放自己的场合', scores: { [ENTERTAINER]: 1, [DANCE_BEFORE_GOODBYE]: 1 } },
      { id: 'D', text: '井井有条、一切都在掌控之中的环境', scores: { [ETERNAL_LOVER]: 1, [DEFIANT]: 1 } }
    ]
  },
  {
    id: 10,
    text: '面对规则和权威，你的态度是？',
    dimension: 'attitude',
    options: [
      { id: 'A', text: '该遵守的遵守，但内心有自己的判断', scores: { [LUBRICANT]: 1 } },
      { id: 'B', text: '不合理的规则就是要打破', scores: { [DEFIANT]: 2 } },
      { id: 'C', text: '能不碰就不碰，尽量让自己舒服', scores: { [MARS_RESEARCHER]: 1, [ART_REBEL]: 1 } },
      { id: 'D', text: '守规则让我有安全感', scores: { [ETERNAL_LOVER]: 1 } }
    ]
  },
  {
    id: 11,
    text: '你在爱情里最害怕的是？',
    dimension: 'emotion',
    options: [
      { id: 'A', text: '对方其实没那么喜欢我', scores: { [LITTLE_STAR]: 2 } },
      { id: 'B', text: '最终还是会分手，走不到最后', scores: { [RING_ENGRAVER]: 1, [ETERNAL_LOVER]: 1 } },
      { id: 'C', text: '失去自我，变成自己不认识的样子', scores: { [LOVE_ANIMAL]: 2 } },
      { id: 'D', text: '对方不能理解我的沉默和内心世界', scores: { [ISLAND_POET]: 1, [SUNNY_COLLECTOR]: 1 } }
    ]
  },
  {
    id: 12,
    text: '你在关系里更多是？',
    dimension: 'relationship',
    options: [
      { id: 'A', text: '付出型：习惯了照顾别人', scores: { [THINK_OF_US]: 1, [SUNNY_COLLECTOR]: 1 } },
      { id: 'B', text: '被动型：等对方主动，怕自作多情', scores: { [LITTLE_STAR]: 1, [SUDDEN_SUMMER]: 1 } },
      { id: 'C', text: '平等型：你对我好，我就对你好', scores: { [EXCLUSIVE_TASTE]: 2 } },
      { id: 'D', text: '自由型：不想被关系束缚', scores: { [DANCE_BEFORE_GOODBYE]: 2 } }
    ]
  },
  {
    id: 13,
    text: '面对变化和不确定性，你通常？',
    dimension: 'attitude',
    options: [
      { id: 'A', text: '会焦虑，希望一切按计划来', scores: { [ETERNAL_LOVER]: 1, [STAR_HIDER]: 1 } },
      { id: 'B', text: '兵来将挡，水来土掩', scores: { [DEFIANT]: 1, [ENTERTAINER]: 1 } },
      { id: 'C', text: '拥抱变化，新的才有趣', scores: { [MARS_RESEARCHER]: 1, [ART_REBEL]: 1 } },
      { id: 'D', text: '表面上OK，内心其实需要时间适应', scores: { [RING_ENGRAVER]: 1, [ISLAND_POET]: 1 } }
    ]
  },
  {
    id: 14,
    text: '你更认同哪种表达爱的方式？',
    dimension: 'emotion',
    options: [
      { id: 'A', text: '默默记住对方的所有喜好和细节', scores: { [EXCLUSIVE_TASTE]: 1, [THINK_OF_US]: 1 } },
      { id: 'B', text: '大方说出来，不怕全世界知道', scores: { [GRAVITY_PERSON]: 1, [DEFIANT]: 1 } },
      { id: 'C', text: '用行动证明，而不是嘴上说说', scores: { [STAR_HIDER]: 1, [SUNNY_COLLECTOR]: 1 } },
      { id: 'D', text: '给对方空间，不打扰是我的温柔', scores: { [ISLAND_POET]: 1, [LUBRICANT]: 1 } }
    ]
  },
  {
    id: 15,
    text: '对于已经结束的关系，你通常？',
    dimension: 'relationship',
    options: [
      { id: 'A', text: '很难释怀，会反复想"如果当时……"', scores: { [RING_ENGRAVER]: 2, [SUDDEN_SUMMER]: 2 } },
      { id: 'B', text: '会记得美好的部分，但不会再回头', scores: { [EXCLUSIVE_TASTE]: 1, [THINK_OF_US]: 1 } },
      { id: 'C', text: '彻底翻篇，再也不提', scores: { [DEFIANT]: 1, [DANCE_BEFORE_GOODBYE]: 1 } },
      { id: 'D', text: '用新的关系覆盖旧的回忆', scores: { [GRAVITY_PERSON]: 1 } }
    ]
  },
  {
    id: 16,
    text: '你对哪种类型的内容更感兴趣？',
    dimension: 'attitude',
    options: [
      { id: 'A', text: '心理学、人性分析、情感解读', scores: { [LOVE_ANIMAL]: 1 } },
      { id: 'B', text: '冷知识、未解之谜、科幻设定', scores: { [MARS_RESEARCHER]: 2 } },
      { id: 'C', text: '音乐、艺术、创作相关', scores: { [ISLAND_POET]: 1, [SUNNY_COLLECTOR]: 1 } },
      { id: 'D', text: '搞笑、综艺、轻松的内容', scores: { [ENTERTAINER]: 1 } }
    ]
  }
];