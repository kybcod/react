import React from "react";

function MyComp({ name, age, someProp, otherProp }) {
  console.log(someProp); //true
  console.log(otherProp); //true
  return <div></div>;
}

function App(props) {
  return (
    <div>
      <MyComp name="son" age={30} otherProp={true} />
    </div>
  );
}

export default App;
