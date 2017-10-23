import React from 'react';
import Hello from './Hello';
import GoodBye from './GoodBye';

class Greeting extends React.Component {
    render() {
        let names = ['Jonathan', 'Nic', 'Sean', 'Simon', 'Anna', 'Danielle'];
        let namesJSX = [];

        for(let i = 0; i < names.length; i++ ) {
            namesJSX.push(<Hello name = {names[i]} />)
        }
        return (
            <div>
                {namesJSX}
            </div>
        )
    }
}

export default Greeting;