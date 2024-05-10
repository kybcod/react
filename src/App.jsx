import React from "react";

function MyInfo({ name, team, salary, country }) {
  return (
    <div>
      <ul>
        <li>이름 : {name}</li>
        <li>팀 : {team}</li>
        <li>연봉 : {salary}</li>
        <li>국가 :{country} </li>
      </ul>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyInfo name="흥민" team="토트넘" salary={500} country={"korea"} />
    </div>
  );
}

export default App;
