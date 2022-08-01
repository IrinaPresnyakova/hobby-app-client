import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import './App.css';
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import CurrentProjects from './pages/CurrentProjects/CurrentProjects';
// import ArchivedProjects from './pages/ArchivedProjects/ArchivedProjects'
// import BucketListProjects from './pages/BucketList/BucketListProjects'

class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
          <Header />
      <Switch>            
          <Route path="/" exact component={Home} /> 
          <Route path="/current" component={CurrentProjects} />            
          {/* <Route path="/archived" component={ArchivedProjects} />  
          <Route path="/bucket-list" component={BucketListProjects} />  */}
      </Switch>
  </BrowserRouter>
    )} 
}

export default App;
