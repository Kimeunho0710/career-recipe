import React from 'react';
import '../pages-css/MyPage.css';

function MyPage() {
  // 카카오 로그인 정보 불러오기
  const kakaoProfile = JSON.parse(localStorage.getItem('kakaoProfile')) || {
    nickname: '로그인 필요',
    profile_image: '/img/default-profile.png', // 대체 이미지
  };

  // 즐겨찾기 과목 불러오기
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

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
    </div>
  );
}

export default MyPage;