import React, {useState} from 'react';
import axios from "axios";

function App(props) {
    const [username, setUsername] = useState('son');

    function handleLogin() {
        axios.post("/api/main44/login", {username}); // 요청
    }

    return (
        <div>
            <div><input type="text" defaultValue={username} onChange={(e=> setUsername(e.target.value))}/></div>
            <div><button onClick={handleLogin}>로그인</button></div>
        </div>
    );
}

export default App;

