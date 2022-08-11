import React, { useEffect, useState }  from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./BucketListProjects.scss"
import Button from "../../components/Button/Button";
import '../../components/Card/Card.scss'


const BucketList = () => {
    let { id } = useParams();
    const [projectObject, setProjectObject] = useState ({});
    const [bucketList, setBucketList] = useState([])
    console.log(projectObject);
    let history = useHistory();

    useEffect(() => {
        axios
        .get("http://localhost:5500/bucket-list")
        .then((response) => {
            setBucketList(response.data);
        })
    }, []);

    // const deleteProject = (id) => {
    //     axios
    //         .delete(`http://localhost:5500/bucket-list/${id}`)
    //         .then((response) => {
    //             alert("This project was deleted!")
    //             // history.push("/bucket-list")
    //             // setBucketList(response.data);
    //         })
    //     }

        const moveToCurrent = (id) => {
            console.log(id);
            axios
                .patch(`http://localhost:5500/bucket-list/${id}`)
                .then((response) => {
                    // console.log(response.data);
                    alert("This project was moved to current!")
                    history.push("/current")
                })
        }

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
                                onClick={()=> {
                                    history.push(`/bucket-list/${item.id}`)
                                }}
                            >
                                <div >{item.title}</div>
                                
                                <button>Edit</button>
                                <button>Add a note</button>
                                {/* <button onClick={()=> {deleteProject(projectObject.id)}}>
                                    Delete this project
                                </button> */}
                            </div>
                        </>

                    )
                })}
                    
            </div>
            
                   
        </>
    )
}

export default BucketList