import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import '../CurrentProjects/CurrentProjects.scss';


const SingleArchived = () => {
    let { id } = useParams();
    const [projectObject, setProjectObject] = useState ({});
    const [notes, setNotes] = useState ([]);

    let history = useHistory();

    useEffect(() => {
        axios
            .get(`http://localhost:5500/archive/${id}`)
            .then((response) => {
                // setProjectObject(response.data); 
                console.log("archived call",response.data)
        });
        axios
            .get(`http://localhost:5500/notes/${id}`)
            .then((response) => {
                setNotes(response.data);
            })
    }, [])

    // const deleteProject = (id) => {
    //     axios
    //         .delete(`http://localhost:5500/archive/${id}`)
    //         .then((response) => {
    //             alert("This project was deleted!")
    //             history.push("/archive")
    //         })
    // }

    // const unarchiveProject = (id) => {
    //     console.log(id);
    //     axios
    //         .patch(`http://localhost:5500/archive/${id}`)
    //         .then((response) => {
    //             // console.log(response.data);
    //             alert("This project was returned to current!")
    //             history.push("/current")
    //         })
    // }

    return ( 
        <>
        <a href="/current"><h3 className="title"> Back to all current projects</h3></a>
        <div className="single-project-wrapper">

            {/* <button onClick={()=> {unarchiveProject(projectObject.id)}}>
                Unarchive this project
            </button> */}
            {/* <button onClick={()=> {deleteProject(projectObject.id)}}>
                Delete this project
            </button> */}
            <div className="project__card card">
                <div className="project__card--title">{projectObject.title}</div>
                <div className="project__card--info">{projectObject.materials} </div>
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
 
export default SingleArchived;