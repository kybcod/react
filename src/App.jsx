import React, { useState } from "react";

function MyComp() {
  const [val, setVal] = useState({ name: "son" });

  function updateVal() {
    // 상태가 바뀌면 다시 그림
    // val의 참조값은 변하지 않아 val의 상태가 바뀌지 않음 (val.name은 lee로 바뀜)
    // 새 객체를 만들어어서  set
    val.name = "lee";
    setVal(val);
  }

  return (
    <div>
      {val.name}
      <button onClick={updateVal}>click</button>
    </div>
  );
}

function MyComp2() {
  const [val, setVal] = useState({ name: "son" });

  function updateVal() {
    // 객체를 복사해서 새 객체를 만들어 써야 함
    const { ...newVal } = val; // 얖은복사
    newVal.name = "lee";
    setVal(newVal);
  }
  return (
    <div>
      {val.name}
      <button onClick={updateVal}>변경</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
      <MyComp2 />
    </div>
  );
}

export default App;
