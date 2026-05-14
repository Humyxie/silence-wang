import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import Quiz from './pages/Quiz';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result/:resultId" element={<ResultPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;