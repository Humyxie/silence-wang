import db from './init.js';
import { v4 as uuidv4 } from 'uuid';

export interface SaveResultParams {
  primaryPersonality: string;
  secondaryPersonality: string | null;
  primaryScore: number;
  allScores: Array<{ id: string; score: number }>;
  dimensionScores?: Record<string, number>;
  version?: string;
  userAgent?: string;
  referer?: string;
}

export interface SaveResultReturn {
  id: string;
  shareUrl: string;
}

// 保存测试结果
export function saveTestResult(params: SaveResultParams): Promise<SaveResultReturn> {
  return new Promise((resolve, reject) => {
    const id = uuidv4();
    const baseUrl = process.env.BASE_URL || 'http://localhost:5173';
    const shareUrl = `${baseUrl}/result/${id}`;

    const stmt = db.prepare(`
      INSERT INTO test_results (
        id, primary_personality, secondary_personality, primary_score,
        all_scores, dimension_scores, version, user_agent, referer
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      id,
      params.primaryPersonality,
      params.secondaryPersonality,
      params.primaryScore,
      JSON.stringify(params.allScores),
      params.dimensionScores ? JSON.stringify(params.dimensionScores) : null,
      params.version || '1.0.0',
      params.userAgent || null,
      params.referer || null,
      function(err) {
        if (err) {
          reject(err);
        } else {
          // 更新统计（异步，不阻塞主流程）
          updatePersonalityStats(params.primaryPersonality).catch(console.error);
          resolve({ id, shareUrl });
        }
      }
    );
  });
}

// 获取测试结果
export function getTestResult(id: string): Promise<any> {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT 
        id, primary_personality, secondary_personality, primary_score,
        all_scores, dimension_scores, created_at
      FROM test_results 
      WHERE id = ?`,
      [id],
      (err, row: any) => {
        if (err) {
          reject(err);
        } else if (!row) {
          resolve(null);
        } else {
          resolve({
            id: row.id,
            primaryPersonality: row.primary_personality,
            secondaryPersonality: row.secondary_personality,
            primaryScore: row.primary_score,
            allScores: JSON.parse(row.all_scores),
            dimensionScores: row.dimension_scores ? JSON.parse(row.dimension_scores) : null,
            createdAt: row.created_at
          });
        }
      }
    );
  });
}

// 更新人格统计
async function updatePersonalityStats(personalityId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO personality_stats (personality_id, count) 
       VALUES (?, 1)
       ON CONFLICT(personality_id) DO UPDATE SET 
         count = count + 1,
         last_updated = CURRENT_TIMESTAMP`,
      [personalityId],
      (err) => {
        if (err) {
          console.error('更新统计失败:', err);
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
}

// 获取统计信息
export function getStats(): Promise<any> {
  return new Promise((resolve, reject) => {
    const result: any = {};
    
    // 总测试数
    db.get('SELECT COUNT(*) as total FROM test_results', (err, row: any) => {
      if (err) {
        reject(err);
        return;
      }
      result.totalTests = row.total;
      
      // 各人格分布（TOP 10）
      db.all(
        `SELECT personality_id, count 
         FROM personality_stats 
         ORDER BY count DESC 
         LIMIT 10`,
        (err, rows: any[]) => {
          if (err) {
            reject(err);
            return;
          }
          result.topPersonalities = rows;
          
          // 最近7天趋势
          db.all(
            `SELECT DATE(created_at) as date, COUNT(*) as count
             FROM test_results
             WHERE created_at >= DATE('now', '-7 days')
             GROUP BY DATE(created_at)
             ORDER BY date ASC`,
            (err, rows: any[]) => {
              if (err) {
                reject(err);
                return;
              }
              result.recentTrend = rows;
              resolve(result);
            }
          );
        }
      );
    });
  });
}