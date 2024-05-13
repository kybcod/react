import React, { useState } from "react";

function App(props) {
  const [name, setName] = useState("");
  const [hobby, setHobby] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <input type="text" onChange={(e) => setHobby(e.target.value)} />
      </div>
      <div>
        <input type="text" onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <input type="text" onChange={(e) => setCity(e.target.value)} />
      </div>
      <div>
        이름 : {name}
        <br />
        취미 : {hobby}
        <br />
        주소 : {address}
        <br />
        거주지 : {city}
        <br />
      </div>
    </div>
  );
}

export default App;
