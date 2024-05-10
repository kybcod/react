import React from "react";

function App(props) {
  // object({},[])
  const a = [6, 7, 8];
  const [x, y, z] = a;
  console.log("x", x); //6
  console.log("y", y); //7
  console.log("z", z); //8

  // 나머지 모두 (...변수명)
  const [s, ...t] = a;
  console.log("s", s); //6
  console.log("t", t); //[7,8]
  console.log("t[0]", t[0]); //7
  console.log("t[1]", t[1]); //8

  // 나머지 모두 배열 복사
  const c = a;
  const [...b] = a; // 각 원소를 새 배열에 복사
  console.log("b", b); //[6,7,8]

  c[0] = 66;
  console.log("a[0]", a[0]); //66
  console.log("b[0]", b[0]); // 6
  console.log("c[0]", c[0]); //66

  // 연습 : 객체 복사
  const d = ["pizza", "son", 77];

  const e = d; // 참조값 복사
  const [...f] = d; // 각 원소를 새 배열에 복사

  e[2] = 88;
  console.log("d", d); // ['pizza', 'son', 88]
  console.log("e", e); // ['pizza', 'son', 88]
  console.log("f", f); // ['pizza', 'son', 77]

  return <div></div>;
}

export default App;
