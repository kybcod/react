import React from "react";
import val, { v1 } from "./MyValues.jsx";
import someVal from "./MyComp.jsx";

function App(props) {
  return (
    <div>
      <div>{v1}</div>
      <div>{val}</div>
      <div>{someVal}</div>
    </div>
  );
}

export default App;
