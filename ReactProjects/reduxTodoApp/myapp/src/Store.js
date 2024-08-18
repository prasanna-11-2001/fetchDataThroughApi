import { createStore } from 'redux'

const initialState = {
    todos: [],
    nextId: 1
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = { id: state.nextId, tittle: action.payload.tittle }
            return {
                ...state, todos: [...state.todos, newTodo], nextId: state.nextId + 1
            };

        case 'EDIT_TODO':
            return {
                ...state, todos: state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, tittle: action.payload.tittle } : todo
                )
            }

        case 'DELETE_TODO':
            return {
                ...state, todos: state.todos.filter(
                    (todo) => todo.id !== action.payload
                )
            }

        default:
            return state;
    }
}
const store = createStore(todoReducer)
export default store