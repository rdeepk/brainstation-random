import React from 'react';

class Clicker extends React.Component{
    constructor() {
        super();
        //we need to bind this to the function clicked because it is called onClick which is a window object
        //we dont need it in case if we use arrow function because it will automativally bind this object
        //this.clicked = this.clicked.bind(this);
        this.state= {
            timesClicked: 0
        }
    }

    clicked = () => {
        this.setState({
            timesClicked: this.state.timesClicked +1
        });
    }

    render() {
        return(
            <div>
                <div><button type="button" onClick={this.clicked}>Click</button></div>
                <h2>I've been clicked {this.state.timesClicked} times.</h2>
            </div>
        )
    }
}

export default Clicker;