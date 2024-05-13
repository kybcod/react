import React from "react";

function MyComp({ name, age, children }) {
  console.log("name", name);
  console.log("age", age);
  console.log("children", children);
  return (
    <div>
      <div>name : {name}</div>
      <div>age : {age}</div>
      <div>children : {children}</div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp name={"son"} age={3}>
        {/* content는 children prop*/}
        <p>Lorem ipsum dolor.</p>
      </MyComp>
      <MyComp name={"lee"} age={22}>
        <ul>
          <li>Lorem ipsum.</li>
          <li>Cum, placeat?</li>
        </ul>
      </MyComp>
    </div>
  );
}

export default App;
