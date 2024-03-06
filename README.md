# [✨ 이세계에서 나의 직업은?](https://another-world-test.vercel.app/)
> 이세계 테스트는 Single Page Application으로 구현된 MBTI 테스트입니다.

<img width="354" alt="image" src="https://github.com/summermong/summermong/assets/124887974/2b33db0f-3088-427a-bbcc-4becb3f9ac27">

1. 12가지 질문을 읽고 상황을 상상하면서 답을 골라보세요. **BGM🎵까지 들어주면 더 몰입돼요!**
2. 당신과 가장 잘 어울리는 **이세계 직업과 최고의 궁합❤️, 최악의 궁합💔**도 확인해보세요.
3. 친구, 가족, 애인에게 결과를 공유하고 상대의 직업도 확인해보세요.
4. 전체 결과로 미처 발견하지 못한 다른 직업들도 볼 수 있어요. 😎
<hr />


<!-- TOC -->
### Contents
* [이세계 MBTI 테스트 시연](#이세계-MBTI-테스트-시연)
* [이세계 MBTI 기술 스택](#이세계-MBTI-기술-스택)
* [이세계 MBTI 정보](#이세계-MBTI-정보)
* [이세계 MBTI 기록 및 트러블 슈팅](#이세계-MBTI-기록-및-트러블-슈팅)
<br />
<!-- TOC -->


## 이세계 MBTI 테스트 시연
영상 들어갈 예정


<br />


## 이세계 MBTI 기술 스택
| Stack                                                                                                               | Desc                         |
| :------------------------------------------------------------------------------------------------------------------ | :--------------------------- |
| <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>                        | React                        |
| <img src="https://img.shields.io/badge/TypeScript-3578E5?style=flat&logo=TypeScript&logoColor=white"/>              | TypeScript                   |
| <img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=ReactRouter&logoColor=white"/>           | 페이지 전환을 위한 라우팅          |
| <img src="https://img.shields.io/badge/Styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white"/> | CSS 스타일링                   |
| <img src="https://img.shields.io/badge/storybook-FF4785?style=flat&logo=storybook&logoColor=white"/>                | 컴포넌트 문서화 및 재사용          |
| <img src="https://img.shields.io/badge/Framer motion-0055FF?style=flat&logo=Framer&logoColor=white"/>               | CSS 애니메이션                  |
| <img src="https://img.shields.io/badge/KakaoTalk-FFCD00?style=flat&logo=KakaoTalk&logoColor=white"/>                | 카카오톡 메세지 공유하기 API       |
| <img src="https://img.shields.io/badge/Google Analytics-E37400?style=flat&logo=GoogleAnalytics&logoColor=white"/>   | GA4 연결                      |
| <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=Vercel&logoColor=white"/>                      | 배포                          |


<br />


## 이세계 MBTI 정보
* 배포 링크 [클릭](https://another-world-test.vercel.app/)
  
* 개발 기간
  * v1.0.0: 24.01.05 ~ 24.02.28 (ReactJS)
  * v2.0.0: 24.03.02 ~ 24.03.04 (TypeScript migration)
    
* 코드 컨벤션
  | Type     | Desc                                                                          |
  | :------- | :---------------------------------------------------------------------------- |
  | ✨: FEAT     | 새로운 기능 추가                                                              |
  | 💄: STYLE    | CSS 등 사용자 UI 디자인 변경, 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우|
  | 🐛: FIX      | 버그 수정                                                                   |
  | 📝: DOCS     | 문서 수정                                                                   |
  | 🚚: RENAME   | 파일 또는 폴더 명을 수정하거나 옮기는 작업                                          |
  | 🔥: REMOVE   | 파일을 삭제하는 작업만 수행한 경우                                                |
  | ♻️: REFACTOR  | 코드 리팩토링                                                                |
  | ✅: TEST     | 테스트 코드 추가                                                              |
  | 🚑: HOTFIX   | 급하게 치명적인 버그를 고쳐야 하는 경우                                            |
  | 💚: CHORE    | 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)                     |
  
<details>
  <summary><b>폴더 구조</b></summary>
    
```📦src
 ┣ 📂assets
 ┣ 📂data
 ┃ ┣ 📜questionData.ts
 ┃ ┗ 📜resultData.ts
 ┣ 📂hook
 ┃ ┣ 📜Adfit.tsx
 ┃ ┗ 📜gtag.ts
 ┣ 📂pages
 ┃ ┣ 📜Error.tsx
 ┃ ┣ 📜Questions.tsx
 ┃ ┣ 📜Result.tsx
 ┃ ┣ 📜Results.tsx
 ┃ ┗ 📜Start.tsx
 ┣ 📂stories
 ┃ ┣ 📜Button.stories.tsx
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜ResultCard.stories.tsx
 ┃ ┗ 📜ResultCard.tsx
 ┣ 📂style
 ┃ ┣ 📂font
 ┃ ┃ ┣ 📜HeirofLight-Bold.woff2
 ┃ ┃ ┗ 📜HeirofLight-Regular.woff2
 ┃ ┣ 📜GlobalStyles.ts
 ┃ ┣ 📜font.css
 ┃ ┗ 📜themes.ts
 ┣ 📜App.tsx
 ┗ 📜main.tsx
```

</details>
