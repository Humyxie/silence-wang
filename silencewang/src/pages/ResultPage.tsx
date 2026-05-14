import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { getSharedResult } from '../services/api';
import { personalities } from '../data/personalities';
import type { PersonalityId } from '../types/personality';
import { useQuizStore } from '../store/quizStore';
import html2canvas from 'html2canvas';
import './ResultPage.css';

export default function ResultPage() {
  const { resultId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const resetQuiz = useQuizStore(state => state.resetQuiz);

  // 添加 ref 用于保存图片的容器
  const resultCardRef = useRef<HTMLDivElement>(null);

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false); // 截图状态

  useEffect(() => {
    const loadResult = async () => {
      // 检查是否是本地结果（提交失败的情况）
      const isLocal = searchParams.get('local') === 'true';

      if (isLocal) {
        // 从 store 获取本地结果
        const storeResult = localStorage.getItem('quiz-storage');
        if (storeResult) {
          try {
            const parsed = JSON.parse(storeResult);
            const answers = parsed.state.answers;
            if (answers && Object.keys(answers).length > 0) {
              // 这里简化处理，实际应该重新计算
              setResult({ primaryPersonality: parsed.state.result });
            }
          } catch (e) {
            console.error(e);
          }
        }
        setLoading(false);
        return;
      }

      if (!resultId) {
        navigate('/');
        return;
      }

      try {
        const response = await getSharedResult(resultId);
        if (response.success && response.data) {
          setResult(response.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('加载结果失败:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadResult();
  }, [resultId, searchParams, navigate]);

  const handleRestart = () => {
    resetQuiz();
    navigate('/');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          alert('链接已复制，快去分享吧！');
        })
        .catch(err => {
          console.error('复制链接失败:', err);
          alert('复制链接失败，请手动复制地址栏链接');
        });
    } else {
      alert('当前浏览器不支持自动复制，请手动复制地址栏链接');
    }
  };

  // 保存为图片
  const handleSaveAsImage = async () => {
  if (!resultCardRef.current) return;
  
  setIsCapturing(true);
  
  try {
    const element = resultCardRef.current;
    
    // 添加 capturing 类
    element.classList.add('capturing');

    // 设置一个固定的背景色，避免透明背景导致颜色问题
    const originalBg = element.style.backgroundColor;
    element.style.backgroundColor = '#ffffff';
    
    // 等待样式应用
    await new Promise(resolve => setTimeout(resolve, 150));
    
    const canvas = await html2canvas(element, {
      scale: 2.5,
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true, // 如果有跨域图片资源
      allowTaint: false,
      imageTimeOut: 0,
      onclone: (clonedDoc, element) => {
        // 确保克隆文档也有 capturing 类
        const clonedCard = clonedDoc.querySelector('.result-card');
        if (clonedCard) {
          clonedCard.classList.add('capturing');
          (clonedCard as HTMLElement).style.backgroundColor = '#ffffff';
        }
      }
    });
    
    // 恢复原始样式
    element.classList.remove('capturing');
    element.style.backgroundColor = originalBg;
    
    // 下载图片
    const link = document.createElement('a');
    const personalityName = personality?.name || '测试结果';
    link.download = `汪苏泷人格测试-${personalityName}.png`;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
    
  } catch (error) {
    console.error('截图失败:', error);
    alert('保存图片失败，请重试');
    // 确保恢复样式
    if (resultCardRef.current) {
      resultCardRef.current.classList.remove('capturing');
      resultCardRef.current.style.backgroundColor = '';
    }
  } finally {
    setIsCapturing(false);
  }
};

  if (loading) {
    return (
      <div className="result-page">
        <div className="result-container">
          <div className="result-card">
            <div className="loading-spinner"></div>
            <p className="loading-text">加载中...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !result) {
    return (
      <div className="result-page">
        <div className="result-container">
          <div className="result-card">
            <div className="error-icon">😢</div>
            <h2 className="error-title">结果不存在</h2>
            <p className="error-message">该分享链接可能已失效</p>
            <button className="restart-button" onClick={handleRestart}>
              重新测试
            </button>
          </div>
        </div>
      </div>
    );
  }

  const personality = personalities[result.primaryPersonality as PersonalityId];

  if (!personality) {
    return (
      <div className="result-page">
        <div className="result-container">
          <div className="result-card">
            <p>人格数据不存在</p>
            <button className="restart-button" onClick={handleRestart}>
              返回首页
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="result-page">
      <div className="result-container">
        {/* 用于截图的内容区域 */}
        <div ref={resultCardRef} className="result-card">
          {/* 头部颜色区域 */}
          <div
            className="result-header"
            style={{ backgroundColor: personality.colorScheme.primary }}
          />

          <div className="result-content">
            {/* 添加一个标识，表明这是汪苏泷测试 */}
            <div className="result-badge">
              <span className="badge-icon">🎵</span>
              <span className="badge-text">汪苏泷·音乐人格测试</span>
            </div>

            {/* 人格名称 */}
            <h1 className="personality-name">
              {personality.name}
            </h1>
            <p className="personality-tagline">
              {personality.tagline}
            </p>

            {/* 描述 */}
            <p className="personality-description">
              {personality.description}
            </p>

            {/* 特质标签 */}
            <div className="traits-container">
              {personality.traits.map((trait, idx) => (
                <span key={idx} className="trait-tag">
                  #{trait}
                </span>
              ))}
            </div>

            {/* 推荐歌曲 */}
            <div className="song-card">
              <p className="song-label">🎵 推荐给你的汪苏泷歌曲</p>
              <a 
                href={personality.song.link}
                target="_blank"
                rel="noopener noreferrer"
                className="song-name-display"
              >
                《{personality.song.name}》
              </a>
              {personality.song.lyric && (
                <p className="song-lyric">
                  "{personality.song.lyric}"
                </p>
              )}
              <p className="song-artist">
                {personality.song.artist}
              </p>
            </div>

            {/* 截图底部水印 */}
            <div className="capture-footer">
              <p>测测你的汪苏泷音乐人格 → sulong-test.com</p>
            </div>
          </div>
        </div>

        {/* 按钮组（不会被截图） */}
        <div className="button-group">
          <button className="share-button" onClick={handleShare}>
            📤 分享链接
          </button>
          <button
            className="save-image-button"
            onClick={handleSaveAsImage}
            disabled={isCapturing}
          >
            {isCapturing ? '📸 生成中...' : '📸 保存为图片'}
          </button>
          <button className="restart-button" onClick={handleRestart}>
            重新测试
          </button>
        </div>

        <p className="footer-note">
          本测试为粉丝娱乐向，结果仅供参考，别太当真
        </p>
      </div>
    </div>
  );
}