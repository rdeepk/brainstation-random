import React from 'react';

class GoodBye extends React.Component {
    render() {
        return <h1>Good Bye {this.props.firstName} {this.props.lastName}</h1>;
    }
}

export default GoodBye;