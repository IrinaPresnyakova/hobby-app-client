import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import '../CurrentProjects/CurrentProjects.scss';


const SingleProject = () => {
    let { id } = useParams();
    const [projectObject, setProjectObject] = useState ({});
    const [notes, setNotes] = useState ([]);
    const [newNote, setNewNote] = useState ("");

    let history = useHistory();

    useEffect((id) => {
        axios
            .get(`http://localhost:5500/projects/${id}`)
            .then((response) => {
                setProjectObject(response.data); 
        });
        axios
            .get(`http://localhost:5500/notes/${id}`)
            .then((response) => {
                setNotes(response.data);
            })
    }, [])

    const deleteProject = (id) => {
        axios
            .delete(`http://localhost:5500/projects/${id}`)
            .then((response) => {
                alert("This project was deleted!")
                history.push("/current")
            })
    }

    const addNote = () => {
        axios
            .post("http://localhost:5500/notes", {noteText: newNote, ProjectId:id})
            .then((response) => {
                const noteToAdd = {noteText: newNote};
                setNotes([...notes, noteToAdd]);
                setNewNote("");
        })
    }

    return ( 
        <div className="single-project-wrapper">
            <button>Edit this project</button>
            <button onClick={()=> {deleteProject(projectObject.id)}}>
                Delete this project
            </button>
            <div className="project__card card">
                <div className="project__card--title">{projectObject.id}</div>
                <div className="project__card--title">{projectObject.title}</div>
                <div className="project__card--info">{projectObject.materials}</div>
            </div>
            
            <div className="add-new">
                <div>Add a new note</div>
                <input 
                    type="text" 
                    placeholder="Please enter a new note" 
                    autoComplete="off" 
                    onChange={(event) => {setNewNote(event.target.value)}}
                    value={newNote}/>
                <button onClick={addNote}>Add note</button>
            </div>
                
            <div className="notes-title add-new" >Here are your notes:</div>
                {notes.map((note, key) => {
                    return (
                        <div key={key} className="card">{note.noteText}</div>
                    )})
                }
            <div className="note"></div>
        </div>
     );
}
 
export default SingleProject;