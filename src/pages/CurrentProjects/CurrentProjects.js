import React, { useEffect, useState }  from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import './CurrentProjects.scss'
import '../../components/Card/Card.scss'
import '../../styles/partials/_typekit.scss'


const CurrentProjects = () => {
    const [listOfProjects, setListOfProjects] = useState([]);
    let history = useHistory();

    useEffect(() => {
        axios
        .get("http://localhost:5500/current")
        .then((response) => {
            setListOfProjects(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);
    
    return ( 
        <>
            <h1 className="title-light">Current projects</h1>
            <div className="button-wrapper">
                <Link to="/add-project" >
                    <button className="button-font"> Add a new project</button>
                </Link>
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

