import React, { useState } from "react";

function MyButton({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  );
}

function MyBox({ count }) {
  return <div>{count} 번 클릭됨</div>;
}

function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <MyButton count={count} setCount={setCount} />
      <hr />
      <MyBox count={count} />
    </div>
  );
}

export default App;
