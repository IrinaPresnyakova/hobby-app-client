import React from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import "../../components/Card/Card.scss"
// import "./AddProject.scss"
import * as Yup from 'yup'
import axios from "axios";
import { useHistory } from "react-router-dom";
import './AddIdea.scss'

const AddIdea = () => {
    let history = useHistory();
    const initialValues = {
        title: "",
        bucketList: "bucketed"
        
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().min(3).max(50).required("You must input a name for your project"),
       
    })

    const onSubmit = (data) => {
        axios
        .post("http://localhost:5500/bucket-list", data)
        .then((response) => {
            history.push("/bucket-list")
        })
        .catch((err) => {
            console.log(err);
        })
    }

    

    return ( 
        
        <div className="project-form contents">
            <Formik className="" initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="project project-field contents contents--background">
                    <label></label>
                    <Field id="titleInput" name="title" placeholder="Enter a title"/>
                    <ErrorMessage name="title" component="span"/>
                    <button type="submit">Add a new idea</button>
                </Form>
            </Formik>
        </div>
        
     );
}

export default AddIdea;