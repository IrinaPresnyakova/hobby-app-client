import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import '../CurrentProjects/CurrentProjects.scss';
import Button from "../../components/Button/Button";

const SingleArchived = () => {
    let { id } = useParams();

    const [archProjectObject, setArchProjectObject] = useState ({});
    const [notes, setNotes] = useState ([]);

    let history = useHistory();

    useEffect(() => {
        axios
            .get(`http://localhost:5500/archive-view/${id}`)
            .then((response) => {
                setArchProjectObject(response.data); 
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
            .delete(`http://localhost:5500/archive-view/${id}`)
            .then((response) => {
                alert("This project was deleted!")
                history.push("/archive")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const unarchiveProject = (id) => {
        console.log(id);
        axios
            .patch(`http://localhost:5500/archive-view/${id}`)
            .then((response) => {
                alert("This project was returned to current!")
                history.push("/current")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return ( 
        <>
        <div className="single-project-wrapper">
            <div className="project-manipulation-btns">
                <Button buttonLabel="Unarchive this project" handleClick={()=> {unarchiveProject(archProjectObject.id)}}/>
                <Button buttonLabel="Delete this project" handleClick={()=> {deleteProject(archProjectObject.id)}}/>    
          
            </div>
           
            <div className="project__card card">
                <div className="project__card--title">{archProjectObject.title}</div>
                <div className="project__card--info">{archProjectObject.materials} </div>
            </div>    
            <div className="cards-wrapper">
                {notes.map((note, key) => {
                    return (
                        <div key={key} className="note">{note.noteText}</div>
                    )})
                }
            </div>
                
            
        </div>
        </>
        
     );
}
 
export default SingleArchived;