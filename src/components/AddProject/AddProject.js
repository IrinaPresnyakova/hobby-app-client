import React from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import '../Login/Login.scss'

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
        <div className="contents">
            <div className="input">
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form className="input-formik">
                        <label className="aux-text">Project name: </label>
                         <ErrorMessage name="title" component="span"/>
                        <Field className="input__field" id="titleInput" name="title" placeholder="Enter a title"/>
                       
                        <label className="aux-text">Materials: </label>
                        <ErrorMessage name="materials" component="span"/>
                        <Field className="input__field" id="fieldsInput" name="materials" placeholder="What will you need?"/>
                        
                        <label className="aux-text">Planning: </label>
                        <ErrorMessage name="progress" component="span"/>
                        <Field className="input__field" id="fieldsInput" name="progress" placeholder="Plan your project!"/>
                       
                        <div className="button-wrapper">
                            <button type="submit">Add a new project</button>
                        </div>
                        
                    </Form>
                </Formik>
            </div>
        </div>
            
        
     );
}

export default AddProject;