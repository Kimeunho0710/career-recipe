import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../pages-css/MyPage.css';

function MyPage() {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);

    const kakaoProfile = JSON.parse(localStorage.getItem('kakaoProfile')) || {
        nickname: '로그인 필요',
        profile_image: '/img/default-profile.png',
    };

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (!userInfo) return;

        const fetchFavorites = async () => {
            try {
                const res = await axios.get(`/api/favorites/${userInfo.userId}`);
                setFavorites(res.data); // subjectName 포함되어야 함
            } catch (err) {
                console.error('❌ 즐겨찾기 목록 불러오기 실패:', err);
            }
        };

        fetchFavorites();
    }, []);

    const handleLogout = async () => {
        try {
            if (window.Kakao?.Auth?.getAccessToken()) {
                await window.Kakao.API.request({ url: '/v1/user/unlink' });
                await window.Kakao.Auth.logout();
                console.log('🔌 카카오 로그아웃 완료');
            }
            localStorage.clear();
            sessionStorage.clear();
            document.cookie =
                'authorize-access-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            navigate('/');
        } catch (err) {
            console.error('❌ 로그아웃 오류:', err);
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
                                {subject.subject_name} ({subject.subjectId} / {subject.department})
                                <span className="Star">⭐</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="NoFavorites">즐겨찾기한 과목이 없습니다.</p>
                )}
            </div>

            <button className="LogoutButton" onClick={handleLogout}>
                로그아웃
            </button>
        </div>
    );
}

export default MyPage;
