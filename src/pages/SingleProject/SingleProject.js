import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import '../CurrentProjects/CurrentProjects.scss';
import { AuthContext } from "../../utils/AuthContext";
import { Image } from 'cloudinary-react';
import './SingleProject.scss'


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
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get(`http://localhost:5500/projects/notes/${id}`)
            .then((response) => {
                setNotes(response.data);
                console.log("This is posted notes, obj with IDs!!!", response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    const addNote = () => {
        const noteId = notes.id
        axios
            .post(`http://localhost:5500/projects/notes/${id}`, {
                noteText: newNote, 
                ProjectId: id, 
                id: noteId
            }, 
            {headers: {
                tokenForAccess: localStorage.getItem("tokenForAccess")
            }}
            )
            .then((response) => {
                if (response.data.error) {
                    console.log(response.data);
                } else {
                    const noteToAdd = {
                        noteText: newNote, 
                        id: noteId
                        //BUT response data SHOULD include the noteId!!! 
                    }
                    setNotes([...notes, noteToAdd]);
                    setNewNote("");
                    console.log("posting a note", response.data);
                }
            })
            .catch((err) => {
                console.log(err);
            })
        }

    const archiveProject = (id) => {
        axios
            .patch(`http://localhost:5500/projects/${id}`)
            .then((response) => {
                alert("This project was archived!")
                history.push("/current")
            })
            .catch((err) => {
                console.log(err);
            })
        }

    const deleteProject = (id) => {
        axios
            .delete(`http://localhost:5500/projects/${id}`)
            .then((response) => {
                alert("This project was deleted!")
                history.push("/current")
            })
            .catch((err) => {
                console.log(err);
            })
        }

    const deleteNote = (noteId) => {
        axios
            .delete(`http://localhost:5500/projects/notes/${id}/${noteId}`)
            .then((response) => {
                axios
                    .get(`http://localhost:5500/projects/notes/${id}`)
                    .then((response) => {
                        setNotes(response.data);
                })
                .catch((err) => {
                    console.log(err);
                })             
            })
        
    }

// IMAGES UPLOAD:

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
            const response = await axios.post(`http://localhost:5500/projects/images/${id}`, {
                image: imagePreview,
                ProjectId:id
                
            }).then((response) => {
                const newImage = response.data.public_id
                setImageIds([...imageIds, newImage])
                setImagePreview (null)
            })
        }


// RENDERING IMAGES: 

        const [imageIds, setImageIds] = useState("")     

        const loadImages = async () => {
                axios.get(`http://localhost:5500/projects/images/${id}`)
                .then((response) => {                  
                    setImageIds(response.data)
                })
                .catch((err) => {
                    console.log(err);
                })

        }

        useEffect(() => {
            loadImages()
        }, [])


// DELETING IMAGES
        
        const deleteImage = async(id) => {
            
            axios
                .delete(`http://localhost:5500/projects/images/${id}/${id}`)
                .then((response) => {
                    console.log("image deleted", response.data);
                    loadImages(response.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

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

            {/* UPLOAD IMAGE*/}
            <div className="contents contents--background">
                <div className="title">Pictures</div>
                <form className="contents" onSubmit={e => handleSubmit(e)}>
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
                     {/* RENDER IMAGES*/}
                <div className="gallery__wrapper">
                    {imageIds && imageIds.map((imageIds, key) => {
                        const id = imageIds.id
                        const public_id = imageIds.public_id                        
                        return (
                            <div key={key} className="image-wrapper">  
                                <Image
                                    cloudName="dcfinwckd"
                                    public_id={public_id}
                                    id={id}
                                    width="300"
                                    className="image"/>
                                <button className="button-font delete-image" onClick={() => {deleteImage(id)}}>X</button>
                            </div>
                            )         
                    })}
                </div>
            </div>

            <div className="contents contents--background">
                <div className="title">Notes</div>
                <input 
                    type="text" 
                    placeholder="Please enter a new note" 
                    autoComplete="off" 
                    onChange={(event) => {setNewNote(event.target.value)}}
                    value={newNote}/>
                <button onClick={addNote}>Add a note</button>
            
                
            <div className="cards-wrapper">
                {notes.map((note, key) => {
                    return (
                        <div key={key} className="note">
                            <div className="note-text"> 
                                {note.noteText}
                            </div>
                            <button className="button-font delete-note" onClick={() =>{ deleteNote(note.id)}}>X</button>
                        </div>                      
                    )})
                }
            </div>
                
            </div>
        </div>
        </>
        
     );
}
 
export default SingleProject;