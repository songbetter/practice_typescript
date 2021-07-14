## Practice_typescript

타입스크립트 기반의 CRA 생성
`npx create-react-app create-redux-ts --template typescript`

리덕스 설치 `npm i redux react-redux --save`

> useSelector와 useDispatch 훅과 Provider 컴포넌트를 이용하기 위해 react-redux 설치.

### 디렉토리 구조

<img src="https://user-images.githubusercontent.com/75013112/125638230-47980aa9-5ff2-44b4-a643-82ca06b9c60c.png" height="400">

- Atomic Design Pattern<br>: Atom(input, button, counter) < Molecules(card, block) < Organisms(header, footer, modal) < Templates(TodoList) < Pages
- Ducks Pattern<br>: 액션, 액션 생성 함수, 리듀서를 한 파일에 작성
