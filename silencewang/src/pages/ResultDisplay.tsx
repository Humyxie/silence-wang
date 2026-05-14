import type { QuizResult } from '../types/quiz.ts';
import ShareButton from './ShareButton.tsx';
import './ResultDisplay.css';

interface ResultDisplayProps {
  result: QuizResult;
  onRestart: () => void;
}

export default function ResultDisplay({ result, onRestart }: ResultDisplayProps) {
  const getMBTIDescription = (type: string): string => {
    const descriptions: { [key: string]: string } = {
      ENFP: '热血梦想家 - 充满热情和想象力，追逐梦想是你的人生主旋律',
      ENTP: '聪慧挑战者 - 善于辩论和创新，总是想着改变和突破',
      ENFJ: '温暖领导者 - 关怀他人，用温暖和正能量影响周围的人',
      ENTJ: '坚定掌舵人 - 意志坚定，目标明确，是天生的领导者',
      INFP: '内省诗人 - 内心深邃，感受丰富，用感性看待世界',
      INTP: '思想探索者 - 热爱思考和分析，追求知识的真谛',
      INFJ: '神秘预见者 - 深情专注，对人生有独特的理解和洞察',
      INTJ: '独立大师 - 冷静理性，追求独立和自我完善',
      ESFP: '热情表演者 - 活力四射，享受当下的每一刻',
      ESTP: '行动冒险家 - 大胆行动，喜欢刺激和新鲜感',
      ESFJ: '关怀照顾者 - 热心肠，总是优先考虑他人的感受',
      ESTJ: '实干组织者 - 踏实可靠，讲求效率和秩序',
      ISFP: '温柔美学者 - 温柔内敛，欣赏生活中的美好细节',
      ISTP: '理性工匠 - 聪慧冷静，用逻辑解决问题',
      ISFJ: '忠诚卫士 - 温暖忠诚，是可靠的朋友和伙伴',
      ISTJ: '传统守护者 - 稳重可靠，用责任心守护自己的世界',
    };
    return descriptions[type] || '';
  };

  return (
    <div className="result-display">
      <div className="result-content">
        <h1 className="result-title">你的MBTI类型是</h1>
        <div className="mbti-type">{result.mbti_type}</div>
        <p className="mbti-description">{getMBTIDescription(result.mbti_type)}</p>

        <div className="scores-section">
          <h3>你的维度特性</h3>
          <div className="scores-grid">
            <div className="score-item">
              <div className="score-label">
                {result.scores.E > 50 ? '外向 (E)' : '内向 (I)'}
              </div>
              <div className="score-bar">
                <div
                  className="score-fill"
                  style={{
                    width: `${Math.max(result.scores.E, result.scores.E > 50 ? 50 : 50)}%`,
                    backgroundColor: result.scores.E > 50 ? '#FF6B6B' : '#4ECDC4',
                  }}
                />
              </div>
              <div className="score-value">
                {result.scores.E > 50 ? `E ${result.scores.E}%` : `I ${100 - result.scores.E}%`}
              </div>
            </div>

            <div className="score-item">
              <div className="score-label">
                {result.scores.S > 50 ? '感官 (S)' : '直觉 (N)'}
              </div>
              <div className="score-bar">
                <div
                  className="score-fill"
                  style={{
                    width: `${Math.max(result.scores.S, result.scores.S > 50 ? 50 : 50)}%`,
                    backgroundColor: result.scores.S > 50 ? '#FFD93D' : '#6BCB77',
                  }}
                />
              </div>
              <div className="score-value">
                {result.scores.S > 50 ? `S ${result.scores.S}%` : `N ${100 - result.scores.S}%`}
              </div>
            </div>

            <div className="score-item">
              <div className="score-label">
                {result.scores.F > 50 ? '情感 (F)' : '思考 (T)'}
              </div>
              <div className="score-bar">
                <div
                  className="score-fill"
                  style={{
                    width: `${Math.max(result.scores.F, result.scores.F > 50 ? 50 : 50)}%`,
                    backgroundColor: result.scores.F > 50 ? '#FF85B3' : '#4D96FF',
                  }}
                />
              </div>
              <div className="score-value">
                {result.scores.F > 50 ? `F ${result.scores.F}%` : `T ${100 - result.scores.F}%`}
              </div>
            </div>

            <div className="score-item">
              <div className="score-label">
                {result.scores.J > 50 ? '判断 (J)' : '知觉 (P)'}
              </div>
              <div className="score-bar">
                <div
                  className="score-fill"
                  style={{
                    width: `${Math.max(result.scores.J, result.scores.J > 50 ? 50 : 50)}%`,
                    backgroundColor: result.scores.J > 50 ? '#B39DDB' : '#FFA07A',
                  }}
                />
              </div>
              <div className="score-value">
                {result.scores.J > 50 ? `J ${result.scores.J}%` : `P ${100 - result.scores.J}%`}
              </div>
            </div>
          </div>
        </div>

        <div className="song-section">
          <h3>为你推荐的歌曲</h3>
          <div className="song-card">
            <div className="song-header">
              <h2 className="song-name">{result.matched_song.name}</h2>
              <p className="song-album">{result.matched_song.album}</p>
            </div>
            <p className="song-description">{result.matched_song.description}</p>
            <div className="song-keywords">
              {result.matched_song.lyrics_key.split('、').map((keyword, idx) => (
                <span key={idx} className="keyword">
                  {keyword}
                </span>
              ))}
            </div>
            <div className="song-year">{result.matched_song.year}</div>
          </div>
        </div>

        <div className="action-buttons">
          <ShareButton shortId={result.short_id} />
          <button className="restart-button" onClick={onRestart}>
            再测一次
          </button>
        </div>
      </div>
    </div>
  );
}
