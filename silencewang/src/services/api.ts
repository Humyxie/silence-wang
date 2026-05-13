import type { UserAnswers, QuizResult } from '../types/quiz';

const API_BASE = 'http://localhost:3001/api';

export const submitQuiz = async (answers: UserAnswers): Promise<QuizResult> => {
  const response = await fetch(`${API_BASE}/quiz/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ answers }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit quiz');
  }

  return response.json();
};

export const getResult = async (shortId: string): Promise<QuizResult> => {
  const response = await fetch(`${API_BASE}/quiz/result/${shortId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch result');
  }

  return response.json();
};

export const getSongs = async () => {
  const response = await fetch(`${API_BASE}/quiz/songs`);

  if (!response.ok) {
    throw new Error('Failed to fetch songs');
  }

  return response.json();
};
