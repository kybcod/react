import React from "react";

function App(props) {
  const names = ["January", "February", "March", "April", "May"];
  // <li> January </li>
  // <li> February </li>
  // ...

  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
