import React from 'react';
import { useNavigate } from 'react-router-dom'; // 추가
import '../pages-css/MyPage.css';

function MyPage() {
  const navigate = useNavigate();

  // 카카오 로그인 정보 불러오기
  const kakaoProfile = JSON.parse(localStorage.getItem('kakaoProfile')) || {
    nickname: '로그인 필요',
    profile_image: '/img/default-profile.png',
  };

  // 즐겨찾기 과목 불러오기
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  // 로그아웃 처리
  const handleLogout = async () => {
    try {
      if (
        window.Kakao &&
        window.Kakao.Auth &&
        window.Kakao.Auth.getAccessToken()
      ) {
        // 1. 사용자 연결 해제 (자동 로그인 방지 핵심)
        await window.Kakao.API.request({
          url: '/v1/user/unlink',
        });
        console.log('🔌 카카오 사용자 연결 해제 완료');

        // 2. 로그아웃 처리
        await window.Kakao.Auth.logout();
        console.log('🔓 카카오 로그아웃 완료');
      }

      // 3. 로컬 캐시 및 세션 제거
      localStorage.clear();
      sessionStorage.clear();
      document.cookie =
        'authorize-access-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

      // 4. 홈으로 이동
      navigate('/');
    } catch (err) {
      console.error('❌ 로그아웃 중 오류 발생:', err);
      // 그래도 캐시 제거 및 이동
      localStorage.clear();
      sessionStorage.clear();
      navigate('/');
    }
  };

  return (
    <div className="MyPage">
      <div className="ProfileCard">
        <img
          src={kakaoProfile.profile_image}
          alt="프로필"
          className="ProfileImage"
        />
        <div className="ProfileValue">{kakaoProfile.nickname}</div>
      </div>

      <div className="FavoriteCard">
        <div className="FavoriteTitle">⭐ 과목 즐겨찾기</div>
        {favorites.length > 0 ? (
          <ul className="FavoriteList">
            {favorites.map((subject, index) => (
              <li key={index} className="FavoriteItem">
                {subject}
                <span className="Star">⭐</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="NoFavorites">즐겨찾기한 과목이 없습니다.</p>
        )}
      </div>

      {/* 🔻 로그아웃 버튼 추가 */}
      <button className="LogoutButton" onClick={handleLogout}>
        로그아웃
      </button>
    </div>
  );
}

export default MyPage;
