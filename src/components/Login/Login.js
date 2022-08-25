import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory} from "react-router-dom";
import { AuthContext } from '../../utils/AuthContext'
import './Login.scss'


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
                        localStorage.setItem("tokenForAccess", response.data.token);
                        setLoginState({username: response.data.username, id: response.data.id, status: true});
                        history.push('/')
                    }
                });
            };
  return (
    <div className='content'>
         <div className='input'>
            <label className='aux-text'>Your username: </label>    
            <input className="input__field" type="text" onChange={(event) => {
                setUsername(event.target.value)
            }}/>
            <label className='aux-text'>Your password: </label>
            <input className="input__field" type="password" onChange={(event) => {
                setPassword(event.target.value)
            }}/>    
            <button onClick={login}>Log in</button>
        </div>
    </div>
   
  )
}

export default Login