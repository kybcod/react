import React, { createContext, useContext, useState } from "react";
// 컨텍스트 만들기
const TextContext = createContext(null);

function MyInput() {
  // step2 : use the context
  const textHandler = useContext(TextContext); // textHandler = text, updateText를 가지고 있음
  return (
    <div>
      <input
        type="text"
        onChange={(e) => textHandler.updateText(e.target.value)}
      />
      <p>{textHandler.text}</p>
    </div>
  );
}

function MyText() {
  const textHandler = useContext(TextContext);
  return (
    <div>
      <p>{textHandler.text}</p>
    </div>
  );
}

function App(props) {
  const [text, setText] = useState("");

  function handleUpdateText(t) {
    setText(t);
  }

  return (
    <div>
      {/*step3. 컨텍스트 제공하기*/}
      <TextContext.Provider value={{ text, updateText: handleUpdateText }}>
        <MyInput />
        <MyText />
      </TextContext.Provider>
    </div>
  );
}

export default App;
