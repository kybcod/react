import React, { useState } from "react";

function MyBox({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>up</button>
      <p>{count}</p>
    </div>
  );
}

function App(props) {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <input
        type="checkbox"
        checked={display}
        onChange={(e) => setDisplay(e.target.checked)}
      />
      {display && <MyBox count={count} setCount={setCount} />}
    </div>
  );
}

export default App;
