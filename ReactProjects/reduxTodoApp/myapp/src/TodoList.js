import React from 'react'
import { useSelector } from "react-redux";
import Todo from './Todo';
const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    //console.log(todos);
    return (
        <div>
            <ul className='list-group'>
                {
                    todos.map(
                        (todo) => (
                            <Todo key={todo.id} id={todo.id} tittle={todo.tittle} />
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default TodoList
