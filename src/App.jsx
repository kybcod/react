import React from "react";

function MyComp(props) {
  return <div></div>;
}

function App(props) {
  //props의 이름은 lowerCamelCase로 작성
  // 예약어를 사용하지 말아야 합니다.
  return (
    <div>
      <label htmlFor="input1"></label>
      <input id="input1" type="text" />
      <p className="error note">Lorem ipsum dolor.</p>
      <MyComp number={3} pageNumber={3} />
    </div>
  );
}

export default App;
