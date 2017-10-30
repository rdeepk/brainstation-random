import React from 'react';

class About extends React.Component {
    render(){
        return(
            <div>
                <h1>About Me</h1>
                <br />
                <a href="#home" onClick={() => {this.props.changePage('home')}}>Go Home</a>
            </div>
        )
    }
}

export default About;