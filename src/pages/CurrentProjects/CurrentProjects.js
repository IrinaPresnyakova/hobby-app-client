import React, { useEffect, useState }  from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import './CurrentProjects.scss'
import '../../components/Card/Card.scss'


const CurrentProjects = () => {
    const [listOfProjects, setListOfProjects] = useState([]);
    let history = useHistory();

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
            <a href="/archive"><h2 className="title">Archive</h2></a>
            <div className="button-wrapper">
                <Link to="/add-project" className="add-new">Add a new project</Link>
            </div>
            <div className="cards-wrapper">
                {listOfProjects.map((item, key) => {
                return (    
                        <div key={key}
                            className="card" 
                            onClick={() => {
                                history.push(`/projects/${item.id}`)
                            }}
                            >
                            <div className="project__title">Project: {item.title} </div>
                            <div className="project__detail">Materials: {item.materials}</div>
                            <div className="project__detail">Progress: {item.progress}</div>
                        </div>  
                                                     
                )                    
            })}
            </div>
        </>
     );
}
 
export default CurrentProjects;

