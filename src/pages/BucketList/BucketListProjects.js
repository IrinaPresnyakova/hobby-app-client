import React, { useEffect, useState }  from "react";
import { useHistory, Link } from "react-router-dom";
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
            <Link to="/add-idea" className="add-new">Add a new idea</Link>
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
                                <div className="button-wrapper">

                
            </div>
                                
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