import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { songsData } from '../data/songs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, '../../db/quiz.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
  console.log('Connected to SQLite database');
});

// 初始化表结构
export function initDatabase(): Promise<void> {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // 测试结果表
      db.run(`
        CREATE TABLE IF NOT EXISTS test_results (
          id TEXT PRIMARY KEY,
          primary_personality TEXT NOT NULL,
          secondary_personality TEXT,
          primary_score INTEGER NOT NULL,
          all_scores TEXT NOT NULL,
          dimension_scores TEXT,
          version TEXT DEFAULT '1.0.0',
          user_agent TEXT,
          referer TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `, (err) => {
        if (err) reject(err);
      });

      // 索引
      db.run(`CREATE INDEX IF NOT EXISTS idx_primary_personality ON test_results(primary_personality)`);
      db.run(`CREATE INDEX IF NOT EXISTS idx_created_at ON test_results(created_at)`);

      // 人格统计表
      db.run(`
        CREATE TABLE IF NOT EXISTS personality_stats (
          personality_id TEXT PRIMARY KEY,
          count INTEGER DEFAULT 0,
          last_updated DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `, (err) => {
        if (err) reject(err);
        else {
          console.log('✅ 数据库初始化完成');
          resolve();
        }
      });
    });
  });
}

export default db;