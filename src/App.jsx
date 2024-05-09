import React from "react";

function App(props) {
  // string
  const s1 = "some string";
  const s2 = "other string";
  const s3 = " I'm 신뢰에요";
  const s4 = '제 이름은 "흥민"입니다.';
  const s5 = `backtick string`; //template literal

  const name = "son";
  const age = 30;
  const s6 = "son" + "is " + age + " years.";
  const s7 = `${name} is ${age} years.`;

  return (
    <div>
      {s6} {s7}
    </div>
  );
}

export default App;
