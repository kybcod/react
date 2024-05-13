import React, { useState } from "react";

function MyButton({ onClick }) {
  return <button onClick={onClick}>클릭</button>;
}

function MyNumber({ number }) {
  return <div>number : {number}</div>;
}

function App(props) {
  const [number, setNumber] = useState(0);
  function handleNumberChange() {
    setNumber(number + 1);
  }

  // 하위 컴포넌트의 상태와 이벤트를 상위 컴포넌트에서 관리할 수 있습니다.
  // 이 때, props 사용해서 이벤트핸들러메소드와 상태를 전달해줍니다.
  return (
    <div>
      <MyButton onClick={handleNumberChange} />
      <MyNumber number={number} />
    </div>
  );
}

export default App;
