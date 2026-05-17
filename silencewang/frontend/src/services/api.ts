import type { PersonalityId } from '../types/personality';
import type { SubmitResultRequest, SubmitResultResponse, GetResultResponse } from '../types/result';

// 动态获取 API 基础路径
const getApiBaseUrl = () => {
  // 生产环境（Vercel 部署）
  if (import.meta.env.PROD) {
    // 从环境变量获取 Render 后端地址
    const backendUrl = import.meta.env.VITE_API_URL;
    if (!backendUrl) {
      console.warn('VITE_API_URL is not set, using relative path');
      return '/api';
    }
    return `${backendUrl}/api`;
  }
  
  // 开发环境（本地）
  return '/api';
};

const API_BASE = getApiBaseUrl();

// 提交测试结果
export async function submitTestResult(
  primaryPersonality: PersonalityId,
  secondaryPersonality: PersonalityId | null,
  primaryScore: number,
  allScores: Array<{ id: PersonalityId; score: number }>
): Promise<SubmitResultResponse> {
  const requestBody: SubmitResultRequest = {
    primaryPersonality,
    secondaryPersonality,
    primaryScore,
    allScores,
    version: '1.0.0'
  };

  const response = await fetch(`${API_BASE}/results`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    throw new Error('提交失败');
  }

  return response.json();
}

// 获取分享的结果
export async function getSharedResult(resultId: string): Promise<GetResultResponse> {
  const response = await fetch(`${API_BASE}/results/${resultId}`);
  
  if (!response.ok) {
    throw new Error('获取结果失败');
  }
  
  return response.json();
}

// 获取统计信息
export async function getStats() {
  const response = await fetch(`${API_BASE}/stats`);
  
  if (!response.ok) {
    throw new Error('获取统计失败');
  }
  
  return response.json();
}