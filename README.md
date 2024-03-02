# React Team Project - 오하우스

## 🖥️ 프로젝트 소개
기존 오늘의집 홈페이지를 벤치마킹하여 구현한 팀 프로젝트
<br>


## 🕰️ 개발 기간
* 2023. 11. 6 ~ 2023. 12. 11


## ✒️ 프로젝트 목표
1. 첫 팀프로젝트인 해당 프로젝트를 통한 팀원과의 협업 능력 향상
2. REACT를 활용한 UI/UX 구현으로 SPA방식으로 빠른 UI 렌더링과 반응성 구현하기
3. 데이터 CRUD와 다양한 이벤트 처리 기능을 구현하여 비즈니스 로직 학습하기
4. MySQL을 활용한 데이터 관리
5. Client와 Server, DB간의 연동 경험

## 🧑‍🤝‍🧑 멤버구성
![image](https://github.com/Hanna-one/ohouse/assets/141300455/9923dcfd-fa74-45ba-8435-cc8171f39121)

## ⚙️ 개발 환경
* **Language**
  * React
  * Java Script(AXIOS)
  * MySQL
  * Node.js (Express)
  * HTML/CSS

* **Collaboration & Tools**
   * MySQL WorkBench
   * Git/GitHub
   * Notion
     
## 📋 ERD
![image](https://github.com/Hanna-one/ohouse/assets/141300455/6445cd5f-8e60-449c-80d1-0ad52f5ee240)

## 🗂️ 메뉴구조도
![ohouse_menustructure](https://github.com/Hanna-one/ohouse/assets/141300455/d783d50d-0b94-4c77-85b1-eb342ef400e2)

## 📌 주요 기능
#### ✔️ 로그인 
- 로그인 시 쿠키(Cookie) 및 세션(Session) 생성
- 비밀번호 찾기 (nodemailer, bcript)
- 토큰으로 암호화 (jsonwebtoken)
  
#### ✔️ 회원가입 
- 유효성 체크 (필요 정보 입력, 약관동의 입력)
- 이메일 인증 (nodemailer)
- 로봇 인증 (react-google-recaptcha)

#### ✔️ 마이 페이지
- 회원정보 조회 및 수정 (프로필 사진 등록 및 삭제 multer, 정보 수정)
- 나의 쇼핑내역/문의내역 조회 및 삭제, 최신순/과거순 정렬
- 비밀번호 변경
- 로그아웃, 회원탈퇴

#### ✔️ 메인 페이지
- 이미지 슬라이드 (swiper)
- DB연동 하여 제품 정보 조회 후 상품 출력
- 컴포넌트 분리하여 UI 및 CSS 구현

#### ✔️ 카테고리 서브페이지
- DB연동 하여 제품 정보 조회 후 상품 출력
- 컴포넌트 분리하여 UI 및 CSS 구현
- 무한스크롤, 페이지네이션 기능 구현
  
#### ✔️ 장바구니
- 장바구니에 담은 상품 목록 출력
- 배달 형식에 따른 아이콘 표시
- 상품별 개별체크 및 모두선택 기능 구현
- 선택된 상품의 개수 및 가격에 따른 총가격 표시
- 추천 상품 출력

#### ✔️ 결제페이지
- 결제예정 상품 목록 출력
- 우편번호 검색 기능 (react-daum-postcode)
- 고객정보 입력 시 유효성 체크

#### ✔️ 상품 상세페이지 
- 상품명,  리뷰개수, 가격정보, 상품개수에 따른 총가격 출력
- 로그인 후 스크랩 기능 구현
- 상품정보, 리뷰, 문의 메뉴 클릭 시 각 메뉴로 스크롤 이동
- 문의&댓글 목록 조회, 작성, 삭제, 수정(CRUD), 사진 등록

#### ✔️ 검색페이지 
- 검색 키워드 입력 시 해당 상품 목록 출력

#### ✔️ 관리자페이지 
- 회원관리/상품관리/주문내역관리/문의관리 카테고리별 목록 조회
- 페이지당 보여지는 게시물수 변경
- 페이지네이션
- 상품관리: 카테고리별 필터
- 회원관리: 개인정보 마스킹처리
- 상품/주문내역/문의 목록 조회, 등록, 수정, 삭제(CRUD)

## 💻 화면구성
### 1️⃣로그인
![image](https://github.com/Hanna-one/ohouse/assets/141300455/949469e5-07a7-4a6c-9be1-aee0d1c24ad6)
### 2️⃣회원가입, 비밀번호 찾기, 회원탈퇴
![image](https://github.com/Hanna-one/ohouse/assets/141300455/41d253ad-baf8-44ee-bdd3-e21804b1ea01)
![image](https://github.com/Hanna-one/ohouse/assets/141300455/5b453ec2-e0c7-40da-811d-54482fddad9b)
### 3️⃣마이페이지
![image](https://github.com/Hanna-one/ohouse/assets/141300455/b96c5d1f-d280-4947-83b8-870895fc9e95)
![image](https://github.com/Hanna-one/ohouse/assets/141300455/0339b79d-e980-4790-81ac-d29109240c2d)
### 4️⃣메인페이지
![image](https://github.com/Hanna-one/ohouse/assets/141300455/51654b33-e96b-4c19-8e23-6fbaf877031f)
### 5️⃣카테고리 서브페이지
![image](https://github.com/Hanna-one/ohouse/assets/141300455/ce3d7f00-8ee2-4ca9-bf1f-248d7e6ef44f)
### 6️⃣장바구니, 결제페이지
![image](https://github.com/Hanna-one/ohouse/assets/141300455/16d3f87b-535d-4c63-a8f9-862836dc62c1)
![image](https://github.com/Hanna-one/ohouse/assets/141300455/3f5d4ba8-526c-4d4d-97f0-3a4535913a8a)
### 7️⃣상품 상세페이지
![image](https://github.com/Hanna-one/ohouse/assets/141300455/2e71d281-734a-4b22-b38a-80fa1d0a5582)
### 8️⃣검색페이지
![image](https://github.com/Hanna-one/ohouse/assets/141300455/ea194e9d-c347-45b5-8f92-7dea73028def)
### 9️⃣관리자페이지
![image](https://github.com/Hanna-one/ohouse/assets/141300455/2df233a3-45b2-4512-a227-0ebe5bb45955)

## 🗂️🗂️담당 역할✨✨
### ✅ 헤더
- 상단 배너 닫기 클릭 → 클릭한 시간이 localStorage 저장되어 24시간 보이지 않음
- Switch/case 문을 이용한 메뉴 hover 시 서브메뉴 변경
- Login시 Cookie 체크하여 로그인, 비로그인 메뉴 다르게 보여줌
- 로그인 후 장바구니에 상품담을 때 장바구니 아이콘에 실시간으로 담은 수 반영됨
- 3개의 Modal 창이 서로 간섭받지 않도록 다른 Modal을 띄우면 기존에 띄워진 Modal 닫힘

![ohouse_header](https://github.com/Hanna-one/ohouse/assets/141300455/c2b429c0-9b1c-48ca-8ff5-6ae3054fbfa2)

https://github.com/Hanna-one/ohouse/assets/141300455/14362a59-ecb5-4007-a9d7-17c38f7da2e3

### ✅ 서브페이지 UI
- useState 를 이용해 스크랩 버튼 클릭 시 스크랩 설정-해제 반복

https://github.com/Hanna-one/ohouse/assets/141300455/dde427f0-34a6-42c5-bd47-21b66212ed6d

### ✅ 마이페이지 - 나의 구매내역
- **AXIOS**를 이용한 구매내역 리스트 및 상세보기
    - 주문번호, 주문일자, 주문상품, 판매가격, 수량, 배송유형, 동일 주문번호의 총 결제비용 조회
- 주문일자기준 최신순/과거순 정렬

https://github.com/Hanna-one/ohouse/assets/141300455/b27702fa-76bc-4927-bbe9-0d13933ace8c

### ✅ 마이페이지 - 나의 문의내역
- **AXIOS**를 이용한 문의내역 리스트 및 상세보기
    - 문의일자, 상품명, 문의내용, 문의유형, 답변여부, 답변내용, 답변일자 조회
    - AXIOS를 이용한 문의내역 삭제 → DB에도 반영
    - 관리자가 미답변일 경우 : ‘답변 대기중입니다’ 라는 안내문구가 보여짐
    - 관리자가 답변한 경우 : 답변 내용과 답변 일시가 보여짐

https://github.com/Hanna-one/ohouse/assets/141300455/1991543b-96ee-48c7-bf5f-e1a353de8335

### ✅ 관리자페이지
### [ **회원 관리** ]
---
**※ 일반회원과 관리자의 Cookie를 다르게 저장하여 로그인했을 때 관리자 아이디 ‘@’ 의 Cookie가 확인 될 경우에만 해당 페이지에 접속할 수 있음**
- **MySQL, AXIOS**를 이용한 회원 리스트 및 페이징 처리
- 개인정보보호법에 따라 개인정보 마스킹 처리
- 
![ohouse_admin_member](https://github.com/Hanna-one/ohouse/assets/141300455/02d2d242-7cdb-45c8-909d-84f1f432221c)

### [ 상품 **관리** ]
---
- **MySQL, AXIOS**를 이용한 등록된 상품 리스트 출력 및 페이징 처리
- 카테고리별 상품리스트 출력, 페이지당 게시물수 변경(10/20/30/50개)
- 상품 정보 등록, 수정, 삭제 **- 데이터 CRUD**
    - **Multer** 라이브러리를 이용한 파일 추가, 수정 (첨부 가능 파일 1개)
    - 정상가, 할인율 입력 시 쿠폰할인가 자동계산하여 보여짐 

https://github.com/Hanna-one/ohouse/assets/141300455/cb0cbe8d-833a-4d82-bf40-26a970712316

### [ 주문 **관리** ]
---
- **MySQL, AXIOS**를 이용한 등록된 주문 리스트 출력 및 페이징 처리
- 주문 내역 상세보기
- 일자별 주문 리스트 검색
  
![ohouse_admin_order](https://github.com/Hanna-one/ohouse/assets/141300455/266b779c-70b9-41cc-8c51-1b7034f501f0)

### [ 문의 **관리** ]
---
- **MySQL, AXIOS**를 이용한 등록된 문의 리스트 출력 및 페이징 처리
- 답변하기 및 답변내용 DB 반영 (사용자의 나의문의내역 에서도 답변내용 확인 가능)

https://github.com/Hanna-one/ohouse/assets/141300455/e4c8079b-8b88-489e-8f45-67024aac5008

