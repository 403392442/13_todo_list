import React, {useContext} from 'react';
import TodoContext from "../../../Context/TodoContext";

const Index = (props) => {
    const {dispatch} = useContext(TodoContext);
    const {id, text} = props.todo;

    const handleDispatchUndo = () => {
        dispatch({
            type: 'TOGGLE_TODO',
            id: id,
        })
    }

    const handleDispatchDelete = () => {
        dispatch({
            type: 'REMOVE_TODO',
            id: id,
        })
    }

    return (
        <div className='todo-item__div'>
            <span>{text}</span>
            <div className='todo-item-buttons__div'>
                <button onClick={handleDispatchUndo}>Undo</button>
                <button onClick={handleDispatchDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Index;