import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component {
    render(){
        return(
            <div>
                <h1>About Me</h1>
                <br />
                <Link to="/home">Go Home</Link>
            </div>
        )
    }
}

export default About;