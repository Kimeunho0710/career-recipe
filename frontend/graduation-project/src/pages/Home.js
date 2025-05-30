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
      success: function (authObj) {
        console.log('✅ 로그인 성공:', authObj);

        // 사용자 정보 가져오기
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function (res) {
            console.log('🙋 사용자 정보:', res);

            // 사용자 정보로 백엔드에 전달하거나 상태 저장 가능

            navigate('/select-job'); // 직업 선택 페이지로 이동
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
