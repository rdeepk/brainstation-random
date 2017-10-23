import React from 'react';

class Greeting extends React.Component {
    render() {
        let name = 'Jonathan'
        return (
            <div>
                <h1>Hello {name}</h1>
                <h1>GoodBye {name}</h1>
            </div>
        )
    }
}

export default Greeting;