import React from 'react';
import axios from "axios";

function App(props) {
    function handleClick200() {
        axios.get("/api/main43/sub1")
            .then(response => {
                console.log("200 응답");
            });
    }

    function handleClick400() {
        axios.get("/api/main43/sub2").
        then((res)=> console.log("400 응답"))
            .catch(()=> console.log("catch 400 응답"));
    }

    function handelClick401() {
        axios.get("/api/main43/sub3")
            .then((res)=> console.log("401 응답"))
            .catch(()=> console.log("catch 401 응답"));
    }

    function handelClick403() {
        axios.get("/api/main43/sub4")
            .then((res)=> console.log("403 응답"))
            .catch(()=> console.log("catch 403 응답"));
    }

    function handelClick404() {
        axios.get("/api/main43/sub5")
            .then((res)=> console.log("404 응답"))
            .catch(()=> console.log("catch 404 응답"));
    }

    function handelClick500() {
        axios.get("/api/main43/sub6")
            .then((res)=> console.log("500 응답"))
            .catch(()=> console.log("catch 500 응답"));
    }

    return (
        <div>
          <button onClick={handleClick200}>200 응답</button>
          <button onClick={handleClick400}>400 응답</button>
          <button onClick={handelClick401}>401 응답</button>
          <button onClick={handelClick403}>403 응답</button>
          <button onClick={handelClick404}>404 응답</button>
          <button onClick={handelClick500}>500 응답</button>
        </div>
    );
}

export default App;
