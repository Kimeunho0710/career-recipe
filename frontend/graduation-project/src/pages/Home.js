import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 훅

function Home() {
    const navigate = useNavigate(); // 페이지 이동 기능 생성

    // 카카오 SDK 초기화
    useEffect(() => {
        if (!window.Kakao?.isInitialized()) {
            window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
            console.log('✅ Kakao SDK 초기화됨');
        }
    }, []);

    // 로그인 버튼 클릭 시 호출될 함수
    const handleLogin = () => {
        window.Kakao.Auth.login({
            throughTalk: false,
            persistAccessToken: false, // ✅ 자동 로그인 방지: 매번 계정 선택
            success: function (authObj) {
                console.log('✅ 로그인 성공:', authObj);

                // 사용자 정보 가져오기 (단지 확인용, 실제로 백엔드에는 accessToken만 전달)
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: async function (res) {
                        console.log('🙋 사용자 정보:', res);

                        const accessToken = window.Kakao.Auth.getAccessToken(); // ✅ accessToken 추출

                        try {
                            // ✅ 백엔드에 accessToken 전달
                            const response = await fetch('http://localhost:8080/api/auth/kakao', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ accessToken }),
                            });

                            const userInfo = await response.json();

                            // ✅ localStorage에 저장
                            localStorage.setItem('userInfo', JSON.stringify(userInfo));

                            // ✅ 다음 페이지로 이동
                            navigate('/select-job');
                        } catch (error) {
                            console.error('❌ 백엔드 로그인 처리 실패:', error);
                        }
                    },
                    fail: function (error) {
                        console.error('❌ 사용자 정보 요청 실패:', error);
                    },
                });
            },
            fail: function (err) {
                console.error('❌ 로그인 실패:', err);
            },
        });
    };

    return (
        <div className="Container">
            <div className="App">
                {/* 상단 메인 로고 이미지 */}
                <img src="mainIcon.png" alt="진로레시피 로고" className="App-logo" />

                {/* 설명 텍스트 */}
                <p className="App-description">
                    <span>자신이 원하는 직업에 대한</span>
                    <br />
                    <span className="checkIcon">✔ </span>
                    <span>로드맵 제공</span>
                    <br />
                    <span className="checkIcon">✔ </span>
                    <span>필요한 자격증 추천</span>
                    <br />
                    <span className="checkIcon">✔ </span>
                    <span>전공 선택 과목 추천</span>
                </p>

                {/* 로그인 버튼 */}
                <button className="kakaotalk-login-button" onClick={handleLogin}>
                    <img
                        src="kakaotalk-logo.png"
                        alt="카카오톡 로고"
                        className="kakaotalk-logo"
                    />
                    <span>카카오톡 아이디로 시작하기</span>
                </button>
            </div>
        </div>
    );
}

export default Home;
