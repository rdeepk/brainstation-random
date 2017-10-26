import React, {Component} from 'react';
import Todo from '../Todo';
import propTypes from 'prop-types';

class TodoList extends Component {
    render(){
        let todosJSX = this.props.todos.map((todo, i) => {
            return(
               <Todo key={i}
               text={todo.text}
               done={todo.done}
               toggleDone={this.props.toggleDone}
               index={i} />
            )
        })
        return (
        <ul>
            {todosJSX}
        </ul>
        )
    }
}

TodoList.propTypes = {
    todos: propTypes.array.isRequired
}

export default TodoList;