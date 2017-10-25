import React, {Component} from 'react';

class TodoList extends Component {
    render(){
        let todosJSX = this.props.todos.map((todo, i) => {
            return(
                <li key={i}>{todo.text}</li>
            )
        })
        return (
        <ul>
            {todosJSX}
        </ul>
        )
    }
}

export default TodoList;