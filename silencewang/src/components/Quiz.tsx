import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizQuestions } from '../data/quizQuestions';
import type { UserAnswers, QuizResult } from '../types/quiz';
import { submitQuiz } from '../services/api';
import QuestionCard from './QuestionCard.tsx';
import './Quiz.css';

interface QuizProps {
  onComplete?: (result: QuizResult) => void;
}

export default function Quiz({ onComplete }: QuizProps) {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({
    e: [],
    s: [],
    f: [],
    j: [],
  });
  const [loading, setLoading] = useState(false);

  const handleAnswer = async (value: number) => {
    const question = quizQuestions[currentQuestion];
    const newAnswers = { ...answers };
    const dimensionKey = question.dimension.toLowerCase() as keyof UserAnswers;

    newAnswers[dimensionKey] = [...answers[dimensionKey], value];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      await handleSubmit(newAnswers);
    }
  };

  const handleSubmit = async (finalAnswers: UserAnswers) => {
    setLoading(true);
    try {
      const quizResult = await submitQuiz(finalAnswers);

      const resultId = quizResult.short_id; // 假设后端返回的结果包含一个唯一 ID
      
      // 方式1：通过 state 传递结果（不暴露在 URL）
      navigate(`/result?id=${resultId}`, { state: { result: quizResult } });
      
      // 方式2：如果 onComplete 回调存在，也调用它
      if (onComplete) {
        onComplete(quizResult);
      }
    } catch (error) {
      console.error('Failed to submit quiz:', error);
      alert('提交失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quiz-container quiz">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
          }}
        />
      </div>
      <div className="progress-text">
        第 {currentQuestion + 1} / {quizQuestions.length} 题
      </div>

      <QuestionCard
        question={quizQuestions[currentQuestion]}
        onAnswer={handleAnswer}
        disabled={loading}
      />
      
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner">分析中...</div>
        </div>
      )}
    </div>
  );
}