import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory} from "react-router-dom";
import { AuthContext } from '../../utils/AuthContext'

function Login() {
         //we need state to hold values of the username and password we input
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [loginState, setLoginState] = useState(false)
        // const {setLoginState} = useContext(AuthContext);

        let history = useHistory();

        const login = () => {
            const data = { username: username, password: password };
            axios   
                .post("http://localhost:5500/auth/login", data)
                .then((response) => {
                    if (response.data.error) {
                        alert(response.data.error)
                    } else {
                        localStorage.setItem("tokenForAccess", response.data);
                        setLoginState(true);
                        history.push('/')
                    }
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