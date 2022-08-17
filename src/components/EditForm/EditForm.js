import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage} from "formik";
import "../../pages/CurrentProjects/CurrentProjects.scss"
import "../AddProject/AddProject.scss"
import * as Yup from 'yup'
import axios from "axios";


const EditProject = () => {
    let history = useHistory(); 
    let { id } = useParams();
    const [projectObject, setProjectObject] = useState ({});

    //rendering old data in the form on load
    useEffect(() => {
            axios
                .get(`http://localhost:5500/projects/${id}`)
                .then((response) => {
                    setProjectObject(response.data); 
            });
    }, [])

    const { title, materials, progress } = projectObject;

    const prefilledValues = {
        title: title,
        materials: materials,
        progress: progress   
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().min(3).max(25).required("You must input a name for your project"),
        materials: Yup.string().required(),
        progress: Yup.string().required()
    })

    // const handleOnChange = (event) => {
    //     event.persist();
        // let name = event.target.name;
        // let value = event.target.value; 
        // setProjectObject({...projectObject, [event.target.name]: event.target.value})
    //     console.log("Form::onChange", projectObject);
    // }

    const updateProject = (data) => {
        axios
            .patch(`http://localhost:5500/edit-project/${id}`, data)
            .then((response) => {
                console.log(data);
                // setProjectObject(response.data)
                history.push("/current")
                console.log("This project was modified")
            })
        }

    return ( 
        
        <div className="project-form">
            <Formik 
                initialValues={prefilledValues} 
                onSubmit={updateProject} 
                validationSchema={validationSchema}
                enableReinitialize={true}
                >
                <Form 
                    // onChange={handleOnChange} 
                    className="project project-field">
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