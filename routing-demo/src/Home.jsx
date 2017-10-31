import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render(){
        return(
            <div>
                <h1>This is Home</h1>
                <Link to="/about">About</Link><br/>
                <Link to="/contact">Contact</Link>
            </div>
        )
    }
}

export default Home;