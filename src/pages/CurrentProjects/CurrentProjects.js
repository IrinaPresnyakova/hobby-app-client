import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './CurrentProjects.scss'
import AddProject from "../../components/AddProject/AddProject";

const CurrentProjects = () => {
    const [listOfProjects, setListOfProjects] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:5500/current")
        .then((response) => {
            setListOfProjects(response.data);
        })
    }, []);
    
    return ( 
        <>
            <h1>Current projects</h1>
            <div button-wrapper>
                <Link to="/add-project">Add a new project</Link>
            </div>
            <div className="projects-wrapper">
                {listOfProjects.map((item, key) => {
                return (
                    <>
                        
                        <div key={item.id} className="project">
                            <div className="project__title">Project: {item.title}</div>
                            <div className="project__detail">Materials: {item.materials}</div>
                            <div className="project__detail">Progress: {item.progress}</div>
                        </div>  
                    </>
                                     
                )                    
            })}
            </div>
           
            
           
        </>
        
     );
}
 
export default CurrentProjects;

