import React from 'react';
import Hello from './Hello';
import GoodBye from './GoodBye';

class Greeting extends React.Component {
    render() {
        let name = 'Jonathan'
        return (
            <div>
                <Hello name={name} />
                <GoodBye firstName='Nic' lastName='Tamura'/>
            </div>
        )
    }
}

export default Greeting;