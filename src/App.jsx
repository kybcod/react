import React, { useEffect, useState } from "react";

function MyComp() {
  // 특정 순간에 실행되는 메소드를 파라미터로 받음
  useEffect(() => {
    console.log("use effect의 함수 실행됨");
  });

  // 두 번째 파라미터 빈 배열
  useEffect(() => {
    console.log("첫 렌더링 때만 실행되는 메소드");
  }, []);

  const [count, setCount] = useState(0);

  return (
    <div>
      hello comp
      <button onClick={() => setCount(count + 1)}>CLICK</button>
    </div>
  );
}

function App(props) {
  const [show, setShow] = useState(true);

  return (
    <div>
      <input
        type="checkbox"
        checked={show}
        onChange={(e) => setShow(e.target.checked)}
      />
      {show && <MyComp />}
    </div>
  );
}

export default App;
