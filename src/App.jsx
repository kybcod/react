import React, { useEffect, useState } from "react";

function MyComp() {
  // 특정 순간에 실행되는 메소드를 파라미터로 받음
  useEffect(() => {
    console.log("re rendering 될 때마다 실행");
  });

  // 두 번째 파라미터 빈 배열
  useEffect(() => {
    console.log("첫 렌더링 때만 실행되는 메소드");
  }, []);

  // 첫번째 파라미터(함수)의 리턴은 unmount될 때 실행
  useEffect(() => {
    return () => {
      console.log("언마운트 될 때 실행되는 메소드");
    };
  }, []);

  // 두 번째 파라미터(배열)의 원소
  // 어떤 값(주로 state, dependency)이 바뀔 때,
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  useEffect(() => {
    console.log("dependency text1이 바뀔 때");
  }, [text1]);
  useEffect(() => {
    console.log("dependency text2이 바뀔 때");
  }, [text2]);
  useEffect(() => {
    console.log("text1 text2가 바뀔 때");
  }, [text1, text2]);

  const [count, setCount] = useState(0);

  return (
    <div>
      hello comp
      <button onClick={() => setCount(count + 1)}>CLICK</button>
      <div>
        <input type="text" onChange={(e) => setText1(e.target.value)} />
      </div>
      <div>
        <input type="text" onChange={(e) => setText2(e.target.value)} />
      </div>
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
