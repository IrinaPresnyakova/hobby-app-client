import React from "react";
import axios from 'axios';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProjects: [],
            bucketListProjects: [],
            archivedProjects: []
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:5500/')
    }

    render(){
        return <span>Loading...</span>
    }
}

export default Home