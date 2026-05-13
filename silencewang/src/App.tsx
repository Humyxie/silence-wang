import { Routes, Route } from 'react-router-dom'
import Quiz from './components/Quiz'
import ResultPage from './components/ResultPage'
import './App.css'
import StartPage from './components/StartPage'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* 首页：测评页面 */}
        <Route path="/" element={<StartPage />} />

        {/* 测评页 */}
        <Route path="/quiz" element={<Quiz />} />

        {/* 结果页：通过路径参数传递 resultId */}
        <Route path="/result" element={<ResultPage />} />

        {/* 404 兜底 */}
        <Route path="*" element={<div>页面不存在</div>} />
      </Routes>
    </>
  )
}

export default App
