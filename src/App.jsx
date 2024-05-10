import React from "react";

function App(props) {
  // object ({}, [])
  // 나머지 모두 (rest property)
  // ...변수명

  const a = {
    name: "John",
    email: "john@example.com",
    password: "1234567890",
    address: "127.0.0.1",
  };

  const { name, email, ...b } = a;
  console.log("name", name);
  console.log("email", email);
  console.log("b.password", b.password);
  console.log("b.address", b.address);

  // 연습
  const c = {
    city: "seoul",
    country: "US",
    price: 500,
    category: "food",
  };

  const { price, ...d } = c;
  console.log("price", price); //500
  console.log("d.city", d.city); //seoul
  console.log("d.country", d.country); //US
  console.log("d.category", d.category); //food

  return <div></div>;
}

export default App;
