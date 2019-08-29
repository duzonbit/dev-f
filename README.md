# React Projcet
SPA 게시판

# 사용 버전
   - Node 10.16.0

# 개발 스택

- ## Client-Side
  - 뷰 레이어 : `React`
  - 라우팅 : `react-router-dom`
  - 상태 관리 : `redux`
  - 리덕스 바인딩 : `react-redux`
  - 네트워크 요청 : `axios`
  - 미들웨어 : `redux-promise-middleware`
  - 쿠키 관리 : `react-cookie`
  - 레이어 팝업 : `react-modal`
  - 프론트엔드 프레임워크 : `BootStrap`

- ## Tools
  - IDE : `vscode`
  - 버전 관리 : `git`
  - 협업 도구 : `slack`, `Trello`

# 디렉토리 구조

$tree-extended -max=5 -ignore="node_module",".git","assets","public","build",".vscode"

    ├───src/
    │   ├───component/
    │   │   ├───bbs/
    │   │   │   ├───create/
    │   │   │   │   └───GeneralCreateForm.jsx
    │   │   │   ├───general/
    │   │   │   │   └───GeneralSubTitle.jsx
    │   │   │   ├───list/
    │   │   │   │   ├───GeneralListData.jsx
    │   │   │   │   └───GeneralPageNation.jsx
    │   │   │   ├───pagination/
    │   │   │   │   └───GeneralPageNation.jsx
    │   │   │   ├───read/
    │   │   │   │   ├───GeneralActionButton.jsx
    │   │   │   │   └───GeneralReadData.jsx
    │   │   │   └───update/
    │   │   │       ├───GeneralActionButton.jsx
    │   │   │       └───GeneralUpdateData.jsx
    │   │   ├───common/
    │   │   │   ├───aside/
    │   │   │   │   ├───CommonAside.jsx
    │   │   │   │   └───index.jsx
    │   │   │   ├───footer/
    │   │   │   │   ├───CommonFooter.jsx
    │   │   │   │   └───index.jsx
    │   │   │   └───header/
    │   │   │       ├───CommonHeader.jsx
    │   │   │       └───index.jsx
    │   │   ├───modals/
    │   │   │   └───SignUpModal.jsx
    │   │   ├───sign/
    │   │   │   ├───LoginComponent.jsx
    │   │   │   └───UserComponent.jsx
    │   │   ├───template/
    │   │   │   └───general/
    │   │   │       └───GeneralTemplate.jsx
    │   │   └───App.jsx
    │   ├───container/
    │   │   ├───bbs/
    │   │   │   ├───CreatePaneContainer.jsx
    │   │   │   ├───ListPaneContainer.jsx
    │   │   │   ├───ReadPaneContainer.jsx
    │   │   │   └───UpdatePaneContainer.jsx
    │   │   ├───comment/
    │   │   │   └───CommentPaneContainer.jsx
    │   │   └───sign/
    │   │       ├───SignInPaneContainer.jsx
    │   │       └───SignUpPaneContainer.jsx
    │   ├───lib/
    │   │   └───url/
    │   │       ├───bbs/
    │   │       │   ├───default.js
    │   │       │   └───index.js
    │   │       ├───comment/
    │   │       │   ├───default.js
    │   │       │   └───index.js
    │   │       └───sign/
    │   │           ├───default.js
    │   │           └───index.js
    │   ├───pages/
    │   │   └───bbs/
    │   │       ├───CreatePage.jsx
    │   │       ├───ListPage.jsx
    │   │       ├───ReadPage.jsx
    │   │       └───UpdatePage.jsx
    │   ├───store/
    │   │   ├───module/
    │   │   │   ├───bbs/
    │   │   │   │   ├───create.js
    │   │   │   │   ├───delete.js
    │   │   │   │   ├───index.js
    │   │   │   │   ├───list.js
    │   │   │   │   ├───read.js
    │   │   │   │   └───update.js
    │   │   │   ├───sign/
    │   │   │   │   ├───index.js
    │   │   │   │   └───signInOut.js
    │   │   │   └───index.js
    │   │   └───configure.js
    │   ├───index.jsx
    │   └───Root.jsx
    ├───test/
    │   └───url/
    │       ├───bbs.http
    │       ├───comment.http
    │       └───sign.http
    ├───.env
    ├───.eslintrc.js
    ├───package-lock.json
    ├───package.json
    └───README.md
    
# 기술 설명

>### redux-promise-middleware

- `axios`를 통한 네트워크 요청을 `redux-promise-middleware` 미들웨어를 사용하여 간편하게 처리가능.
- 액션을 생성할 때 `payload` 속성에 `promise` 객체를 넣어주면 네트워크 요청 _`준비`_, _`성공`_, _`실패`_ 의 3단계를 미들웨어가 _`PENDING`_, _`SUCCESS`_, _`FAILURE`_ 의 액션을 생성해 `디스패치`함.
- 각 상태에 따른 처리가 용이.
-  [redux-promise-middleware](https://www.npmjs.com/package/redux-promise-middleware)

>### react-cookie
- 자바스크립트용 범용 쿠키(`universal_cookie`)를 `react`에서 사용할 수 있게 함.
- `React.Component`, `react Hooks` 모두 지원.
- [react-cookie](https://www.npmjs.com/package/react-cookie)


>### react-modal
- 모달 다이얼로그를 react의 컴포넌트로 제공.
- 모달 컴포넌트 속성에 따라 동적인 모달 컨텐츠 표현 가능.
- 디자인 적용 가능.
- [react-modal](https://www.npmjs.com/package/react-modal)

>### ReactStrap
- `react`기반 `BootStrap`라이브러리
- `React BootStrap4` 포함
- [공식문서](https://reactstrap.github.io) 
- [github](https://github.com/reactstrap/reactstrap)
