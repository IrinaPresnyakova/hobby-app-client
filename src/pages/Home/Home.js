import React from "react";
import axios from 'axios';
import { useEffect, useState  } from "react";
import { Link, useHistory} from "react-router-dom";
import Button from "../../components/Button/Button";
import { AuthContext } from "../../utils/AuthContext";
import './Home.scss'
import '../../styles/partials/_typekit.scss'


const Home = () => {
 
    const [loginState, setLoginState] = useState({username:"", id: "", status: false})

    useEffect(() => {
        axios.get("http://localhost:5500/auth/verify", {
            headers: {
                tokenForAccess: localStorage.getItem("tokenForAccess"),
        }}).then ((response) => {
            if(response.data.error) {
                setLoginState({ ...loginState, status: false })
            } else {
                setLoginState({username: response.data.username, id: response.data.id, status: true}) 
            }
        });     
    }, [])

    const logout = () => {
        localStorage.removeItem("tokenForAccess");
        setLoginState({username: "", id: 0, status: false});
    };
    
    return(
    <div className="contents">
        <h1 className="title-light">Hi {loginState.username}</h1>
        <AuthContext.Provider value={{ loginState, setLoginState }}>
            { !loginState.status ? ( 
                <div className="buttons-container">
                    <div className="button-wrapper">
                        <Link to="/auth" className="add-new">
                            <button className="button-font btn-flushed">Sign up</button>
                        </Link>
                    </div>
                    <div className="button-wrapper">
                        <Link to="/auth/login" className="add-new">
                            <button className="button-font btn-flushed">Log in</button>
                        </Link>
                    </div>
                </div>
                ) : (
                    <div className="buttons-container">
                        <button className="btn-flushed" onClick={logout}>Log out</button>
                    </div>
                    
                )}
        </AuthContext.Provider>        
            <div className="title-wrapper">
                <a href="/current"><h2 className="title">Current projects</h2></a>
                <a href="/archive"><h2 className="title">Archive</h2></a>
                <a href="/bucket-list"><h2 className="title">Bucket List</h2></a>
            </div>
    </div>
    )
}


export default Home