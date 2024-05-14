import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");

  function handleSearchClick() {
    // 조회버튼 클릭 시 /api/customer?id=#로 요청
    axios
      .get(`/api/customer?id=${customerId}`)
      .then((response) => response.data)
      .then((data) => setCustomerName(data));
  }

  return (
    <div>
      <div>
        <input type="number" onChange={(e) => setCustomerId(e.target.value)} />
      </div>
      <button onClick={handleSearchClick}>조회</button>
      <div>이름 : {customerName}</div>
    </div>
  );
}

export default App;
