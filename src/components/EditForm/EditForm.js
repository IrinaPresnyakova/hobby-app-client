import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage} from "formik";
import "../../pages/CurrentProjects/CurrentProjects.scss"
import "../AddProject/AddProject.scss"
import * as Yup from 'yup'
import axios from "axios";


const EditProject = (props) => {
    let history = useHistory(); 
    let { id } = useParams();
    const [projectObject, setProjectObject] = useState ({});

    useEffect(() => {
        // const getProject = () => {
            axios
                .get(`http://localhost:5500/projects/${id}`)
                .then((response) => {
                    setProjectObject(response.data); 
                    // console.log(response.data.title)
                    const title = response.data.title;
                    console.log(title);
            });
        // }
    }, [])

    // const handleChange = (e) => {
    //     e.persist();
    
    //     let name = e.target.name;
    //     let value = e.target.value;

    //   };
    const handleInputChange = (e) => {
                // handleChange(e);
                setProjectObject({...projectObject, [e.target.name]: e.target.value})
            }
            
    const updateProject = (e) => {
        // e.preventDefault();
        axios
            .patch(`http://localhost:5500/projects/${id}`, projectObject, {
                "Content-type": "application/json"
            })
            .then((response) => {
                history.push("/current")
                console.log("This project was modified")
            })

            
    }

    const initialValues = {
        title: "",
        materials: "",
        progress: "",
        
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().min(3).max(25).required("You must input a name for your project"),
        materials: Yup.string().required(),
        progress: Yup.string().required()
    })
//data should be smth like e.target value?

    // const onSubmit = (e) => {
    //     axios
    //     .patch("http://localhost:5500/projects/:id", e.target.value)
    //     .then((response) => {
    //         history.push("/current")
    //         console.log("This project was modified")
    //     })
    // }
   

    return ( 
        
        <div className="project-form">
            <Formik 
                initialValues={initialValues} 
                onSubmit={updateProject} 
                validationSchema={validationSchema}>
                <Form className="project project-field">
                    <label>Project name: </label>
                    <Field id="titleInput" name="title" placeholder="Enter a title"/>
                    <ErrorMessage name="title" component="span"/>
                    <label>Materials: </label>
                    <Field id="fieldsInput" name="materials" placeholder="What will you need?"/>
                    <ErrorMessage name="materials" component="span"/>
                    <label>Progress: </label>
                    <Field id="fieldsInput" name="progress" placeholder="What have you completed so far?"/>
                    <ErrorMessage name="progress" component="span"/>
                    <button type="submit">Update this project</button>
                </Form>
            </Formik>
        </div>
        
     );
}

export default EditProject;