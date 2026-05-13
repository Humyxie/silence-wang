import express, { Request, Response } from 'express';
import sqlite3 from 'sqlite3';
import { calculateMBTI, findMatchedSong, UserAnswers, MBTIScore } from '../services/mbtiService.js';
import { generateShortId, generateFullId } from '../utils/shortId.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, '../../db/quiz.db');

const router = express.Router();
let db: sqlite3.Database;

// 初始化数据库连接
const initDb = () => {
  db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error('Database connection error:', err);
  });
};

initDb();

// 获取所有歌曲
router.get('/songs', (req: Request, res: Response) => {
  db.all('SELECT * FROM songs', (err: any, rows: any) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
      return;
    }
    res.json(rows);
  });
});

// 提交答题
router.post('/submit', (req: Request, res: Response) => {
  const { answers } = req.body;

  if (!answers || !answers.e || !answers.s || !answers.f || !answers.j) {
    res.status(400).json({ error: 'Invalid answers' });
    return;
  }

  try {
    // 计算MBTI
    const mbtiResult = calculateMBTI(answers as UserAnswers);

    // 获取所有歌曲
    db.all('SELECT * FROM songs', (err: any, songs: any) => {
      if (err) {
        res.status(500).json({ error: 'Database error' });
        return;
      }

      // 找到最匹配的歌曲
      const matchedSong = findMatchedSong(mbtiResult.scores, songs);

      // 生成短链接ID
      const fullId = generateFullId();
      const shortId = generateShortId();

      // 保存到数据库
      const stmt = db.prepare(`
        INSERT INTO test_results
        (id, e_score, s_score, f_score, j_score, matched_song_id, distance, user_answers, short_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      stmt.run(
        fullId,
        mbtiResult.scores.E,
        mbtiResult.scores.S,
        mbtiResult.scores.F,
        mbtiResult.scores.J,
        matchedSong.id,
        matchedSong.distance,
        JSON.stringify(answers),
        shortId
      );

      stmt.finalize();

      res.json({
        mbti_type: mbtiResult.type,
        scores: mbtiResult.scores,
        matched_song: {
          id: matchedSong.id,
          name: matchedSong.name,
          album: matchedSong.album,
          year: matchedSong.year,
          description: matchedSong.description,
          lyrics_key: matchedSong.lyrics_key,
          distance: Math.round(matchedSong.distance * 100) / 100
        },
        short_id: shortId,
        full_id: fullId
      });
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// 获取分享的结果
router.get('/result/:shortId', (req: Request, res: Response) => {
  const { shortId } = req.params;

  db.get(
    `SELECT tr.*, s.name, s.album, s.year, s.description, s.lyrics_key
     FROM test_results tr
     JOIN songs s ON tr.matched_song_id = s.id
     WHERE tr.short_id = ?`,
    [shortId],
    (err: any, row: any) => {
      if (err) {
        res.status(500).json({ error: 'Database error' });
        return;
      }

      if (!row) {
        res.status(404).json({ error: 'Result not found' });
        return;
      }

      res.json({
        mbti_type: (row.e_score >= 50 ? 'E' : 'I') +
          (row.s_score >= 50 ? 'S' : 'N') +
            (row.f_score >= 50 ? 'F' : 'T') +
              (row.j_score >= 50 ? 'J' : 'P'),
        scores: {
          E: row.e_score,
          S: row.s_score,
          F: row.f_score,
          J: row.j_score
        },
        matched_song: {
          id: row.matched_song_id,
          name: row.name,
          album: row.album,
          year: row.year,
          description: row.description,
          lyrics_key: row.lyrics_key,
          distance: row.distance
        }
      });
    }
  );
});

export default router;
