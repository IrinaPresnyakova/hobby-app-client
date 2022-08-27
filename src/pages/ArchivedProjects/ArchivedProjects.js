import React, { useEffect, useState }  from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import '../../components/Card/Card.scss'


const ArchivedProjects = () => {
    const [listOfArchived, setListOfArchived] = useState([]);
    let history = useHistory();

    useEffect(() => {
        axios
        .get("http://localhost:5500/archive")
        .then((response) => {
            setListOfArchived(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);
    
    return ( 
        <>
            <h1 className="title title-light">Archived projects</h1>
            
           
            <div className="small-cards-wrapper">
                {listOfArchived.map((item, key) => {
                return (
                    
                        <div 
                            key={key}
                            className="card" 
                            onClick={() => {
                                history.push(`/archive-view/${item.id}`)
                            }
                            }>
                            <div className="project__title" >Project: {item.title}</div>
                            <h2 className="aux-text">(click on a project to view details)</h2>
                        </div>  
                                                     
                )                    
            })}
            </div>
        </>
     );
}
 
export default ArchivedProjects;

