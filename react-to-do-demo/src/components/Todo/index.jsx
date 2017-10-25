import React, {Component} from 'react';

class Todo extends Component {
    render(){
            return (
                <li>
                    <input type="checkbox" name="status" checked={this.props.done} />
                    {this.props.text}
                </li>
            )
    }
}

export default Todo;