import React from "react";

function MyComp(props) {
  return <div></div>;
}

function App(props) {
  {
    /*props의 값 타입은 javascript 값타입*/
  }
  {
    /*{}에 값 입력, (string 만 생략 가능)*/
  }
  return (
    <div>
      <MyComp
        name={"son"}
        street="gangnam"
        age={3.14}
        address={{ city: "seoul", country: "us" }}
        married={true}
        action={function () {
          console.log("action");
        }}
        someAction={() => console.log("someAction")}
      />
    </div>
  );
}

export default App;
