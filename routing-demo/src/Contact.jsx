import React from 'react';

class Contact extends React.Component {
    render(){
        return(
            <div>
                <h1>Contact</h1>
                <br />
                <a href="#home" onClick={() => {this.props.changePage('home')}}>Go Home</a>
            </div>
        )
    }
}

export default Contact;