import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import './App.css';
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import CurrentProjects from './pages/CurrentProjects/CurrentProjects';
import AddProject from "./components/AddProject/AddProject";
import SingleProject from "./pages/SingleProject/SingleProject";
import ArchivedProjects from './pages/ArchivedProjects/ArchivedProjects'
import SingleArchived from "./pages/SingleArchived/SingleArchived";
import BucketListProjects from './pages/BucketList/BucketListProjects'
import AddIdea from "./components/AddIdea/AddIdea";
import SingleBucketList from "./pages/SingleBucketList/SingleBucketList";
import EditForm from "./components/EditForm/EditForm";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import { AuthContext } from "./utils/AuthContext";
import { useState } from 'react';

function App () {
    
    // const [loginState, setLoginState] = useState(false)

    return(
        // <AuthContext.Provider value={{ loginState, setLoginState }}>
            <BrowserRouter>
                <Header />
                <Switch>            
                    <Route path="/" exact component={Home} /> 
                    <Route path="/current" component={CurrentProjects} />  
                    <Route path="/projects/:id" component={SingleProject} />
                    <Route path="/add-project" component={AddProject}/>          
                    <Route path="/archive" component={ArchivedProjects} />
                    <Route path="/archive-view/:id" component={SingleArchived} />
                    <Route path="/bucket-list" component={BucketListProjects} />
                    <Route path="/add-idea" component={AddIdea} />
                    <Route path="/bucket-list-view/:id" component={SingleBucketList} />
                    <Route path="/edit-project/:id" component={EditForm} />
                    <Route path="/auth" exact component={Signup} /> 
                    <Route path="/auth/login" exact component={Login} /> 

                    {/* <Route /> */}
                </Switch>
            </BrowserRouter>
        // </AuthContext.Provider>
    )
}

export default App;
