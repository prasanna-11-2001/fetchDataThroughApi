import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './Actions'
import TodoList from './TodoList'
const App = () => {
  const dispatch = useDispatch()
  const [todoTittle, setTodoTittle] = useState('');

  const changeHandler = (e) => {
    setTodoTittle(e.target.value);
  }

  const handleTodo = () => {
    if (todoTittle.trim()) {
      const newTodo = {
        tittle: todoTittle
      }
      dispatch(addTodo(newTodo))
      setTodoTittle('')
    }
  }
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-3'></div>


        <div className='col-md-6'>
          <h3 className='text-primary text-center p-3'>Todo App using React-Redux</h3>
          <div className='d-flex flex-row mb-5'>
            <input type='text' className='form-control' name='todoTittle' value={todoTittle} onChange={changeHandler} />
            <button className='btn btn-primary button' onClick={handleTodo}>Add</button>
          </div>
          <TodoList />
        </div>


        <div className='col-md-3'></div>
      </div>
    </div>
  )
}

export default App
