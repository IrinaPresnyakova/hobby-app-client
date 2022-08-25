import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import '../CurrentProjects/CurrentProjects.scss';
import { AuthContext } from "../../utils/AuthContext";
import { Image } from 'cloudinary-react';
import './SingleProject.scss'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";


const SingleProject = () => {
    let { id } = useParams();
    
    const [projectObject, setProjectObject] = useState ("");
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

// IMAGES UPLOAD:

        const [file, setFile] = useState("");
        const [imagePreview, setImagePreview] = useState("")
        const [uploadedImage, setUploadedImage] = useState("")

        const previewFiles = (file) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                setImagePreview (reader.result)
            }
        }

        const handleChange = (e) => {
            const file = e.target.files[0];
            previewFiles(file)
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            const response = await axios.post("http://localhost:5500/images", {
                image: imagePreview
            }).then((response) => {
                console.log(response.data);
                const newImage = response.data.public_id
                setImageIds([...imageIds, newImage])
                setImagePreview (null)
            })
        }


// IMAGES RENDERING: 

            const [imageIds, setImageIds] = useState("")

            const loadImages = async () => {
                    axios.get("http://localhost:5500/images")
                    .then((response) => {
                        console.log(response.data);
                        setImageIds(response.data)
                    })
            }

            useEffect(() => {
                loadImages()
            }, [])

    return ( 
        <>
        <a href="/current"><h3 className="title title-light"> Back to all current projects</h3></a>
        <div className="single-project-wrapper">
            <div className="project-manipulation-btns">
                <Link to={{pathname: `/edit-project/${projectObject.id}`}} className="add-new">
                    <button>Edit this project</button>
                </Link>
                <button onClick={()=> {archiveProject(projectObject.id)}}>
                    Archive this project
                </button>
                <button className="button-font" onClick={()=> {deleteProject(projectObject.id)}}>
                    Delete this project
                </button>
            </div>
            
            
            <div className="project__card card">
                
                <div className="project__card--title">{projectObject.title}</div>
                <div className="project__card--info">{projectObject.materials} </div>
                <div className="project__card--info">{projectObject.progress} </div>
            </div>

            {/* UPLOAD */}
            <div className="title-light">Add more pictures? </div>
            <form onSubmit={e => handleSubmit(e)}>
                <label htmlFor="fileInput"></label>
                <input 
                    type="file"
                    id="fileInput"
                    onChange={e => handleChange(e)}
                    required/>

                {imagePreview && (
                    <img src={imagePreview} alt="selected" style={{height: '10rem'}}/>
                )}
                
                <button type="submit" className="button-font">Upload image</button>
            </form>

            {/* RENDER */}
            <div className="gallery">
                {imageIds && imageIds.map((imageId, key) => {
                    return (
                        <Image 
                            key={key}
                            cloudName="dcfinwckd"
                            public_id={imageId}
                            width="300"
                            className="image"/>
                        )    
                })}
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
                
            <div className="notes-title add-new"></div>
                {notes.map((note, key) => {
                    return (
                        <div key={key} className="note">
                            <div> 
                                {note.noteText}
                            </div>
                            <button className="button-font delete-note" onClick={deleteNote}>X</button>
                        </div>                      
                    )})
                }
            
        </div>
        </>
        
     );
}
 
export default SingleProject;