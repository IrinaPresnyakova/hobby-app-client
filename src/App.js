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

function App () {
 
    return(
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
              </Switch>
      </BrowserRouter>
    )
}

export default App;
