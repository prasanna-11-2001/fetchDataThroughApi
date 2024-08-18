import React, { useState } from 'react'
import { editTodo, deleteTodo } from './Actions'
import { useDispatch } from 'react-redux'

const Todo = ({ id, tittle }) => {
    const [edit, setEdit] = useState(false)
    const [newTittle, setNewTittle] = useState(tittle)
    const dispatch = useDispatch()
    const editHandler = () => {
        setEdit(true)
    }
    const saveHandler = () => {
        if (newTittle.trim()) {
            dispatch(editTodo({ id: id, tittle: newTittle }))
            setEdit(false)
        }
    }
    const deleteHandler = () => {
        dispatch(deleteTodo(id))
    }
    return (
        <div>
            {
                edit ? (
                    <div className='form-group d-flex flex-row'>
                        <input type='text' className='form-control' value={newTittle} onChange={(e) => setNewTittle(e.target.value)} />
                        <button className='btn btn-secondary button' onClick={saveHandler}>Save</button>
                    </div>
                )

                    : (
                        <li className='list-group-items'>
                            <p className='tittle-todo'>{tittle}</p>
                            <div className='actions'>
                                <button className='btn btn-warning button' onClick={editHandler} >Edit</button>
                                <button className='btn btn-danger button' onClick={deleteHandler}>Delete</button>
                            </div>
                        </li>
                    )
            }
        </div>
    )
}

export default Todo
