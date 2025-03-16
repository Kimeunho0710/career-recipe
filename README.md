# graduation-project

## 제목 아이디어 후보
1.커리어 맞춤형 전공 추천 시스템
2.진로 기반 과목 추천 서비스
3.전공 네비게이터:내 직업에 맞는 과목 찾기
4.전공 로드맵: 내 꿈을 위한 과목 선택
5.진로 맞춤형 커리큘럼 추천 서비스

## 목표
본 프로젝트는 학생들이 자신의 진로 목표에 맞는 전공 선택 과목을 추천받을 수 있도록 지원하는 웹사이트를 개발하는 것을 목표로 한다.
학생들이 꿈꾸는 직업을 선택하면, 해당 직업에 필요한 핵심 역량을 분석하여 관련된 전공 선택 과목을 추천해줌으로써 보다 체계적인 학업 계획을 수립할 수 있도록 돕는다.
이를 통해 학생들은 자신의 관심 분야와 미래 직업에 적합한 과목을 쉽게 찾고, 효율적으로 학습을 준비할 수 있으며, 나아가 올바른 진로 선택에 도움을 받을 수 있다.
또한, 사용자 피드백을 반영한 맞춤형 추천 시스템을 구축하여 보다 정밀한 과목 추천이 가능하도록 한다.

## 예상 결과물

 # 웹 애플리케이션
-우리 학교 학생 전용 진로 기반 전공 선택 과목 추천 시스템
-직업 선택 방식: 드롭다운 리스트 또는 버튼 형식으로 직업 선택
-맞춤 과목 추천: 선택한 직업에 맞는 전공 선택 과목 리스트 제공
-검색 및 필터 기능: 학과별, 관심 분야별 과목 검색 기능 추가
-반응형 웹 디자인 적용: PC 및 모바일 지원
# 백엔드 시스템
-직업-과목 매칭 알고리즘 구현 (규칙 기반)
-우리 학교의 전공 선택 과목 데이터베이스 구축
-RESTful API 제공 (웹과 서버 간 데이터 연동)
-사용자 피드백 반영 기능 추가 가능 (추천 과목 수정/추가 기능)
# 관리자 페이지 (선택 사항)
과목 및 직업 데이터 관리 기능 (교직원이 과목 및 추천 데이터 수정 가능)
학생들의 과목 선택 통계 제공
# 프로젝트 보고서 및 문서화
프로젝트 개요 및 개발 과정 문서화
시스템 아키텍처 및 데이터베이스 설계서 (ERD 포함)
기능 명세서 및 API 명세서 작성
사용자 매뉴얼 (학생용, 관리자용)

## S/W 환경 (Software Environment)
-운영체제: Windows 10/11 또는 Linux (Ubuntu 20.04 이상)
-개발 도구: IntelliJ IDEA 또는 VS Code
-버전 관리: Git 및 GitHub
-프로그래밍 언어: Java (Spring Boot) 또는 JavaScript (Node.js)
-데이터베이스: MySQL 또는 Microsoft SQL Server (학교 환경에 맞춤)
-웹 프레임워크:
  백엔드: Spring Boot (Java) 또는 Express.js (Node.js)
  프론트엔드: React.js 또는 HTML/CSS + JavaScript
-API 및 서버 통신: RESTful API
테스트 환경: Postman (API 테스트), JUnit (백엔드 테스트)

## 연구방법론
 # 기초 연구 (관련 기술 및 개념 학습)
직업-과목 매칭 방식 연구:
기존의 교육 추천 시스템 및 커리어 매칭 시스템 사례 조사
우리 학교의 전공 선택 과목과 관련된 데이터 수집 및 분석
웹 개발 기술 학습:
백엔드(Spring Boot 또는 Node.js) 및 프론트엔드(React.js 또는 HTML/CSS) 프레임워크 연구
데이터베이스(MySQL 또는 Microsoft SQL Server) 설계 및 최적화 방법 학습
사용자 경험(UX) 연구:
학생들이 쉽게 사용할 수 있는 UI/UX 설계 원칙 학습
학과별 필수/선택 과목 구성 방식 조사
# 관련 연구 분석 (기존 시스템 참고 및 벤치마킹)
국내외 대학에서 운영 중인 전공 선택 가이드 및 추천 시스템 분석
커리어 매칭 서비스(예: 직업 추천 시스템, MOOC 강의 추천 알고리즘 등) 조사
과목 추천을 위한 데이터 매칭 알고리즘 연구 (규칙 기반, 키워드 매칭 등)
# 시스템 설계 및 개발 방법론 적용
소프트웨어 개발 방법론 선정:
애자일(Agile) 방법론을 적용하여 단계별 개발 및 개선
GitHub를 활용한 버전 관리 및 협업 진행
데이터 수집 및 처리 방법:
우리 학교의 전공 선택 과목 데이터베이스 구축
직업-과목 매칭을 위한 데이터 분석 및 정리
# 사용자 테스트 및 피드백 반영
초기 MVP(최소 기능 제품) 개발 후 테스트 진행
학생 및 교수진 대상 사용성 평가 후 기능 개선
최종 사용자 피드백을 반영하여 직업-과목 추천 시스템 고도화

### 7. 주별 예정표

프로젝트 진행을 위해 총 **N주(예: 12~16주)** 동안 단계별 개발을 진행할 예정이며, 각 주차별 예상 진도는 다음과 같다.

| **주차** | **진행 내용** |
|---------|--------------------------------|
| **1주차** | 프로젝트 기획 및 요구사항 분석 📌  <br> - 프로젝트 목표 및 기능 정의 <br> - 기존 교육 추천 시스템 사례 조사 <br> - 학교 전공 선택 과목 데이터 수집 |
| **2주차** | 시스템 설계 🔍  <br> - 서비스 아키텍처 설계 <br> - 데이터베이스 모델링 (ERD 설계) <br> - 직업-과목 매칭 알고리즘 초안 작성 |
| **3주차** | UI/UX 설계 🎨  <br> - 직업 선택 및 추천 UI 프로토타입 제작 (Figma 등 활용) <br> - 사용자 흐름(User Flow) 설계 <br> - 피드백 반영 후 UI 확정 |
| **4주차** | 백엔드 개발 (1차) 🛠️  <br> - Spring Boot (또는 Node.js) 프로젝트 초기 설정 <br> - 데이터베이스 구축 및 API 설계 <br> - 직업-과목 추천 알고리즘 개발 시작 |
| **5주차** | 프론트엔드 개발 (1차) 💻  <br> - React.js (또는 HTML/CSS+JS) 프로젝트 초기 설정 <br> - 기본적인 페이지 구성 및 스타일링 |
| **6주차** | 백엔드 개발 (2차) 🔗  <br> - 직업 선택 → 과목 추천 API 구현 <br> - 데이터베이스 연동 테스트 <br> - 관리자 페이지 (과목 추가/수정) 개발 |
| **7주차** | 프론트엔드 개발 (2차) 🚀  <br> - 백엔드 API 연동 <br> - 직업 선택 및 추천 결과 화면 개발 <br> - 사용자 입력 및 필터링 기능 구현 |
| **8주차** | 기능 개선 및 추가 개발 ⚙️  <br> - 추천 알고리즘 보완 (피드백 반영) <br> - UI/UX 개선 <br> - 반응형 디자인 적용 |
| **9주차** | 통합 테스트 🧪  <br> - 백엔드 & 프론트엔드 통합 테스트 <br> - 오류 수정 및 최적화 |
| **10주차** | 사용자 테스트 및 피드백 반영 👥  <br> - 학생 및 교수 대상 테스트 <br> - 기능 및 UI 개선 |
| **11주차** | 최종 기능 구현 & 배포 준비 📦  <br> - 시스템 안정화 <br> - 배포 환경 구축 (선택 사항) |
| **12주차** | 최종 보고서 작성 및 발표 준비 📑  <br> - 프로젝트 문서 정리 <br> - 발표 자료 제작 <br> - 프로젝트 최종 점검 |


