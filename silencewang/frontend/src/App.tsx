import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import StartPage from './pages/StartPage';
import Quiz from './pages/Quiz';
import ResultPage from './pages/ResultPage';
import About from './pages/About';

const getBasename = () => {
  const pathname = window.location.pathname;
  // 假设部署在 /sulong-test/ 下，提取第一段路径
  const match = pathname.match(/^\/[^\/]+/);
  return match ? match[0] : '/';
};

function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<StartPage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result/:resultId" element={<ResultPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;