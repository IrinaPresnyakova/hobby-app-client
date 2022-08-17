import React from "react";
import axios from 'axios';
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";

const Home = () => {
 

    return(
        <div>
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

    
            <h1> Welcome to your hobby projects management app!</h1>
          
            <a href="/current">
                <h2 >Current projects</h2>
            </a>
            <a href="/archive"><h2 className="title">Archive</h2></a>
            <a href="/bucket-list"><h2 className="title">Bucket List</h2></a>
        </div>
    )
}


export default Home