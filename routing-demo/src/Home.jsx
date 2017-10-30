import React from 'react';

class Home extends React.Component {
    render(){
        return(
            <div>
                <h1>This is Home</h1>
                <a href="#about" onClick={()=>{this.props.changePage('about')}}>About</a><br />
                <a href="#contact" onClick={() => {this.props.changePage('contact')}}>Contact</a>
            </div>
        )
    }
}

export default Home;