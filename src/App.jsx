import React from "react";

function App(props) {
  const a = [];

  // push : 새 값을 배열 맨 뒤에 추가
  a.push("흥민");
  a.push("강인");
  a.push(3.14);
  console.log(a);

  // pop : 맨 뒤의 값을 제거 후 리턴
  console.log(a.pop());
  console.log(a.pop());
  console.log(a);

  //map : 각 원소를 다른 값으로 매핑 후 새 배열 리턴
  const b = [5, 4, 3, 2, 1];
  console.log(b);
  function action(param) {
    return param * 2;
  }

  const c = b.map(action);
  console.log("c", c);
  console.log("b", b);

  const d = b.map(function (param) {
    return param * 3;
  });
  console.log(d);

  return <div></div>;
}

export default App;
