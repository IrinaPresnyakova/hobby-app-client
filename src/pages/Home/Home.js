import React from "react";
import axios from 'axios';
import { useEffect, useState  } from "react";
import { Link, useHistory} from "react-router-dom";
import Button from "../../components/Button/Button";
import { AuthContext } from "../../utils/AuthContext";


const Home = () => {
 
    const [loginState, setLoginState] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:5500/auth/auth", {
            headers: {
                tokenForAccess: localStorage.getItem("tokenForAccess"),
        }}).then ((response) => {
            if(response.data.error) {
                setLoginState(false)
            } else {
                setLoginState(true) 
            }
        });     
    }, [])

    return(
    <div>
        <AuthContext.Provider value={{ loginState, setLoginState }}>
            
                { !loginState && ( 
                    <div className="auth-container">
                        <div className="button-wrapper">
                            <Link to="/auth" className="add-new">
                                <button>Sign up</button>
                            </Link>
                        </div>
                        <div className="button-wrapper">
                            <Link to="/auth/login" className="add-new">
                                <button>Log in</button>
                            </Link>
                        </div>
                    </div>
                    )
                }
                 </AuthContext.Provider>

        
                <h1> Welcome to your hobby projects management app!</h1>
            
                <a href="/current"><h2 >Current projects</h2></a>
                <a href="/archive"><h2 className="title">Archive</h2></a>
                <a href="/bucket-list"><h2 className="title">Bucket List</h2></a>
            </div>
       
    )
}


export default Home