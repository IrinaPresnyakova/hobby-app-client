// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from "axios";
// import { useHistory } from "react-router-dom";


// const AddEdit = ({history, match}) => {
//     const { id } = match.params;
//     const isAddMode = !id;

//     const initialValues = {
//         title: "",
//         materials: "",
//         progress: "",
//     };

//     const validationSchema = Yup.object().shape({
//         title: Yup.string().min(3).max(25).required("You must input a name for your project"),
//         materials: Yup.string().required(),
//         progress: Yup.string().required()
//     })

//     const onSubmit = (fields, { setStatus, setSubmitting }) => {
//         setStatus();
//         if (isAddMode) {
//             createProject(fields, setSubmitting);
//         } else {
//             updateProject(id, fields, setSubmitting);
//         }
//     }

//     const createProject = (fields, setSubmitting) => {
//         axios
//             .post("http://localhost:5500/current", fields)
//             .then((response) => {
//                 history.push("/current")
//                 console.log("IT WORKED")
//             })
//             .catch((error) => {
//                 setSubmitting(false);
//                 alert.error(error);
//             });
//     }

//     const updateProject = (id, fields, setSubmitting) => {
//         axios
//             .patch(`http://localhost:5500/projects/${id}`)
//             .then((response) => {
//                 // console.log(response.data);
//                 alert("This project was modified")
//                 history.push("/current")
//             })
//             .catch((error )=> {
//                 setSubmitting(false);
//                 alert.error(error);
//             });
//     }


//     return (
//         <div className="project-form">
//             <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
//                 {(
//                     {isSubmitting, setFieldValue}) => {
//                         const [ Pproject, setProject] = useState({})

//                         useEffect(() => {
//                             if (!isAddMode) {

//                                 const fields = ["title", "materials", "progress"];
//                                 fields.forEach(field => setFieldValue(field, false));
//                             }
//                         });
//                     }
//                 }
                
//             </Formik>
//         </div>
//     )
        
    
// }

// export default AddEdit 