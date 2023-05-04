import {v4 as uuidv4} from 'uuid'

let num_id = 0;
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            num_id++;
            return [
                ...state,
                {
                    id: uuidv4(),
                    text: action.payload,
                    completed: false,
                    num_id: num_id,
                }
            ]

        case 'TOGGLE_TODO':
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo);

        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id);

        case 'UPDATE_CHANGE':
            return state.map(todo => todo.id === action.id ? {...todo, text: action.payload} : todo);

        case 'REMOVE_ALL_FINISHED':
            return state.filter(todo => todo.completed === false);

        default:
            return state;
    }
}

export default todoReducer;