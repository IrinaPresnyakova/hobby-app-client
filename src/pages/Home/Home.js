import React from "react";
import axios from 'axios';
import { useEffect } from "react";

const Home = () => {
    // useEffect(() => {
    //     axios
    //     .get("http://localhost:5500/current")
    //     .then((response) => {
    //         console.log(response);
    //     })
    // }, [])    

    return(
        <div>
            <h1> HOME PAGE!!</h1>
            <p>Each of the following will lead to a corresponding page:</p>
            <a href="/current">
                <h2 >Current projects</h2>
            </a>
            <h2>Bucket list</h2>
            <h2>Archived projects</h2>
        </div>
    )
}


export default Home