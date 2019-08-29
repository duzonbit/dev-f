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

    ├───src/
    │   ├───component/
    │   │   ├───bbs/
    │   │   │   ├───create/
    │   │   │   │   └───GeneralCreateForm.js  
    │   │   │   ├───general/
    │   │   │   │   └───GeneralSubTitle.js    
    │   │   │   ├───list/
    │   │   │   │   ├───GeneralListData.js    
    │   │   │   │   └───GeneralPageNation.js  
    │   │   │   ├───pagination/
    │   │   │   │   └───GeneralPageNation.js  
    │   │   │   ├───read/
    │   │   │   │   ├───GeneralActionButton.js
    │   │   │   │   └───GeneralReadData.js    
    │   │   │   ├───update/
    │   │   │   │   ├───GeneralActionButton.js
    │   │   │   │   └───GeneralUpdateData.js  
    │   │   │   ├───ListPaneComponent.js      
    │   │   │   └───PagingPaneComponent.js    
    │   │   ├───common/
    │   │   │   ├───empty/
    │   │   │   │   ├───CommonEmpty.js        
    │   │   │   │   └───index.js
    │   │   │   ├───footer/
    │   │   │   │   ├───CommonFooter.js       
    │   │   │   │   └───index.js
    │   │   │   ├───header/
    │   │   │   │   ├───CommonHeader.js
    │   │   │   │   └───index.js
    │   │   │   └───nav/
    │   │   │       ├───CommonNav.js
    │   │   │       └───index.js
    │   │   ├───modals/
    │   │   │   ├───AskModal.js
    │   │   │   ├───ResultNotifyModal.js
    │   │   │   └───SignUpModal.js
    │   │   ├───sign/
    │   │   │   ├───LoginComponent.js
    │   │   │   └───UserComponent.js
    │   │   ├───template/
    │   │   │   └───general/
    │   │   │       └───GeneralTemplate.js
    │   │   └───App.js
    │   ├───container/
    │   │   ├───bbs/
    │   │   │   ├───CreatePaneContainer.js
    │   │   │   ├───ListPaneContainer.js
    │   │   │   ├───ReadPaneContainer.js
    │   │   │   └───UpdatePaneContainer.js
    │   │   ├───comment/
    │   │   │   └───CommentPaneContainer.js
    │   │   └───sign/
    │   │       ├───SignInPaneContainer.js
    │   │       └───SignUpPaneContainer.js
    │   ├───message/
    │   │   └───index.js
    │   ├───pages/
    │   │   ├───bbs/
    │   │   │   ├───CreatePage.js
    │   │   │   ├───ListPage.js
    │   │   │   ├───ReadPage.js
    │   │   │   └───UpdatePage.js
    │   │   └───common/
    │   │       └───NotFounPage.js
    │   ├───store/
    │   │   ├───module/
    │   │   │   ├───bbs/
    │   │   │   │   ├───create.js
    │   │   │   │   ├───defaultbbs.js
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
    │   ├───url/
    │   │   ├───bbs/
    │   │   │   └───index.js
    │   │   ├───comment/
    │   │   │   └───index.js
    │   │   └───sign/
    │   │       └───index.js
    │   ├───index.css
    │   ├───index.js
    │   └───Root.js
    ├───.env
    ├───.eslintrc.js
    ├───comment.http
    ├───package-lock.json
    ├───package.json
    ├───README.md
    └───rest.http

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
