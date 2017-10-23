import React from 'react';

class Hello extends React.Component {
    render() {
        let helloStyle = {
            color: "red",
            fontWeight: "bold"
        }
        return <p style={helloStyle}>Hello {this.props.name}</p>;
    }
}

export default Hello;