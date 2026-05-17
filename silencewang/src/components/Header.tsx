import './Header.css';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return '';
      case '/quiz':
        return '测试中...';
      case '/result':
        return '测试结果';
      // default:
      //   return '汪苏泷音乐人格测试';
    }
  };

  return (
    <header className="global-header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          🎵 汪苏泷音乐人格测试
        </Link>
        <div className="header-title">
          {getTitle()}
          <Link to="/" className="home-link">
            首页
          </Link>
          <Link to="/about" className="about-link">
            关于
          </Link>
        </div>
      </div>
    </header>
  );
}
