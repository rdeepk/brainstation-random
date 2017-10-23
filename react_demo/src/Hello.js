import React from 'react';
import './hello.css';

class Hello extends React.Component {
    render() {
        let helloStyle = {
            color: "red",
            fontWeight: "bold"
        }
        console.log(this.props.style)
        return <p className="helloStyle">Hello {this.props.name}</p>;
    }
}

export default Hello;