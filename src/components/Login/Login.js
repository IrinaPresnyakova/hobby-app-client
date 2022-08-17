import React, { useState } from 'react'
import axios from 'axios';

function Login() {
         //we need state to hold values of the username and password we input
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        
        const login = () => {
            const loginData = { username: username, password: password };
            axios   
                .post("http://localhost:5500/auth/login", loginData)
                .then((response) => {
                    console.log(response.data);
                });
            };
  return (
    <div>
        <input type="text" onChange={(event) => {
            setUsername(event.target.value)
        }}/>
        <input type="password" onChange={(event) => {
            setPassword(event.target.value)
        }}/>    
        <button onClick={login}>Log in</button>
    </div>
  )
}

export default Login