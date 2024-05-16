import React from "react";

function App(props) {
  // 직렬화
  // 수동
  const obj1 = { name: "son", age: 33 };
  const json1 = '{"name" :"son", "age":33}';

  // 메소드 사용
  const obj2 = { name: "lee", age: 22 };
  const json2 = JSON.stringify(obj2); // 직렬화
  console.log(obj2);
  console.log(json2);

  return <div></div>;
}

export default App;
