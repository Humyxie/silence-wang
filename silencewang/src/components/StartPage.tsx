import { useNavigate } from 'react-router-dom';
import './Quiz.css';

export default function StartPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    <div className="quiz-container start">
      <div className="start-content">
        <h1>🎵 泷式MBTI测试 🎵</h1>
        <p className="subtitle">发现属于你的汪苏泷音乐人格</p>
        <p className="description">
          通过20道趣味题目，我们会为你推荐一首最匹配你性格的汪苏泷歌曲。
          每个人的音乐品味都独一无二，你的测试结果也是如此！
        </p>
        <button className="start-button" onClick={handleStart}>
          开始测试
        </button>
        <p className="tip">💡 诚实作答，会获得最准确的结果哦</p>
      </div>
    </div>
  );
}