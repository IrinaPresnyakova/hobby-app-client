import React from 'react'
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'
import axios from "axios";
import '../Login/Login.scss'
import { useHistory} from "react-router-dom";

export default function Signup() {
    const history = useHistory();
    const initialValues = {
        username: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(25).required("Please enter a name"),
        password: Yup.string().min(3).max(25).required("Please enter a password")
    })

    const onSubmit = (data) => {
        axios
            .post("http://localhost:5500/auth", data)
            .then((response) => {
                alert("Thank you for signing up, please log in to start planning")
                history.push('/')
            })
            .catch((err) => {
                console.log(err);
            })
        
    }


  return (
    <div className='content'>
        <div className="input">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="project project-field">
                    <label className='aux-text'>You user name: </label>
                    <ErrorMessage name="username" component="span"/>
                    <Field 
                        name="username" 
                        placeholder="E.g., Irina_P"
                        className="input__field"
                        autoComplete='off'
                        />
                        
                    
                    <label className='aux-text'>Your password: </label>
                    <ErrorMessage name="materials" component="span"/>
                    <Field  
                        type="password" 
                        name="password" 
                        placeholder="E.g., password123"
                        className="input__field"/>
                    
                    <div className='contents' id='signup'>
                        <button type="submit">Sign up</button>
                    </div>
                    
                </Form>
            </Formik>
        </div>
    </div>
        
  )
}
