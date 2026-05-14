import type { Personality, PersonalityId } from '../types/personality';
import { PERSONALITY_IDS } from '../types/personality';

const {
  LITTLE_STAR, GRAVITY_PERSON, EXCLUSIVE_TASTE, ETERNAL_LOVER,
  RING_ENGRAVER, ART_REBEL, SUDDEN_SUMMER, STAR_HIDER, ENTERTAINER,
  LOVE_ANIMAL, DANCE_BEFORE_GOODBYE, DEFIANT, MARS_RESEARCHER,
  ISLAND_POET, SUNNY_COLLECTOR, LUBRICANT, THINK_OF_US
} = PERSONALITY_IDS;

export const personalities: Record<PersonalityId, Personality> = {
  [LITTLE_STAR]: {
    id: LITTLE_STAR,
    name: '小星星',
    tagline: '纯真温暖，暗恋中的小心翼翼',
    description: '你像天上那颗小星星，单纯、温暖，喜欢一个人时会小心翼翼地把心意藏在日常里。你不擅长轰轰烈烈，但你的陪伴本身就是最长情的告白。',
    traits: ['纯真', '温暖', '暗恋', '细腻'],
    song: {
      name: '小星星',
      artist: '汪苏泷',
      link: 'https://music.163.com/#/song?id=165379',
      isOriginal: true,
      lyric: '你就是我的小星星，挂在那天上放光明'
    },
    shareMessage: '我是【小星星】人格，纯真温暖，暗恋里的小心翼翼',
    colorScheme: { primary: '#FFD700', secondary: '#FFF8DC', accent: '#FFA500' }
  },
  [GRAVITY_PERSON]: {
    id: GRAVITY_PERSON,
    name: '万有引力者',
    tagline: '活泼甜系，让人想靠近的吸引力',
    description: '你是万有引力本人！活泼、甜系、充满能量，和你在一起的人总会不自觉地被感染。你像一颗小太阳，让人想要靠近。',
    traits: ['活泼', '甜系', '有感染力', '社交能力强'],
    song: {
      name: '万有引力',
      artist: '汪苏泷',
      link: 'https://music.163.com/#/song?id=165339',
      isOriginal: true,
      lyric: '喜欢你瞪着大大眼睛，对什么事情都很好奇'
    },
    shareMessage: '我是【万有引力者】人格，活泼甜系，让人想靠近的吸引力',
    colorScheme: { primary: '#FF6B6B', secondary: '#FFE4E1', accent: '#FF4500' }
  },
  [EXCLUSIVE_TASTE]: {
    id: EXCLUSIVE_TASTE,
    name: '专属味道',
    tagline: '恋旧细致，相信缘分的收藏家',
    description: '你是专属味道型恋人。你恋旧、注重细节，相信人和人之间的缘分。那些只属于你们的暗号和小习惯，你会记得很久很久。',
    traits: ['恋旧', '细致', '相信缘分', '重感情'],
    song: {
      name: '专属味道',
      artist: '汪苏泷 / 林希儿',
      link: 'https://music.163.com/#/song?id=165375',
      isOriginal: true,
      lyric: '我们的缘分刚好不许别人打扰，搭配爱情的美妙只有我们知道'
    },
    shareMessage: '我是【专属味道】人格，恋旧细致，相信缘分的收藏家',
    colorScheme: { primary: '#E8A0BF', secondary: '#FCE4EC', accent: '#C71585' }
  },
  [ETERNAL_LOVER]: {
    id: ETERNAL_LOVER,
    name: '不分手的恋人',
    tagline: '深情执着，渴望永恒的守护者',
    description: '你是那个不想分手的人。在感情里，你执着、深情、害怕失去。你以为只要足够努力，就能留住想要留住的人。',
    traits: ['深情', '执着', '忠诚', '害怕失去'],
    song: {
      name: '不分手的恋爱',
      artist: '汪苏泷',
      link: 'https://music.163.com/#/song?id=165361',
      isOriginal: true,
      lyric: '不想太多，不想太多，也许会明白的更多'
    },
    shareMessage: '我是【不分手的恋人】人格，深情执着，渴望永恒的守护者',
    colorScheme: { primary: '#9B59B6', secondary: '#F3E5F5', accent: '#8E44AD' }
  },
  [RING_ENGRAVER]: {
    id: RING_ENGRAVER,
    name: '年轮刻印者',
    tagline: '隐忍宿命，把伤痛化为成长印记',
    description: '你是年轮刻印者。你习惯把经历过的伤痛默默刻进心里，不声张、不抱怨，让它们成为你生命的一部分。你相信，时间会给出答案。',
    traits: ['隐忍', '宿命感', '坚韧', '内省'],
    song: {
      name: '年轮',
      artist: '汪苏泷',
      link: 'https://music.163.com/#/song?id=32897777',
      isOriginal: false,
      lyric: '数着一圈圈年轮，我认真，将心事都封存，密密麻麻是我的自尊'
    },
    shareMessage: '我是【年轮刻印者】人格，隐忍宿命，把伤痛化为成长印记',
    colorScheme: { primary: '#8B6914', secondary: '#F5F0E6', accent: '#6B4F12' }
  },
  [ART_REBEL]: {
    id: ART_REBEL,
    name: '就要活得不懂艺术者',
    tagline: '拒绝复杂，遵从本心的真实派',
    description: '你就要活得不懂艺术。不纠结于对不对、高级不高级，只关心我想不想、开不开心。这是一种现代人间清醒的酷感。',
    traits: ['真实', '反内耗', '遵从本心', '酷'],
    song: {
      name: '就要活得不懂艺术',
      artist: '汪苏泷',
      link: 'https://music.163.com/#/song?id=3369666857',
      isOriginal: true,
      lyric: '别闹了，都是单细胞生物'
    },
    shareMessage: '我是【就要活得不懂艺术者】人格，拒绝复杂，遵从本心的真实派',
    colorScheme: { primary: '#2C3E50', secondary: '#ECF0F1', accent: '#E74C3C' }
  },
  [SUDDEN_SUMMER]: {
    id: SUDDEN_SUMMER,
    name: '忽而今夏者',
    tagline: '怀念青春，忘不掉的就记得吧',
    description: '你是忽而今夏者。你怀念青春，也放不下那些在夏天发生过的事。有些忘不掉的，你会选择记得。',
    traits: ['怀念青春', '感性', '重回忆', '温柔'],
    song: {
      name: '忽而今夏',
      artist: '汪苏泷',
      link: 'https://music.163.com/#/song?id=553310138',
      isOriginal: true,
      lyric: '还有些忘不掉的，你说那就记得吧'
    },
    shareMessage: '我是【忽而今夏者】人格，怀念青春，忘不掉的就记得吧',
    colorScheme: { primary: '#4A90E2', secondary: '#D6EAF8', accent: '#2E86C1' }
  },
  [STAR_HIDER]: {
    id: STAR_HIDER,
    name: '藏星者',
    tagline: '外表坚强，把梦想藏进心里',
    description: '你是藏星者。你看起来坚强，但心里藏着很多柔软的梦想。你不轻易示弱，但你知道自己一直在发光。',
    traits: ['坚强', '有梦想', '内敛', '执着'],
    song: {
      name: '藏星',
      artist: '汪苏泷',
      link: 'https://music.163.com/#/song?id=2621646939',
      isOriginal: true,
      lyric: '藏一片星光在我背包，无数的黑夜靠它照亮'
    },
    shareMessage: '我是【藏星者】人格，外表坚强，把梦想藏进心里',
    colorScheme: { primary: '#1A1A2E', secondary: '#E0E0E0', accent: '#FFD700' }
  },
  [ENTERTAINER]: {
    id: ENTERTAINER,
    name: '大娱乐家',
    tagline: '幽默为铠，用玩笑消化一切',
    description: '你是大娱乐家！你习惯用幽默来面对一切，不开心的时候也要装作开心。你是人群中的气氛担当，但你心里清楚——笑，是铠甲。',
    traits: ['幽默', '气氛担当', '高情商', '内心深沉'],
    song: {
      name: '大娱乐家',
      artist: '汪苏泷',
      link: 'https://music.163.com/#/song?id=1487059196',
      isOriginal: true,
      lyric: '你是大娱乐家，你娱乐大家'
    },
    shareMessage: '我是【大娱乐家】人格，幽默为铠，用玩笑消化一切',
    colorScheme: { primary: '#E67E22', secondary: '#FDEBD0', accent: '#D35400' }
  },
  [LOVE_ANIMAL]: {
    id: LOVE_ANIMAL,
    name: '恋爱动物',
    tagline: '理性解剖爱情，不信套路',
    description: '你是恋爱动物，但你已经看透了爱情的套路。你不相信什么命中注定，更愿意理性地解剖感情。你想要的，不是条件反射，而是真心。',
    traits: ['理性', '洞察力强', '不信套路', '独立'],
    song: {
      name: '恋爱动物',
      artist: '汪苏泷',
      link: 'https://music.163.com/#/song?id=2006629537',
      isOriginal: true,
      lyric: '誓言不必当真只是无聊消遣，无非一场游戏进入角色扮演'
    },
    shareMessage: '我是【恋爱动物】人格，理性解剖爱情，不信套路',
    colorScheme: { primary: '#16A085', secondary: '#D1F2EB', accent: '#0E6655' }
  },
  [DANCE_BEFORE_GOODBYE]: {
    id: DANCE_BEFORE_GOODBYE,
    name: '告别前跳舞者',
    tagline: '活在当下，纵情狂欢不问明天',
    description: '你是告别前跳舞者。在不确定的时代里，你选择活在当下。既然不知道明天会发生什么，那就在告别前尽情跳舞。',
    traits: ['活在当下', '自由', '热烈', '不羁'],
    song: {
      name: '告别前要跳舞',
      artist: '汪苏泷',
      link: 'https://music.163.com/#/song?id=2006630435',
      isOriginal: true,
      lyric: '不如就一起疯吧，不如就一起蹦吧'
    },
    shareMessage: '我是【告别前跳舞者】人格，活在当下，纵情狂欢不问明天',
    colorScheme: { primary: '#E74C3C', secondary: '#FADBD8', accent: '#C0392B' }
  },
  [DEFIANT]: {
    id: DEFIANT,
    name: '不服者',
    tagline: '倔强有态度，敢于对抗偏见',
    description: '你是不服者！你有态度、有脾气，不愿意被定义。当别人说你不行的时候，你会用实际行动证明自己。倔强，是你的底色。',
    traits: ['倔强', '有态度', '不服输', '有主见'],
    song: {
      name: '不服',
      artist: '汪苏泷',
      link: 'https://music.163.com/#/song?id=1370886408',
      isOriginal: true,
      lyric: '反正我不怕输，我用爸妈给的天赋，不服'
    },
    shareMessage: '我是【不服者】人格，倔强有态度，敢于对抗偏见',
    colorScheme: { primary: '#8E44AD', secondary: '#E8DAEF', accent: '#6C3483' }
  },
  [MARS_RESEARCHER]: {
    id: MARS_RESEARCHER,
    name: '火星研究员',
    tagline: '好奇探索，不按常理出牌',
    description: '你是火星研究员。你喜欢研究奇怪的东西，用抽离的视角观察这个世界。你不急于下结论，享受探索和发现的过程。',
    traits: ['好奇', '探索者', '不按常理', '观察者'],
    song: {
      name: '火星研究院',
      artist: '汪苏泷',
      link: 'https://music.163.com/#/song?id=515796160',
      isOriginal: true,
      lyric: '我在火星研究院，研究地球人的爱恋'
    },
    shareMessage: '我是【火星研究员】人格，好奇探索，不按常理出牌',
    colorScheme: { primary: '#C0392B', secondary: '#FADBD8', accent: '#A93226' }
  },
  [ISLAND_POET]: {
    id: ISLAND_POET,
    name: '岛屿诗人',
    tagline: '温柔有距离，享受独处的丰盛',
    description: '你是岛屿诗人。你习惯一个人待着，但你不觉得孤独。你内心有一个完整的世界，你敏感、细腻，能从细微处捕捉到别人忽略的情绪。',
    traits: ['温柔', '敏感', '独处', '内心丰富'],
    song: {
      name: '岛',
      artist: '汪苏泷',
      link: 'https://music.163.com/#/song?id=1308818695',
      isOriginal: true,
      lyric: '都不在乎，都别在乎'
    },
    shareMessage: '我是【岛屿诗人】人格，温柔有距离，享受独处的丰盛',
    colorScheme: { primary: '#3498DB', secondary: '#D6EAF8', accent: '#2874A6' }
  },
  [SUNNY_COLLECTOR]: {
    id: SUNNY_COLLECTOR,
    name: '晴天收藏家',
    tagline: '经历风雨，依然相信晴天的理想主义者',
    description: '你是晴天收藏家。你经历过风雨，但内心依然相信晴天会来。你温柔、坚韧，向往光明，也愿意成为别人的光。',
    traits: ['温柔', '坚韧', '理想主义', '治愈'],
    song: {
      name: '晴',
      artist: '汪苏泷',
      link: 'https://music.163.com/#/song?id=28724351',
      isOriginal: true,
      lyric: '我等待的是晴天'
    },
    shareMessage: '我是【晴天收藏家】人格，经历风雨，依然相信晴天的理想主义者',
    colorScheme: { primary: '#F39C12', secondary: '#FDEBD0', accent: '#E67E22' }
  },
  [LUBRICANT]: {
    id: LUBRICANT,
    name: '润滑剂',
    tagline: '高情商，让人舒服的社交高手',
    description: '你是润滑剂型人格。你高情商、善于化解尴尬，是朋友圈里不可或缺的那个人。你说话让人舒服，做事让人安心，和你相处如沐春风。',
    traits: ['高情商', '善于化解尴尬', '让人舒服', '社交能力强'],
    song: {
      name: '讲话是闭嘴的时候',
      artist: '汪苏泷',
      link: 'https://music.163.com/#/song?id=2006630436',
      isOriginal: true,
      lyric: '讲话的时候，其实我没有说话'
    },
    shareMessage: '我是【润滑剂】人格，高情商，让人舒服的社交高手',
    colorScheme: { primary: '#1ABC9C', secondary: '#D1F2EB', accent: '#117864' }
  },
  [THINK_OF_US]: {
    id: THINK_OF_US,
    name: '想到我们者',
    tagline: '珍视回忆，默默守护共同联结',
    description: '你是想到我们者。你珍视每一段关系，默默守护着共同的回忆。你不常提起，但心里永远有那个人的位置。',
    traits: ['重感情', '念旧', '默默守护', '温暖'],
    song: {
      name: '想到我们',
      artist: '汪苏泷',
      link: 'https://music.163.com/#/song?id=2621278819',
      isOriginal: true,
      lyric: '想到我们，还是会笑'
    },
    shareMessage: '我是【想到我们者】人格，珍视回忆，默默守护共同联结',
    colorScheme: { primary: '#5D6D7E', secondary: '#E5E7E9', accent: '#2C3E50' }
  }
};