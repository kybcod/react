import React from "react";
import { v1, v2 } from "./Values2.jsx";
import { c1, v2 as c2 } from "./Values1.jsx";

function App(props) {
  return (
    <div>
      <div>{v1}</div>
      <div>{v2}</div>
      <div>{c1}</div>
      <div>{c2}</div>
    </div>
  );
}

export default App;
