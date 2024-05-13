import React, { useState } from "react";

function MyComp1() {
  const [val, setVal] = useState(0);

  function updateVal() {
    // react는 re-rendering 시점을 적절한 순간으로 선택
    setVal(val + 1);
    setVal(val + 1);
    setVal(val + 1);
    console.log("val", val);
  }

  return (
    <div>
      <div>{val}</div>
      <div>
        <button onClick={updateVal}>증가</button>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <div>
        <MyComp1 />
      </div>
    </div>
  );
}

export default App;
