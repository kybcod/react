function App() {
  // javascript review

  //javascript data type
  let a = undefined; //undefined : 값을 주지 않을 때
  console.log("a", a);
  let b = "문자열 타입";
  console.log("b", b);
  let c = 3;
  console.log("c", typeof c);
  let d = 3.14;
  console.log("d", typeof d);
  let e = true;
  console.log("e", typeof e);

  // 객체 타입
  let f = {};
  console.log("f", typeof f);

  let g = function () {}; // 함수는 function 타입
  console.log("g", typeof g);
  g = {};
  console.log("g", typeof g);

  return <div></div>;
}
export default App;
