import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="Header">
      {/* 왼쪽: 뒤로가기 */}
      <div className="Header-left" onClick={() => navigate(-1)}>
        <img src="/before.png" alt="뒤로가기" className="Header-icon" />
      </div>

      {/* 중앙: 로고 + 타이틀 */}
      <div
        className="Header-center"
        onClick={() => navigate('/select-job')}
        style={{ cursor: 'pointer' }}
      >
        <img src="/logo.png" alt="로고" className="Header-logo" />
        <span className="Header-title">진로레시피</span>
      </div>

      {/* 오른쪽: 마이페이지 */}
      <div className="Header-right" onClick={() => navigate('/mypage')}>
        <img src="/myPage.png" alt="마이페이지" className="Header-icon" />
      </div>
    </div>
  );
}

export default Header;
