import React from "react";

function App(props) {
  function action1() {
    console.log("이름있는 함수");
  }

  const action2 = function () {
    console.log("이름 없는 함수");
  };

  const action3 = () => console.log("arrow 함수 변수에 담아서 넣기");

  return (
    <div>
      <button onClick={action1}>click1</button>
      <button onClick={action2}>click2</button>
      <button
        onClick={function () {
          console.log("이름 없는 함수 바로 넣기");
        }}
      >
        click3
      </button>
      <button onClick={action3}>click4</button>
      <button onClick={() => console.log("arrow 함수 바로 넣기")}>
        click5
      </button>
    </div>
  );
}

export default App;
