import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import type { QuizResult } from '../types/quiz';
import { getResult } from '../services/api';
import ResultDisplay from './ResultDisplay.tsx';

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const [result, setResult] = useState<QuizResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadResult = async () => {
      // 优先从 state 获取
      if (location.state?.result) {
        setResult(location.state.result);
        setLoading(false);
        return;
      }
      
      // 否则从 URL 参数获取 resultId
      const resultId = searchParams.get('id');
      if (resultId) {
        try {
          const fetchedResult = await getResult(resultId);
          setResult(fetchedResult);
        } catch (error) {
          console.error('加载结果失败:', error);
          navigate('/');
        }
      } else {
        // 没有任何结果数据，回首页
        navigate('/');
      }
      setLoading(false);
    };

    loadResult();
  }, [location.state, searchParams, navigate]);

  const handleRestart = () => {
    navigate('/');
  };

  if (loading) {
    return <div className="loading">加载中...</div>;
  }

  if (!result) {
    return null;
  }

  return <ResultDisplay result={result} onRestart={handleRestart} />;
}