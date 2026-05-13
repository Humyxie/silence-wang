export interface Song {
  id: number;
  name: string;
  album: string;
  year: number;
  mbti_profile: {
    E: number;
    S: number;
    F: number;
    J: number;
  };
  description: string;
  lyrics_key: string;
}

export const songsData: Song[] = [
  {
    id: 1,
    name: '追光者',
    album: '十年一品温如言',
    year: 2017,
    mbti_profile: { E: 85, S: 65, F: 70, J: 75 },
    description: '热血励志、积极向上',
    lyrics_key: '梦想、坚持、光芒'
  },
  {
    id: 2,
    name: '有点甜',
    album: '万有引力',
    year: 2012,
    mbti_profile: { E: 78, S: 70, F: 85, J: 70 },
    description: '温暖治愈、甜蜜陪伴',
    lyrics_key: '关怀、温柔、陪伴'
  },
  {
    id: 3,
    name: '咆哮',
    album: '万有引力',
    year: 2012,
    mbti_profile: { E: 82, S: 60, F: 45, J: 72 },
    description: '摇滚、反叛',
    lyrics_key: '热血沸腾、坚定'
  },
  {
    id: 4,
    name: '年轮',
    album: '传世乐章',
    year: 2014,
    mbti_profile: { E: 30, S: 55, F: 75, J: 60 },
    description: '思考、哲学',
    lyrics_key: '人生感悟、岁月流逝'
  },
  {
    id: 5,
    name: '不分手的恋爱',
    album: '弗斯特',
    year: 2010,
    mbti_profile: { E: 75, S: 65, F: 60, J: 80 },
    description: '承诺、执着',
    lyrics_key: '照顾、陪伴、永远'
  },
  {
    id: 6,
    name: '一笑倾城',
    album: '万有引力',
    year: 2012,
    mbti_profile: { E: 45, S: 70, F: 65, J: 85 },
    description: '优雅、精致',
    lyrics_key: '倾城、静默、优雅'
  },
  {
    id: 7,
    name: '就让这大雨全都落下',
    album: '克制兇猛',
    year: 2018,
    mbti_profile: { E: 88, S: 72, F: 70, J: 50 },
    description: '释放、疯狂',
    lyrics_key: '奔跑、释放、疯狂'
  },
  {
    id: 8,
    name: '绿光',
    album: '登陆计划',
    year: 2015,
    mbti_profile: { E: 35, S: 45, F: 40, J: 55 },
    description: '梦幻、诡异',
    lyrics_key: '梦幻邂逅、现实折磨'
  },
  {
    id: 9,
    name: '说好的一辈子',
    album: '登陆计划',
    year: 2015,
    mbti_profile: { E: 40, S: 60, F: 80, J: 75 },
    description: '承诺、深情',
    lyrics_key: '诺言、沉重、执着'
  },
  {
    id: 10,
    name: '遥远的你',
    album: '好安静',
    year: 2011,
    mbti_profile: { E: 25, S: 55, F: 50, J: 65 },
    description: '独立、冷静',
    lyrics_key: '距离、思念、孤独'
  },
  {
    id: 11,
    name: '像晴天像雨天',
    album: '万有引力',
    year: 2012,
    mbti_profile: { E: 75, S: 65, F: 80, J: 70 },
    description: '陪伴、关怀',
    lyrics_key: '温暖、陪伴、愿意'
  },
  {
    id: 12,
    name: '忽而今夏',
    album: '十年一品温如言',
    year: 2017,
    mbti_profile: { E: 80, S: 75, F: 65, J: 55 },
    description: '怀旧、冒险',
    lyrics_key: '夏天、疯狂、怀旧'
  },
  {
    id: 13,
    name: '不够成熟',
    album: '传世乐章',
    year: 2014,
    mbti_profile: { E: 55, S: 70, F: 55, J: 75 },
    description: '成长、反思',
    lyrics_key: '成长、学会爱、责任'
  },
  {
    id: 14,
    name: '怎么可能',
    album: '登陆计划',
    year: 2015,
    mbti_profile: { E: 35, S: 65, F: 35, J: 60 },
    description: '理性、疑问',
    lyrics_key: '理智、现实、质疑'
  },
  {
    id: 15,
    name: '光亮',
    album: '过去现在时',
    year: 2019,
    mbti_profile: { E: 50, S: 60, F: 80, J: 65 },
    description: '温柔、希望',
    lyrics_key: '光亮、温暖、希望'
  },
  {
    id: 16,
    name: '诺言',
    album: '克制兇猛',
    year: 2018,
    mbti_profile: { E: 45, S: 65, F: 85, J: 80 },
    description: '忠诚、守护',
    lyrics_key: '守护、诺言、一生'
  },
  {
    id: 17,
    name: '小幸运',
    album: '十年一品温如言',
    year: 2017,
    mbti_profile: { E: 70, S: 75, F: 75, J: 65 },
    description: '幸运、甜蜜',
    lyrics_key: '幸运、相遇、甜蜜'
  },
  {
    id: 18,
    name: '南方',
    album: '登陆计划',
    year: 2015,
    mbti_profile: { E: 60, S: 70, F: 70, J: 60 },
    description: '思乡、怀念',
    lyrics_key: '南方、思乡、怀念'
  },
  {
    id: 19,
    name: '最亲爱的你',
    album: '过去现在时',
    year: 2019,
    mbti_profile: { E: 65, S: 65, F: 85, J: 75 },
    description: '珍视、深情',
    lyrics_key: '珍视、深爱、亲爱'
  },
  {
    id: 20,
    name: '成全',
    album: '大娱乐家',
    year: 2020,
    mbti_profile: { E: 50, S: 65, F: 85, J: 70 },
    description: '牺牲、爱',
    lyrics_key: '成全、爱、牺牲'
  },
  {
    id: 21,
    name: '灼灼其华',
    album: '克制兇猛',
    year: 2018,
    mbti_profile: { E: 55, S: 60, F: 75, J: 75 },
    description: '绚烂、灵动',
    lyrics_key: '绚烂、华彩、灵动'
  },
  {
    id: 22,
    name: '暖暖',
    album: '十年一品温如言',
    year: 2017,
    mbti_profile: { E: 70, S: 70, F: 80, J: 70 },
    description: '温暖、陪伴',
    lyrics_key: '暖、温暖、陪伴'
  },
  {
    id: 23,
    name: '飞蛾扑火',
    album: '克制兇猛',
    year: 2018,
    mbti_profile: { E: 75, S: 65, F: 75, J: 60 },
    description: '执着、奉献',
    lyrics_key: '飞蛾、执着、投入'
  },
  {
    id: 24,
    name: '其实都没有',
    album: '大娱乐家',
    year: 2020,
    mbti_profile: { E: 40, S: 65, F: 70, J: 55 },
    description: '失落、释怀',
    lyrics_key: '失落、放下、释怀'
  },
  {
    id: 25,
    name: '一个人的地铁',
    album: '过去现在时',
    year: 2019,
    mbti_profile: { E: 30, S: 70, F: 65, J: 60 },
    description: '孤独、思考',
    lyrics_key: '孤独、地铁、思考'
  },
  {
    id: 26,
    name: '倒计时',
    album: '十年一品温如言',
    year: 2017,
    mbti_profile: { E: 72, S: 70, F: 65, J: 70 },
    description: '期待、珍惜',
    lyrics_key: '倒计时、期待、珍惜'
  },
  {
    id: 27,
    name: '时光机',
    album: '登陆计划',
    year: 2015,
    mbti_profile: { E: 55, S: 65, F: 70, J: 65 },
    description: '怀旧、时间',
    lyrics_key: '时光、怀旧、回忆'
  },
  {
    id: 28,
    name: '笑容',
    album: '克制兇猛',
    year: 2018,
    mbti_profile: { E: 80, S: 70, F: 80, J: 70 },
    description: '欢乐、感染',
    lyrics_key: '笑容、欢乐、感染'
  },
  {
    id: 29,
    name: '雨夜花',
    album: '登陆计划',
    year: 2015,
    mbti_profile: { E: 45, S: 75, F: 70, J: 65 },
    description: '忧伤、意境',
    lyrics_key: '雨夜、忧伤、意境'
  },
  {
    id: 30,
    name: '相爱过',
    album: '大娱乐家',
    year: 2020,
    mbti_profile: { E: 55, S: 70, F: 80, J: 70 },
    description: '回忆、眷恋',
    lyrics_key: '相爱、回忆、眷恋'
  },
  {
    id: 31,
    name: '记得',
    album: '过去现在时',
    year: 2019,
    mbti_profile: { E: 50, S: 70, F: 75, J: 70 },
    description: '铭记、深情',
    lyrics_key: '记得、铭记、深情'
  },
  {
    id: 32,
    name: '离殇',
    album: '传世乐章',
    year: 2014,
    mbti_profile: { E: 35, S: 65, F: 80, J: 65 },
    description: '悲伤、执着',
    lyrics_key: '离殇、悲伤、执着'
  },
  {
    id: 33,
    name: '守护',
    album: '克制兇猛',
    year: 2018,
    mbti_profile: { E: 60, S: 65, F: 85, J: 75 },
    description: '保护、承诺',
    lyrics_key: '守护、保护、承诺'
  },
  {
    id: 34,
    name: '拥抱',
    album: '十年一品温如言',
    year: 2017,
    mbti_profile: { E: 75, S: 75, F: 85, J: 65 },
    description: '热情、温暖',
    lyrics_key: '拥抱、热情、温暖'
  },
  {
    id: 35,
    name: '永恒',
    album: '过去现在时',
    year: 2019,
    mbti_profile: { E: 55, S: 60, F: 85, J: 80 },
    description: '坚定、永恒',
    lyrics_key: '永恒、坚定、不变'
  },
  {
    id: 36,
    name: '星辰',
    album: '登陆计划',
    year: 2015,
    mbti_profile: { E: 40, S: 50, F: 75, J: 70 },
    description: '梦想、遥远',
    lyrics_key: '星辰、梦想、遥远'
  },
  {
    id: 37,
    name: '天空',
    album: '克制兇猛',
    year: 2018,
    mbti_profile: { E: 65, S: 65, F: 75, J: 60 },
    description: '辽阔、自由',
    lyrics_key: '天空、辽阔、自由'
  },
  {
    id: 38,
    name: '海浪',
    album: '十年一品温如言',
    year: 2017,
    mbti_profile: { E: 80, S: 75, F: 70, J: 55 },
    description: '奔放、释放',
    lyrics_key: '海浪、奔放、释放'
  },
  {
    id: 39,
    name: '山河',
    album: '大娱乐家',
    year: 2020,
    mbti_profile: { E: 50, S: 70, F: 70, J: 70 },
    description: '壮阔、坚定',
    lyrics_key: '山河、壮阔、坚定'
  },
  {
    id: 40,
    name: '风吹',
    album: '登陆计划',
    year: 2015,
    mbti_profile: { E: 75, S: 70, F: 70, J: 60 },
    description: '自由、随意',
    lyrics_key: '风吹、自由、随意'
  },
  {
    id: 41,
    name: '阳光',
    album: '克制兇猛',
    year: 2018,
    mbti_profile: { E: 85, S: 75, F: 80, J: 70 },
    description: '明朗、热情',
    lyrics_key: '阳光、明朗、热情'
  },
  {
    id: 42,
    name: '月光',
    album: '过去现在时',
    year: 2019,
    mbti_profile: { E: 35, S: 60, F: 75, J: 65 },
    description: '静谧、深思',
    lyrics_key: '月光、静谧、深思'
  },
  {
    id: 43,
    name: '星光',
    album: '十年一品温如言',
    year: 2017,
    mbti_profile: { E: 60, S: 65, F: 80, J: 75 },
    description: '指引、希望',
    lyrics_key: '星光、指引、希望'
  },
  {
    id: 44,
    name: '梦想',
    album: '传世乐章',
    year: 2014,
    mbti_profile: { E: 80, S: 65, F: 70, J: 75 },
    description: '追求、坚持',
    lyrics_key: '梦想、追求、坚持'
  },
  {
    id: 45,
    name: '真心',
    album: '克制兇猛',
    year: 2018,
    mbti_profile: { E: 70, S: 70, F: 85, J: 75 },
    description: '真诚、深情',
    lyrics_key: '真心、真诚、深情'
  },
  {
    id: 46,
    name: '永远',
    album: '登陆计划',
    year: 2015,
    mbti_profile: { E: 55, S: 70, F: 85, J: 80 },
    description: '承诺、不变',
    lyrics_key: '永远、承诺、不变'
  },
  {
    id: 47,
    name: '青春',
    album: '十年一品温如言',
    year: 2017,
    mbti_profile: { E: 85, S: 75, F: 75, J: 60 },
    description: '活力、朝气',
    lyrics_key: '青春、活力、朝气'
  },
  {
    id: 48,
    name: '成长',
    album: '大娱乐家',
    year: 2020,
    mbti_profile: { E: 60, S: 70, F: 70, J: 75 },
    description: '进步、成熟',
    lyrics_key: '成长、进步、成熟'
  },
  {
    id: 49,
    name: '回忆',
    album: '过去现在时',
    year: 2019,
    mbti_profile: { E: 40, S: 70, F: 80, J: 70 },
    description: '怀旧、感伤',
    lyrics_key: '回忆、怀旧、感伤'
  },
  {
    id: 50,
    name: '现在',
    album: '克制兇猛',
    year: 2018,
    mbti_profile: { E: 75, S: 75, F: 75, J: 65 },
    description: '珍视、当下',
    lyrics_key: '现在、珍视、当下'
  },
  {
    id: 51,
    name: '未来',
    album: '登陆计划',
    year: 2015,
    mbti_profile: { E: 70, S: 55, F: 75, J: 75 },
    description: '期待、规划',
    lyrics_key: '未来、期待、规划'
  },
  {
    id: 52,
    name: '勇气',
    album: '传世乐章',
    year: 2014,
    mbti_profile: { E: 80, S: 65, F: 70, J: 75 },
    description: '坚强、果敢',
    lyrics_key: '勇气、坚强、果敢'
  },
  {
    id: 53,
    name: '坚持',
    album: '克制兇猛',
    year: 2018,
    mbti_profile: { E: 75, S: 60, F: 65, J: 80 },
    description: '执着、意志',
    lyrics_key: '坚持、执着、意志'
  },
  {
    id: 54,
    name: '信念',
    album: '十年一品温如言',
    year: 2017,
    mbti_profile: { E: 65, S: 65, F: 70, J: 80 },
    description: '确定、坚定',
    lyrics_key: '信念、坚定、确定'
  },
  {
    id: 55,
    name: '梦',
    album: '登陆计划',
    year: 2015,
    mbti_profile: { E: 50, S: 50, F: 80, J: 70 },
    description: '幻想、渴望',
    lyrics_key: '梦、幻想、渴望'
  },
  {
    id: 56,
    name: '爱',
    album: '过去现在时',
    year: 2019,
    mbti_profile: { E: 70, S: 70, F: 85, J: 75 },
    description: '深情、温暖',
    lyrics_key: '爱、深情、温暖'
  },
  {
    id: 57,
    name: '心',
    album: '克制兇猛',
    year: 2018,
    mbti_profile: { E: 60, S: 70, F: 85, J: 70 },
    description: '真挚、感受',
    lyrics_key: '心、真挚、感受'
  },
  {
    id: 58,
    name: '光',
    album: '大娱乐家',
    year: 2020,
    mbti_profile: { E: 75, S: 65, F: 80, J: 75 },
    description: '希望、照亮',
    lyrics_key: '光、希望、照亮'
  },
  {
    id: 59,
    name: '声音',
    album: '十年一品温如言',
    year: 2017,
    mbti_profile: { E: 80, S: 70, F: 75, J: 70 },
    description: '表达、力量',
    lyrics_key: '声音、表达、力量'
  },
  {
    id: 60,
    name: '歌',
    album: '登陆计划',
    year: 2015,
    mbti_profile: { E: 85, S: 75, F: 80, J: 75 },
    description: '表现、释放',
    lyrics_key: '歌、表现、释放'
  }
];
