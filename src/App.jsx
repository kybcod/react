import React, { useState } from "react";

function MyComp1() {
  const [val, setVal] = useState([]);

  function addItem() {
    const [...newVal] = val;
    newVal.push("a");
    setVal(newVal);
  }

  return (
    <div>
      <div>{val}</div>
      <div>
        <button onClick={addItem}>추가</button>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App;
