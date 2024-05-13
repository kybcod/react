import React, { useState } from "react";

function App(props) {
  const [text, setText] = useState("");

  function handleUpdatedText(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleUpdatedText} />
      <p>{text}</p>
    </div>
  );
}

export default App;
