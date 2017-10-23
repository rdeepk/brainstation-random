import React from 'react';

class Hello extends React.Component {
    render() {
        let helloStyle = {
            color: "red",
            fontWeight: "bold"
        }
        console.log(this.props.style)
        return <p style={this.props.style}>Hello {this.props.name}</p>;
    }
}

export default Hello;