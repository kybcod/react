// built-in component : html의 기본 요소, 소문자로 시작
// component : 직접만든 요소(태그), 대문자로 시작
// component 는 return을 가진 함수

function MyComponent() {
  //return : 화면에 출력할 코드
  return <div>hello component</div>;
}

function MyComp() {
  // JSX 코드 : <div></div>
  const myElem = <hi>hi JSX</hi>;
  return myElem;
}

function App() {
  // 한 줄 주석
  /* 여러 줄 주석*/
  // component 사용시 종료 태그 생략할 수 없음
  // <br> 같은 빈요소는 시작 택에서 꼭 종료

  return (
    <>
      <div>
        {/* jsx 내에서의 주석 : 단축기 ctrl+/ */}
        <h1>
          hello <br /> react
        </h1>
        <p>Lorem ipsum dolor.</p>
        <MyComponent />
        <MyComp />
      </div>
    </>
  );
}

export default App;
