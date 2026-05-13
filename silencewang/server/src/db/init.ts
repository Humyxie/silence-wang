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

const initDatabase = () => {
  db.serialize(() => {
    // 创建歌曲表
    db.run(`
      CREATE TABLE IF NOT EXISTS songs (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        album TEXT,
        year INTEGER,
        e_profile INTEGER,
        s_profile INTEGER,
        f_profile INTEGER,
        j_profile INTEGER,
        description TEXT,
        lyrics_key TEXT
      )
    `, (err) => {
      if (err) console.error('Error creating songs table:', err);
      else console.log('Songs table ready');
    });

    // 创建测试结果表
    db.run(`
      CREATE TABLE IF NOT EXISTS test_results (
        id TEXT PRIMARY KEY,
        e_score INTEGER,
        s_score INTEGER,
        f_score INTEGER,
        j_score INTEGER,
        matched_song_id INTEGER,
        distance REAL,
        user_answers TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        short_id TEXT UNIQUE,
        FOREIGN KEY (matched_song_id) REFERENCES songs(id)
      )
    `, (err) => {
      if (err) console.error('Error creating test_results table:', err);
      else console.log('Test results table ready');
    });

    // 插入歌曲数据
    const stmt = db.prepare(`
      INSERT OR REPLACE INTO songs
      (id, name, album, year, e_profile, s_profile, f_profile, j_profile, description, lyrics_key)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    songsData.forEach((song: any) => {
      stmt.run(
        song.id,
        song.name,
        song.album,
        song.year,
        song.mbti_profile.E,
        song.mbti_profile.S,
        song.mbti_profile.F,
        song.mbti_profile.J,
        song.description,
        song.lyrics_key
      );
    });

    stmt.finalize((err) => {
      if (err) console.error('Error inserting songs:', err);
      else console.log(`Inserted ${songsData.length} songs into database`);
      db.close();
      process.exit(0);
    });
  });
};

initDatabase();
