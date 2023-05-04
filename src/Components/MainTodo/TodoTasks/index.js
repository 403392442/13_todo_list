import React, {useContext, useState} from 'react';
import TodoContext from "../../../Context/TodoContext";

const Index = (props) => {
    const {dispatch} = useContext(TodoContext);
    const {id, text} = props.todo;

    const [newText, setNewText] = useState(text);
    const [isEditing, setIsEditing] = useState(false);

    const handleNewText = (event) => {
        const input = event.target.value;
        setNewText(input);
    }

    const handleDispatchFinish = () => {
        dispatch({
            type: 'TOGGLE_TODO',
            id: id,
        })
    }

    const handleIsEditing = () => {
        setIsEditing(!isEditing);
    }

    const handleDispatchUpdate = () => {
        dispatch({
            type: 'UPDATE_CHANGE',
            id: id,
            payload: newText,
        })
        setIsEditing(false);
    }

    const handleDispatchDelete = () => {
        dispatch({
            type: 'REMOVE_TODO',
            id: id,
        })
    }

    return (
        <div className='todo-item__div'>
            {isEditing ? (
                <>
                    <input type="text" value={newText} onChange={event => handleNewText(event)}/>
                    <div className='todo-item-buttons__div'>
                        <button onClick={handleDispatchUpdate}>Update</button>
                        <button onClick={handleIsEditing}>Cancel</button>
                    </div>

                </>
            ) : (
                <>
                    <span>{text}</span>
                    <div className='todo-item-buttons__div'>
                        <button onClick={handleIsEditing}>Edit</button>
                        <button onClick={handleDispatchFinish}>Finish</button>
                        <button onClick={handleDispatchDelete}>Delete</button>
                    </div>

                </>
            )}

        </div>
    );
};

export default Index;