import type { PersonalityId } from './personality';

export type Dimension = 'energy' | 'emotion' | 'attitude' | 'relationship';

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
  scores: Partial<Record<PersonalityId, number>>;
}

export interface Question {
  id: number;
  text: string;
  dimension: Dimension;
  options: QuestionOption[];
}

export interface UserAnswers {
  [questionId: number]: 'A' | 'B' | 'C' | 'D';
}

export interface QuizState {
  status: 'start' | 'in_progress' | 'completed';
  currentQuestionIndex: number;
  answers: UserAnswers;
  result: PersonalityId | null;
  startedAt: number | null;
  completedAt: number | null;
}