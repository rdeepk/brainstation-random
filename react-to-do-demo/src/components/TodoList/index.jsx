import React, {Component} from 'react';
import Todo from '../Todo';

class TodoList extends Component {
    render(){
        let todosJSX = this.props.todos.map((todo, i) => {
            return(
               <Todo key={i}
               text={todo.text}
               done={todo.done} />
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