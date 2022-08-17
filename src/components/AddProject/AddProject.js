import React from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";

import * as Yup from 'yup'
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../../pages/CurrentProjects/CurrentProjects.scss"
import "./AddProject.scss"
const AddProject = () => {
    let history = useHistory();
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

    const onSubmit = (data) => {
        axios
        .post("http://localhost:5500/current", data)
        .then((response) => {
            history.push("/current")
            console.log("IT WORKED")
        })
    }

    

    return ( 
        
        <div className="project-form">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
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
                    <button type="submit">Add a new project</button>
                </Form>
            </Formik>
        </div>
        
     );
}

export default AddProject;