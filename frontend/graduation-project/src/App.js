// 리액트 기본 import
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

// 페이지 컴포넌트 import
import Home from './pages/Home'; // 메인(로그인) 화면
import JobSelectPage from './pages/JobSelectPage'; // 직업 선택 화면
import JobDetailPage from './pages/JobDetailPage'; // 직업 상세 화면
import MajorSelectPage from './pages/MajorSelectPage';
import MyPage from './pages/MyPage'; // 마이페이지 화면
import LicenseRecommendPage from './pages/LicenseRecommendPage'; // 자격증 추천 화면
import JobDescriptionPage from './pages/JobDescriptionPage'; // 직업 상세 설명 화면 
import Header from './components/Header'; // 상단 헤더 컴포넌트

import './App.css'; // 전체 앱 스타일 가져오기

// 라우터 내부에서 헤더를 상황에 따라 보여줄지 말지 결정하는 컴포넌트
function AppContent() {
  const location = useLocation(); // 현재 URL 경로를 가져오는 훅

  const hideHeaderPaths = ['/']; // "/" (홈화면)에서는 Header 숨기고 싶음

  return (
    <>
      {/* 홈 화면이 아닐 경우에만 Header 보이게 */}
      {!hideHeaderPaths.includes(location.pathname) && <Header />}

      {/* 각 Route별로 화면 표시 */}
      <Routes>
        {/* 홈화면은 패딩 없음 */}
        <Route path="/" element={<Home />} />

        {/* 그 외 화면은 상단바 높이만큼 패딩 줌 */}
        <Route
          path="/select-job"
          element={
            <div style={{ paddingTop: '70px' }}>
              <JobSelectPage />
            </div>
          }
        />
        <Route
          path="/job-detail"
          element={
            <div style={{ paddingTop: '70px' }}>
              <JobDetailPage />
            </div>
          }
        />
        <Route 
          path="/major-select" 
          element={
            <div style={{ paddingTop: '70px' }}>
              <MajorSelectPage />
            </div>
          } 
        />
        <Route
          path="/mypage"
          element={
            <div style={{ paddingTop: '70px' }}>
              <MyPage />
            </div>
          }
        />
        <Route
          path="/license-recommend"
          element={
            <div style={{ paddingTop: '70px' }}>
              <LicenseRecommendPage />
            </div>
          }
        />
        <Route
          path="/job-description"
          element={
            <div style={{ paddingTop: '70px' }}>
              <JobDescriptionPage />
            </div>
          }
        />
      </Routes>
    </>
  );
}

// 앱 최상단 구조 (Router로 전체 라우팅 관리)
function App() {
  return (
    <Router>
      <AppContent /> {/* Router 안에 AppContent를 넣음 */}
    </Router>
  );
}

export default App; // App 컴포넌트 export