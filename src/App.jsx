function App() {
  const a = 7;
  const b = 3;

  // && : 양변이 모두 true일 때만 결과가 true, 나머지는 false
  const c = a > 10 && b > 0; // false
  const d = a < 10 && b > 0; // true
  console.log("c", c);
  console.log("d", d);

  // || : 양변이 모두 false일 때만 결과가 false, 나머지는 true
  const e = a > 10 || b > 0; //true
  const f = a < 5 || b > 0; //false
  console.log("e", e);
  console.log("f", f);

  // && (and ..그러면) : 왼쪽 항이 true이면 오른쪽 값 출력
  const g = a < 10 && "hello"; //hello
  const h = a < 5 && "hi"; //false
  console.log("g", g);
  console.log("h", h);

  // || (or ..아니면) : 왼쪽 항이 false이면 오른쪽 값 출력
  const i = a < 10 || "greeting"; //true
  const j = a < 5 || "안녕"; //false
  console.log("i", i);
  console.log("j", j);

  return <div></div>;
}

export default App;
