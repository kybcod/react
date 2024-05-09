function MyComponent() {
  //최상위 컴포넌트 사용하지 않을 떄 -> fragment <></> 태그명이 없는 태그 사용
  return (
    <>
      <p>Lorem ipsum dolor.</p>
      <p>Commodi, iusto, vitae?</p>
    </>
  );
}

function MyComp() {
  // 최상위 컴포너는 1개
  return (
    <div>
      <p>Lorem ipsum.</p>
      <p>Incidunt, porro?</p>
    </div>
  );
}

function MyTag() {
  // jsx 코드가 여러 줄일 때 () 사용
  return (
    <div>
      hello tag
      <p>Lorem ipsum.</p>
      <p>At, voluptates.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;
