import type { PersonalityId } from '../types/personality';
import { personalities } from '../data/personalities'; 
import type { UserAnswers } from '../types/quiz';
import type { PersonalityScore } from '../types/result';
import { questions } from '../data/quizQuestions';

// 获取所有 PersonalityId
const getAllPersonalityIds = (): PersonalityId[] => {
  return Object.keys(personalities) as PersonalityId[];
};

// 初始化所有分数为 0
const initializeScores = (): Record<PersonalityId, number> => {
  const scores = {} as Record<PersonalityId, number>;
  getAllPersonalityIds().forEach(id => {
    scores[id] = 0;
  });
  return scores;
};

// 计算各人格总分
export function calculateScores(answers: UserAnswers): Record<PersonalityId, number> {
  const scores = initializeScores();

  Object.entries(answers).forEach(([questionIdStr, optionId]) => {
    const questionId = parseInt(questionIdStr);
    const question = questions.find(q => q.id === questionId);
    if (!question) return;
    
    const selectedOption = question.options.find(opt => opt.id === optionId);
    if (!selectedOption) return;
    
    Object.entries(selectedOption.scores).forEach(([personalityId, score]) => {
      const pid = personalityId as PersonalityId;
      scores[pid] = (scores[pid] || 0) + score;
    });
  });
  
  return scores;
}

// 获取主导人格（处理平局）
export function getPrimaryPersonality(
  scores: Record<PersonalityId, number>
): { primaryId: PersonalityId; primaryScore: number; secondaryId: PersonalityId | null } {
  const entries = Object.entries(scores) as [PersonalityId, number][];
  entries.sort((a, b) => b[1] - a[1]);
  
  const primaryId = entries[0][0];
  const primaryScore = entries[0][1];
  const secondaryScore = entries[1]?.[1] || 0;
  
  const secondaryId = primaryScore === secondaryScore ? entries[1][0] : null;
  
  return { primaryId, primaryScore, secondaryId };
}

// 获取所有人格得分列表
export function getAllScores(scores: Record<PersonalityId, number>): PersonalityScore[] {
  return Object.entries(scores).map(([id, score]) => ({
    id: id as PersonalityId,
    score
  }));
}