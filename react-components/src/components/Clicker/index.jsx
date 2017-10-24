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
        //every time state is set render is called again because it is using state.
        //set state is async and its possible the state is not updated right away. To make sure it is updated use a callback function
        this.setState({
            timesClicked: this.state.timesClicked +1
        }, function(){
            console.log(this.state.timesClicked);
        });
        console.log(this.state.timesClicked);
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