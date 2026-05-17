import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../store/quizStore';
import { questions } from '../data/quizQuestions';
import { submitTestResult } from '../services/api';
import './Quiz.css';

export default function QuizPage() {
  const navigate = useNavigate();
  const {
    status,
    currentQuestionIndex,
    answers,
    answerQuestion,
    goToNextQuestion,
    goToPreviousQuestion,
    completeQuiz
  } = useQuizStore();

  // 如果不在答题状态，重定向到首页
  useEffect(() => {
    if (status !== 'in_progress') {
      navigate('/');
    }
  }, []);

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion.id];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = async (optionId: 'A' | 'B' | 'C' | 'D') => {
    answerQuestion(currentQuestion.id, optionId);

    if (isLastQuestion) {
      // 完成测试，提交结果
      const { primaryId, primaryScore, secondaryId, allScores } = completeQuiz();

      try {
        const result = await submitTestResult(primaryId, secondaryId, primaryScore, allScores);
        navigate(`/result/${result.resultId}`);
      } catch (error) {
        console.error('提交失败:', error);
        // 即使提交失败，也跳转到结果页（使用本地数据）
        navigate(`/result?local=true`);
      }
    } else {
      goToNextQuestion();
    }
  };

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        {/* 进度条区域 */}
        <div className="progress-section">
          <div className="progress-bar-wrapper">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="progress-text">
            第 {currentQuestionIndex + 1} / {questions.length} 题
          </div>
        </div>

        {/* 问题卡片 */}
        <div className="question-card">
          <h2 className="question-text">
            {currentQuestion.text}
          </h2>

          <div className="options-grid">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(option.id)}
                className={`option-button ${currentAnswer === option.id ? 'selected' : ''}`}
                disabled={false}
              >
                <span className="option-label">{option.id}.</span>
                <span className="option-text">{option.text}</span>
              </button>
            ))}
          </div>

          {/* 上一题按钮 */}
          {currentQuestionIndex > 0 && (
            <div className="navigation-section">
              <button
                onClick={goToPreviousQuestion}
                className="prev-button"
              >
                ← 上一题
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}