import React from "react";

function MyButton({ name, sx }) {
  return <button style={sx}>{name}</button>;
}

function App(props) {
  return (
    <div>
      <MyButton
        name="클릭1"
        sx={{
          borderColor: "blue",
          backgroundColor: "skyblue",
          padding: "20px",
          color: "blue",
        }}
      />
      <MyButton
        name="클릭2"
        sx={{
          borderColor: "red",
          backgroundColor: "plum",
          padding: "20px",
          color: "red",
        }}
      />
    </div>
  );
}

export default App;
