import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../pages-css/MyPage.css';

function MyPage() {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);

    // ✅ userInfo에서 닉네임 가져오도록 변경
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const kakaoProfile = {
        nickname: userInfo?.nickname || '로그인 필요',
        profile_image: '/img/default-profile.png',
    };


    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (!userInfo) return;

        const fetchFavorites = async () => {
            try {
                const res = await axios.get(`/api/favorites/${userInfo.userId}`);
                setFavorites(res.data);
            } catch (err) {
                console.error('❌ 즐겨찾기 목록 불러오기 실패:', err);
            }
        };

        fetchFavorites();
    }, []);

    // ✅ 즐겨찾기 삭제 함수
    const handleRemoveFavorite = async (subject) => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (!userInfo) return;

        try {
            await axios.delete(`/api/favorites`, {
                data: {
                    userId: userInfo.userId,
                    subjectId: subject.subjectId,
                    department: subject.department,
                },
            });

            // 프론트에서 즉시 반영
            setFavorites((prev) =>
                prev.filter(
                    (item) =>
                        !(
                            item.subjectId === subject.subjectId &&
                            item.department === subject.department
                        )
                )
            );

            console.log('✅ 즐겨찾기 삭제 성공');
        } catch (err) {
            console.error('❌ 즐겨찾기 삭제 실패:', err.response?.data || err.message);
        }
    };

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
                                <span>
                                    {subject.subject_name} ({subject.department})
                                </span>
                                <button
                                    className="RemoveButton"
                                    onClick={() => handleRemoveFavorite(subject)}
                                >
                                    ❌ 해제
                                </button>
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
