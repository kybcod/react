import React from "react";

function App(props) {
  // 이름 있는 함수
  function action1() {
    console.log("Action 1");
  }

  action1(); //함수실행

  // 이름 없는 함수
  const action2 = function () {
    console.log("anonymous action 1");
  };

  // arrow function
  const action3 = () => console.log("anonymous action $$$");

  return (
    <div>
      <button onClick={action1}>클릭!</button>
      <button onClick={action2}>클릭@</button>
      <button
        onClick={function () {
          console.log("anonymous action #####");
        }}
      >
        클릭#
      </button>
      <button onClick={action3}>클릭$$</button>
      <button onClick={() => console.log("arrow function %%%")}>클릭$$</button>
    </div>
  );
}

export default App;
