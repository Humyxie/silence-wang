import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../store/quizStore';
import './StartPage.css';

export default function StartPage() {
  const navigate = useNavigate();
  const startQuiz = useQuizStore(state => state.startQuiz);
  
  const handleStart = () => {
    startQuiz();
    navigate('/quiz');
  };
  
  return (
    <div className="start-page">
      <div className="start-container">
        <div className="start-card">
          <div className="start-icon">🎵</div>
          <h1 className="start-title">泷式MBTI测试</h1>
          <p className="start-subtitle">发现属于你的汪苏泷音乐人格</p>
          <p className="start-description">
            通过16道趣味题目，我们会为你推荐一首最匹配你性格的汪苏泷歌曲。
            每个人的音乐品味都独一无二，你的测试结果也是如此！
          </p>
          <button className="start-button" onClick={handleStart}>
            开始测试
          </button>
          <p className="start-tip">💡 诚实作答，会获得最准确的结果哦</p>
        </div>
      </div>
    </div>
  );
}