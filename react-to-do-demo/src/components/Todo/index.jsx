import React, {Component} from 'react';
import propTypes from 'prop-types';

class Todo extends Component {

    render(){
            return (
                <li>
                    <input  type="checkbox"
                            name="status"
                            checked={this.props.done}
                            // if our onChange function does not have an argument we will simply use {this.props.toggleDone} but since we have an argument and if we do {this.props.toggleDone(this.props.index)} react will call it right away and not wait for onChange event, because it treats this as a functon invokation. To handle it we will pass a parameter to function by turning it into another anonymous functon as done below.
                            onChange={
                                () => {this.props.toggleDone(this.props.index)}
                                } 
                    />
                    {this.props.text}
                </li>
            )
    }
}

Todo.propTypes = {
    done: propTypes.bool.isRequired,
    text: propTypes.string.isRequired,
    toggleDone: propTypes.func.isRequired,
    index: propTypes.number.isRequired
}

export default Todo;