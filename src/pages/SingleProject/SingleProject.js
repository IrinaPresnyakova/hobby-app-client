import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import '../CurrentProjects/CurrentProjects.scss';
import { AuthContext } from "../../utils/AuthContext";
import { Image } from 'cloudinary-react';
import './SingleProject.scss'
import images from './api-mock.json'


const SingleProject = () => {
    let { id } = useParams();
    
    const [projectObject, setProjectObject] = useState ({});
    const [notes, setNotes] = useState ([]);
    const [newNote, setNewNote] = useState ("");

    let history = useHistory();

    useEffect(() => {
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

    const addNote = () => {
        axios
            .post("http://localhost:5500/notes", {
                noteText: newNote, 
                ProjectId:id
            }, 
            {headers: {
                tokenForAccess: localStorage.getItem("tokenForAccess")
            }}
            )
            .then((response) => {
                if (response.data.error) {
                    console.log(response.data);
                } else {
                    const noteToAdd = {noteText: newNote};
                    setNotes([...notes, noteToAdd]);
                    setNewNote("");
                }
                
            })
        }
   

    const archiveProject = (id) => {
        axios
            .patch(`http://localhost:5500/projects/${id}`)
            .then((response) => {
                // console.log(response.data);
                alert("This project was archived!")
                history.push("/current")
            })
        }

    const deleteProject = (id) => {
        axios
            .delete(`http://localhost:5500/projects/${id}`)
            .then((response) => {
                alert("This project was deleted!")
                history.push("/current")
            })
        }

        const deleteNote = (noteId) => {
            axios
                .delete(`http://localhost:5500/projects/${noteId}`)
                .then((response) => {
                    alert("This note was deleted!")
                    history.push(`http://localhost:5500/projects/${id}`)
                })
        }
        
//Images handling with Cloudinary
        const [imageList, setImageList] = useState(images.resources)
        
        const [image, setImage] = useState("")
        // const uploadImage = () => {
        //     // console.log(files[0]);
        //     const formData = new FormData()
        //     formData.append("file", image)
        //     formData.append("upload_preset", "ctc3o5wg")
        
        //     axios
        //         .post("https://api.cloudinary.com/v1_1/dcfinwckd/image/upload", formData)
        //         .then((response) => {
        //             console.log(response);
        //         })
        // };


        console.log(imageList); //works
    return ( 
        <>
        <a href="/current"><h3 className="title"> Back to all current projects</h3></a>
        <div className="single-project-wrapper">
            <div className="button-wrapper">
                <Link to={{pathname: `/edit-project/${projectObject.id}`}} className="add-new">
                    <button>Edit this project</button>
                </Link>
            </div>
            <button onClick={()=> {archiveProject(projectObject.id)}}>
                Archive this project
            </button>
            <button onClick={()=> {deleteProject(projectObject.id)}}>
                Delete this project
            </button>
            <div className="project__card card">
                <div className="project__card--title">{projectObject.title}</div>
                <div className="project__card--info">{projectObject.materials} </div>
                <div className="project__card--info">{projectObject.progress} </div>
            </div>
            {/* this is where picture upload will happen */}
            <div className="gallery">
                <div className="title-light">Here are your pictures:</div>
                <div className="gallery__wrapper">         
                    {imageList.map((image, key) => {  
                        return (
                            <div className="gallery__card" key={key}>
                                <img className="image" src={image.url} alt={image.public_id}></img>
                            </div>
                        )
                    })}
                </div>
                <div className="title-light">Add more pictures? </div>
                <input 
                    type="file"
                    onChange={(event) => {
                        setImage(event.target.files[0])
                    }}/>
                {/* <button onClick={uploadImage} className="button-font">Upload image</button> */}
            </div>
            <div className="add-new">
                <div className="title-light">Add a new note</div>
                <input 
                    type="text" 
                    placeholder="Please enter a new note" 
                    autoComplete="off" 
                    onChange={(event) => {setNewNote(event.target.value)}}
                    value={newNote}/>
                <button onClick={addNote}>Add a note</button>
            </div>
                
            <div className="notes-title add-new" >Here are your notes:</div>
                {notes.map((note, key) => {
                    return (
                        <div key={key} className="card">
                            <div> 
                                {note.noteText}
                            </div>
                            <button className="button-font" onClick={deleteNote}>Delete</button>
                        </div>                      
                    )})
                }
            
        </div>
        </>
        
     );
}
 
export default SingleProject;