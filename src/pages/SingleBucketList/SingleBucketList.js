import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
// import '../CurrentProjects/CurrentProjects.scss';
import Button from "../../components/Button/Button";

const SingleBucketList = () => {
    let { id } = useParams();

    const [bucketProjectObject, setBucketProjectObject] = useState ({});
    const [notes, setNotes] = useState ([]);
    console.log("are we here?");
    let history = useHistory();

    useEffect(() => {
        axios
            .get(`http://localhost:5500/bucket-list-view/${id}`)
            .then((response) => {
                setBucketProjectObject(response.data);
                console.log("got it", response.data); 
        });
        axios
            .get(`http://localhost:5500/notes/${id}`)
            .then((response) => {
                setNotes(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteProject = (id) => {
        axios
            .delete(`http://localhost:5500/bucket-list-view/${id}`)
            .then((response) => {
                alert("This project was deleted!")
                history.push("/bucket-list")
            })
    }

    const unbucketProject = (id) => {
        console.log(id);
        axios
            .patch(`http://localhost:5500/bucket-list-view/${id}`)
            .then((response) => {
                // console.log(response.data);
                alert("This project was moved to current!")
                history.push("/current")
            })
    }

    return ( 
        <>
        
        <a href="/bucket-list"><h3 className="title"> Back to all bucket list projects</h3></a>
        <a href="/current"><h3 className="title"> Back to all current projects</h3></a>
        <div className="single-project-wrapper">

            <button onClick={()=> {unbucketProject(bucketProjectObject.id)}}>
                Move to current
            </button> 
            <button onClick={()=> {deleteProject(bucketProjectObject.id)}}>
                Delete this project
            </button>
            <div className="project__card card">
                <div className="project__card--title">{bucketProjectObject.title}</div>
            </div>    
            <div className="notes-title add-new" >Here are your notes:</div>
                {notes.map((note, key) => {
                    return (
                        <div key={key} className="card">{note.noteText}</div>
                    )})
                }
            <div className="note"></div>
        </div>
        </>
        
     );
}
 
export default SingleBucketList;