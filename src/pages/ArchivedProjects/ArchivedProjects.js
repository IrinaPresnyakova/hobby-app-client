import React, { useEffect, useState }  from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import './ArchivedProjects.scss'

const ArchivedProjects = () => {
    const [listOfArchived, setlistOfArchived] = useState([]);
    let history = useHistory();

    useEffect(() => {
        axios
        .get("http://localhost:5500/archive")
        .then((response) => {
            setlistOfArchived(response.data);
            console.log(response);
        })
    }, []);
    
    return ( 
        <>
            <h1>Archived projects</h1>
           
            <div className="small-cards-wrapper">
                {listOfArchived.map((item, key) => {
                return (
                    <>
                        <div 
                            className="small-card" 
                            onClick={() => {
                                history.push(`/archive/${item.id}`)
                            }}>
                            <div className="project__title" >Project: {item.title}</div>
                            
                        </div>  
                    </>                                  
                )                    
            })}
            </div>
        </>
     );
}
 
export default ArchivedProjects;

