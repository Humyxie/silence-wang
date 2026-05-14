import express from 'express';
import { saveTestResult, getTestResult, getStats } from '../db/operations.js';

const router = express.Router();

// 保存测试结果
router.post('/results', async (req, res) => {
  try {
    const {
      primaryPersonality,
      secondaryPersonality,
      primaryScore,
      allScores,
      dimensionScores,
      version
    } = req.body;
    
    // 验证必填字段
    if (!primaryPersonality || primaryScore === undefined || !allScores) {
      return res.status(400).json({
        success: false,
        error: '缺少必填字段'
      });
    }
    
    const result = await saveTestResult({
      primaryPersonality,
      secondaryPersonality: secondaryPersonality || null,
      primaryScore,
      allScores,
      dimensionScores,
      version,
      userAgent: req.headers['user-agent'],
      referer: req.headers['referer']
    });
    
    res.json({
      success: true,
      resultId: result.id,
      shareUrl: result.shareUrl
    });
  } catch (error) {
    console.error('保存结果失败:', error);
    res.status(500).json({
      success: false,
      error: '服务器内部错误'
    });
  }
});

// 获取测试结果
router.get('/results/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getTestResult(id);
    
    if (!result) {
      return res.status(404).json({
        success: false,
        error: '结果不存在'
      });
    }
    
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('获取结果失败:', error);
    res.status(500).json({
      success: false,
      error: '服务器内部错误'
    });
  }
});

// 获取统计信息
router.get('/stats', async (req, res) => {
  try {
    const stats = await getStats();
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('获取统计失败:', error);
    res.status(500).json({
      success: false,
      error: '服务器内部错误'
    });
  }
});

// 健康检查
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default router;