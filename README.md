## scripts

script | description
------|--------------
`npm run dev` | webpack-dev-server을 실행합니다. localhost:8080으로 접속 가능합니다.
`npm run build` | webpack을 실행합니다. dist로 빌드파일을 생성합니다.

<br/>
<br/>

# Vue.js로 시작하는 [쇼핑몰 제작] 

하나씩 따라하다보면 일주일만에 끝나는 쇼핑몰 웹사이트 만들기

<br/>

## 1일차: 개발환경 설정 및 DefaultPage 만들기

### 1. 프로젝트 환경설정

#### 🧑‍🏫 참고 사이트

[AnDoYoung님의 블로그: VUE, WebPack 프로젝트 생성기](https://doyoungan.github.io/vue-webpack-1/) (짱짱짱!!!)
소스코드 보러가기: [AnDoYoung님의 Github](https://github.com/doYoungAn/vue-webpack-1)

> Github에서 프로젝트 Zip파일을 다운로드 받은 후, 
> 그 폴더에 소스코드를 추가하며 프로젝트를 진행해보자!

#### 1.1 WebPack

[참고: 김정환블로그 — 웹팩의 기본개념](http://jeonghwan-kim.github.io/js/2017/05/15/webpack.html)

**WebPack 등장 배경**
Vue 와 같은 Single-Page-Application은 한 페이지에도 여러가지 Component와 JS파일이 존재한다. 이 페이지가 여러개 모여 있는 웹사이트는 더 많은 수의 JS 파일을 관리해야 한다. 또 여러개의 파일을 브라우저에서 로딩할 때, 그만큼 더 많은 네트워크 비용을 치뤄야 한다.

**WebPack 등장원리**
자바스크립트는 즉시호출함수(IIFE)를 사용해 모듈을 만들 수 있다. 모듈 시스템을 사용하면 파일 별로 모듈을 관리할 수 있다. 하지만 브라우저에서는 파일단위 모듈 시스템을 사용하는 것이 쉽지 않다. 따라서, *하나의 모듈을 IIFE 스타일로 변경한 후, 하나의 파일로 묶어(bundled) 네트워크 비용을 최소화 해야 한다.*

**WebPack(=모듈 번들러) 개념 4
\1) 엔트리

**의존성 그래프의 시작점. 
웹팩은 엔트리를 통해서, 필요한 모듈을 로딩하고 하나의 파일로 묶는다.
(웹팩은 JS, CSS, IMG 모든 것을 자바스크립트 모듈로 로딩한다. 로딩 모듈이 많아질 수록 모듈간의 의존성은 증가한다.)

**2) 아웃풋

**번들(bundle) 된 결과물을 처리할 위치.

**3) 로더

**비 자바스크립트 파일을 웹팩이 이해하도록 변경한다.
test: 로딩할 파일을 지정
use: 적용할 로더를 설정
ex) babel-loader: ES6을 ES5로 변환할 때
ex) css-loader, style-loader: CSS파일을 자바스크립트로 변환 후(css-loader), 자바스크립트로 변경된 스타일 시트를 동적으로 돔에 추가(style-loader)

**4) 플러그인

**로더가 파일 단위로 처리한다면, 번들된 결과물을 처리한다. **
**ex) UglifyJSPlugin: 자바스크립트 결과물을 난독화한다.
ex) ExtractTextPlugin: css의 전 처리기인 SASS를 사용할 경우, SASS파일이 매우 커질 때, bundle.js 파일에서 style.css를 분리하는 것이 효율적일 수 있다.

#### 1.2 ‘dev 환경’ 과 ‘Production 환경’ 분리

개발해서 Build 할 때 개발할 때와 배포할 때를 다르게 해야 한다.
**development**: 소스코드를 잘 확인해야 한다.
**production**: 난독화를 해야 하고, 파일을 최대한 작게 만들어야 한다.

webpack.config 분할하기
 — webpack.base.js: 공통으로 사용되는 설정값
 — webpack.config.dev.js: development에서 사용되는 설정값
 — webpack.config.prod.js: production에서 사용되는 설정 값

### 2. DefaultPage 만들기

🐥 병아리 개발자 SoniaComp의 붙임말
가장 좋은 공부 방법은 공식 문서를 보는 것이다. 공식문서는 프레임워크의 개발 철학을 이해하고, 어떻게 소스코드를 작성해야 다른 개발자들이 더 잘 이해할 수 있을지 파악하는 데 도움이 된다.
이에 더해, 프레임워크로 개발된 어플리케이션의 구조를 파악하고 싶다면, 유명한 오픈소스나 템플릿을 참고하는 것이 좋다. gitHub의 ⭐ ️개수가 참고할 만한 오픈소스인지 판단하는 지표가 될 수 있다.
나는 무료 Vue 템플릿인, [vue-argon 템플릿](https://github.com/creativetimofficial/vue-argon-design-system)의 구조를 참고했다.

#### 🧑‍🏫 참고 사이트

[김정환 블로그-Vue-Router](http://jeonghwan-kim.github.io/2018/04/07/vue-router.html)
[Vue.js에서 라우팅을 사용해 사용자 환경을 더 좋게 만드는 방법](https://medium.com/@erwinousy/vuejs에서-라우팅을-사용해-사용자-환경을-더-좋게-만드는-방법-4e39d89929ea)

#### 2.1 router 작성

소스코드 보러가기: [gitHub](https://github.com/SoniaComp/Vue-Quick-ShoppingMall/tree/92977f719e3fe63aace789e893e4a2457737b51d)
[이전 프로젝트와의 차이점 확인하기](https://github.com/SoniaComp/Vue-Quick-ShoppingMall/commit/92977f719e3fe63aace789e893e4a2457737b51d)

`$ npm install vue-router` 
**vue-router**: 재사용 웹 컴포넌트를 만들 수 있는 기능. vue-router는 사용자가 페이지를 새로고침 하지않고 페이지 전환을 할 수 있도록 한다.

#### 2.2 NavBar
