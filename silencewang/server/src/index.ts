// import express from 'express';
// import cors from 'cors';
// import quizRouter from './routes/quiz.js';

// const app = express();
// const PORT = process.env.PORT || 3001;

// // 中间件
// app.use(cors());
// app.use(express.json());

// // 路由
// app.use('/api/quiz', quizRouter);

// // 健康检查
// app.get('/api/health', (req, res) => {
//   res.json({ status: 'ok' });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from 'express';
import cors from 'cors';
import { initDatabase } from './db/init.js';
import router from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(cors(
  {origin: [
    'http://localhost:5173',
    'https://silence-wang.vercel.app',
],
  credentials: true}
));
app.use(express.json({ limit: '10mb' }));

// 请求日志
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// API 路由
app.use('/api', router);

// 启动服务
async function start() {
  await initDatabase();
  app.listen(PORT, () => {
    console.log(`🚀 后端服务已启动: http://localhost:${PORT}`);
    console.log(`📊 API 端点:`);
    console.log(`   POST /api/results - 保存测试结果`);
    console.log(`   GET  /api/results/:id - 获取测试结果`);
    console.log(`   GET  /api/stats - 获取统计信息`);
    console.log(`   GET  /api/health - 健康检查`);
  });
}

start();