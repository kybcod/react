import React from "react";

function App(props) {
  // destructing assignment
  const person = {
    name: "John",
    email: "john@example.com",
    address: "seoul",
  };

  const { name, email } = person;
  console.log("name", name);
  console.log("email", email);
  // console.log("address", address);

  const car = {
    model: "genesis",
    company: "hyundai",
    price: 500,
  };

  // color는 undefined
  const { model, company, color } = car;
  console.log("model", model);
  console.log("company ", company);
  console.log("color", color);

  const house = {
    city: "seoul",
    country: "korea",
  };

  // 프로퍼티가 없을 때 기본값이 할당됨
  const { city, country, area = "incheon" } = house;
  console.log("city", city);
  console.log("country", country);
  console.log("area", area); // 없으면 기본값인 incheon

  return <div></div>;
}

export default App;
