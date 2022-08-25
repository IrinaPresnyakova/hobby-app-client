import React, { useEffect, useState }  from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./BucketListProjects.scss"
import Button from "../../components/Button/Button";




const BucketList = () => {
    // const [projectObject, setProjectObject] = useState ({});
    const [bucketList, setBucketList] = useState([])
    // console.log(projectObject);
    let history = useHistory();

    useEffect(() => {
        axios
        .get("http://localhost:5500/bucket-list")
        .then((response) => {
            setBucketList(response.data);
        })
    }, []);



    return (
        <>
            <h1 className="title title-light">My bucket list</h1>
            <div className="sheet">
                <a href="/add-idea" className="sheet__title">Add a new idea</a>
                <div className="sheet__content">
                    {bucketList.map((item, key) => {
                        return (
                            <div
                                key={key} 
                                className="sheet__content--text"
                                onClick={()=> {
                                    history.push(`/bucket-list-view/${item.id}`);
                                }}
                            >
                                <div >{item.title}</div>
                            </div>
                        )
                    })}
                        
                </div>
                <div className="sheet__margin sheet__margin--left">
                    <div className="hole first-hole"></div>
                    <div className="hole second-hole"></div>
                    <div className="hole third-hole"></div>
                </div>
                <div className="sheet__margin sheet__margin--right"></div>     
            </div>
        </>
    )
}

export default BucketList