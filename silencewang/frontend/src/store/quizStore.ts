import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { QuizState } from '../types/quiz';
import type { PersonalityId } from '../types/personality';
import { calculateScores, getPrimaryPersonality } from '../utils/calculator';

interface QuizStore extends QuizState {
  startQuiz: () => void;
  answerQuestion: (questionId: number, optionId: 'A' | 'B' | 'C' | 'D') => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  completeQuiz: () => { primaryId: PersonalityId; primaryScore: number; secondaryId: PersonalityId | null; allScores: any };
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizStore>()(
  persist(
    (set, get) => ({
      status: 'start',
      currentQuestionIndex: 0,
      answers: {},
      result: null,
      startedAt: null,
      completedAt: null,
      
      startQuiz: () => {
        set({
          status: 'in_progress',
          currentQuestionIndex: 0,
          answers: {},
          result: null,
          startedAt: Date.now(),
          completedAt: null
        });
      },
      
      answerQuestion: (questionId, optionId) => {
        set(state => ({
          answers: { ...state.answers, [questionId]: optionId }
        }));
      },
      
      goToNextQuestion: () => {
        set(state => ({
          currentQuestionIndex: state.currentQuestionIndex + 1
        }));
      },
      
      goToPreviousQuestion: () => {
        set(state => ({
          currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1)
        }));
      },
      
      completeQuiz: () => {
        const { answers } = get();
        const scores = calculateScores(answers);
        const { primaryId, primaryScore, secondaryId } = getPrimaryPersonality(scores);
        const allScores = Object.entries(scores).map(([id, score]) => ({ id: id as PersonalityId, score }));
        
        set({
          status: 'completed',
          result: primaryId,
          completedAt: Date.now()
        });
        
        return { primaryId, primaryScore, secondaryId, allScores };
      },
      
      resetQuiz: () => {
        set({
          status: 'start',
          currentQuestionIndex: 0,
          answers: {},
          result: null,
          startedAt: null,
          completedAt: null
        });
      }
    }),
    {
      name: 'quiz-storage',
      partialize: (state) => ({ 
        answers: state.answers, 
        currentQuestionIndex: state.currentQuestionIndex,
        status: state.status
      })
    }
  )
);