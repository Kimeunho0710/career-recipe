## 졸업 프로젝트 - 진로레시피

우리 학교 학생 전용 진로 기반 전공 선택 과목 추천 시스템 

### src/ 폴더 -> 대부분 여기서 작업

App.js - 실제로 웹 화면에 보이는 메인 컴포넌트. 수정하면 즉시 반영됨
index.js - React 앱의 시작점. App 컴포넌트를 HTML에 연결해주는 역할
App.css - App.js에 적용되는 스타일(CSS)
index.css - 전체 앱에 적용되는 전역 스타일
logo.svg - 리액트 로고 이미지. 필요 없으면 삭제 가능
reportWebVitals.js - 성능 측정 관련. 초보 단계에서는 사용 안 해도 됨
setupTests.js - 테스트 환경 설정 파일. 지금은 무시해도 OK

---

### public/ 폴더 -> HTML 템플릿 수정 시

index.html - HTML 템플릿 파일. 여기서 <div id="root"></div>에 React가 연결됨
favicon.ico	- 탭에 나오는 아이콘 이미지
manifest.json - 앱 설명 관련 정보 (PWA용)
robots.txt - 검색엔진에 크롤링 허용 여부 설정

---

### 그 외 루트 파일들 -> 라이브러리 추가 시 (npm install 등)

package.json - 설치된 라이브러리 목록, 실행 명령어, 앱 정보 등이 들어 있음 
package-lock.json - 라이브러리 버전 고정용. 자동 생성됨
.gitignore - Git에서 무시할 파일 목록
README.md - 프로젝트 설명 문서 (초기엔 기본 텍스트로 들어있음)

### 화면 가로 500px 세로 auto
### 반응형 -> max-width: 600px