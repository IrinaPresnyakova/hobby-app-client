import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import './App.css';

import Home from './pages/Home/Home'
// import CurrentProjects from './pages/CurrentProjects/CurrentProjects'
// import ArchivedProjects from './pages/ArchivedProjects/ArchivedProjects'
// import BucketListProjects from './pages/BucketList/BucketListProjects'


class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
      {/* <Header /> */}
      {/* Routes replaced Switch in latest react-router-dom */}
      <Routes>            
          <Route path="/" exact component={Home} /> 
          {/* <Route path="/current" component={CurrentProjects} />            
          <Route path="/archived" component={ArchivedProjects} />  
          <Route path="/bucket-list" component={BucketListProjects} />  */}
      </Routes>
  </BrowserRouter>
    )} 
}

export default App;
