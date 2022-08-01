import React, { useEffect, useState }  from "react";
import axios from "axios";
import './CurrentProjects.scss'


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
            {/* key is the index in the array, value is what is in it */}
            {listOfProjects.map((item, key) => {
                return (
                    <div className="project-container">
                        <div className="project__title">{item.title}</div>
                        <div className="project__detail">{item.materials}</div>
                        <div className="project__detail">{item.progress}</div>
                    </div>
                )
                
                    
                
            })}
           
        </>
        
     );
}
 
export default CurrentProjects;

