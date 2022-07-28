import React, { useEffect, useState }  from "react";
import axios from "axios";
import './CurrentProjects.scss'


const CurrentProjects = () => {

    const [currentProjects, setCurrentProjects] = useState('');

    useEffect(() => {
        getAllProjects()
    }, [])

    const getAllProjects = () => {
        axios
            .get("http://localhost:5500/current")
            .then(response => {
                setCurrentProjects(response.data) 
                console.log(response.data);
                
            })
            .catch(error => console.error(error))
    }

    return ( 
        <>
            <h1>Current projects</h1>
            {currentProjects.map((item) => {
                const {name, materials, sources, budget} = item 
            })}
            <ul>
                <li>Growing tomatoes</li> 
                <li>Making a SPA</li>
            </ul>
        </>
        
     );
}
 
export default CurrentProjects;

