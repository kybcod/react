import React, {useState} from 'react';
import axios from "axios";

function App(props) {
    const [username, setUsername] = useState('son');

    function handleLogin() {
        axios.post("/api/main44/login", {username}).then((res)=>{localStorage.setItem("token", res.data)}); // 요청
    }

    function handleLogout() {
        localStorage.removeItem("token");
    }

    function handleAccessAll() {
        axios.get("/api/main44/all").then((res)=> alert(res.data)); // 요청
    }

    function handleAccessUser() {
        axios
            .get("/api/main44/user", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => alert(res.data));
    }

    return (
        <div>
            <div><input type="text" defaultValue={username} onChange={(e=> setUsername(e.target.value))}/></div>
            <div><button onClick={handleLogin}>로그인</button></div>
            <hr/>
            <div><button onClick={handleLogout}>로그아웃</button></div>
            <div><button onClick={handleAccessAll}>누구나 접근 가능</button></div>
            <div><button onClick={handleAccessUser}>로그인한 유저만</button></div>
        </div>
    );
}

export default App;

