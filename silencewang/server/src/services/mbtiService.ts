export interface UserAnswers {
  e: number[];  // 5个答案
  s: number[];  // 5个答案
  f: number[];  // 5个答案
  j: number[];  // 5个答案
}

export interface MBTIScore {
  E: number;  // 0-100
  S: number;  // 0-100
  F: number;  // 0-100
  J: number;  // 0-100
}

export interface MBTIType {
  type: string;  // ENFP, INTJ等
  scores: MBTIScore;
}

// 计算每个维度的得分（0-100）
const calculateDimensionScore = (answers: number[]): number => {
  const sum = answers.reduce((acc, val) => acc + val, 0);
  // 范围：-10 到 +10
  // 公式：(sum + 10) / 20 * 100
  return Math.round((sum + 10) / 20 * 100);
};

// 根据得分判断维度倾向
const getDimensionLetter = (score: number, positive: string, negative: string): string => {
  return score >= 50 ? positive : negative;
};

export const calculateMBTI = (answers: UserAnswers): MBTIType => {
  const scores: MBTIScore = {
    E: calculateDimensionScore(answers.e),
    S: calculateDimensionScore(answers.s),
    F: calculateDimensionScore(answers.f),
    J: calculateDimensionScore(answers.j)
  };

  const type =
    getDimensionLetter(scores.E, 'E', 'I') +
    getDimensionLetter(scores.S, 'S', 'N') +
    getDimensionLetter(scores.F, 'F', 'T') +
    getDimensionLetter(scores.J, 'J', 'P');

  return { type, scores };
};

// 计算欧氏距离
export const calculateDistance = (userScores: MBTIScore, songProfile: any): number => {
  const dE = userScores.E - songProfile.E;
  const dS = userScores.S - songProfile.S;
  const dF = userScores.F - songProfile.F;
  const dJ = userScores.J - songProfile.J;

  return Math.sqrt(dE * dE + dS * dS + dF * dF + dJ * dJ);
};

// 找到最匹配的歌曲
export const findMatchedSong = (userScores: MBTIScore, songs: any[]): any => {
  let minDistance = Infinity;
  let matchedSong = null;

  for (const song of songs) {
    const distance = calculateDistance(userScores, {
      E: song.e_profile,
      S: song.s_profile,
      F: song.f_profile,
      J: song.j_profile
    });

    if (distance < minDistance) {
      minDistance = distance;
      matchedSong = { ...song, distance };
    }
  }

  return matchedSong;
};
