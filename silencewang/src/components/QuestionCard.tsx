import type { QuizQuestion } from '../types/quiz';
import './QuestionCard.css';

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswer: (value: number) => void;
  disabled?: boolean;
}

export default function QuestionCard({
  question,
  onAnswer,
  disabled = false,
}: QuestionCardProps) {
  return (
    <div className="question-card">
      <h2 className="question-text">{question.text}</h2>
      <div className="options-grid">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => onAnswer(option.value)}
            disabled={disabled}
          >
            <span className="option-text">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
