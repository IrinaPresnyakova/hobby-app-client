import React from "react";
import axios from 'axios';
import { useEffect } from "react";
import Button from "../../components/Button/Button";

const Home = () => {
    // useEffect(() => {
    //     axios
    //     .get("http://localhost:5500/current")
    //     .then((response) => {
    //         console.log(response);
    //     })
    // }, [])    

    function handleClickHome() {
        console.log("Home clicked");
    }
    return(
        <div>
            <Button buttonLabel="Home Page" handleClick={handleClickHome}/>


            <h1> HOME PAGE</h1>
            <p>Each of the following will lead to a corresponding page:</p>
            <a href="/current">
                <h2 >Current projects</h2>
            </a>
            <a href="/archive"><h2 className="title">Archive</h2></a>
            <a href="/bucket-list"><h2 className="title">Bucket List</h2></a>
        </div>
    )
}


export default Home