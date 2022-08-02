import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const SingleProject = () => {
    let { id } = useParams();
    const [projectObject, setProjectObject] = useState ({});

    useEffect(() => {
        axios
            .get(`http://localhost:5500/current/project/${id}`)
            .then((response) => {
                setProjectObject(response.data); 
        })
    }, [])

    return ( 
        <div className="single-project-wrapper">
            <div className="project__card">
                <div className="project__card--title">{projectObject.title}</div>
                <div className="project__card--info">{projectObject.materials}</div>

            </div>
        </div>
     );
}
 
export default SingleProject;