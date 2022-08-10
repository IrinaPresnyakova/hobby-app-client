import React, { useEffect, useState }  from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./BucketListProjects.scss"
import Button from "../../components/Button/Button";
import '../../components/Card/Card.scss'

const BucketList = () => {

    const [bucketList, setBucketList] = useState([])
    console.log(bucketList);
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
            <h1>Ideas for future projects</h1>
            <h2>Add a new project</h2> 
            <div className="small-cards-wrapper">
                {bucketList.map((item, key) => {
                    return (
                        <>
                            <div 
                                className="small-card"
                                // onClick={()=> {
                                //     history.push(`/bucket-list/${item.id}`)
                                // }}
                                >
                                <div >{item.title}</div>
                                <button>Move to current</button>
                                <button>Edit</button>
                                <button>Add a note</button>
                                <button>Delete</button>
                            </div>
                        </>

                    )
                })}
                    
            </div>
            
                   
        </>
    )
}

export default BucketList