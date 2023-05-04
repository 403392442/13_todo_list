import React, {useContext, useState} from 'react';
import TodoContext from "../../../Context/TodoContext";

const Index = () => {
    const {dispatch} = useContext(TodoContext);
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim() !== '') {
            dispatch({
                type: 'ADD_TODO',
                payload: input,
            })
            setInput('')
        }
    }

    const handleInput = (event) => {
        const inputValue = event.target.value;
        setInput(inputValue);
    }

    const handleDispatchDeleteFinished = () => {
        dispatch({
            type: 'REMOVE_ALL_FINISHED',
        })
    }

    return (
        <form onSubmit={event => handleSubmit(event)} className='todo-input-form__div'>
            <input type="text" value={input} onChange={event => handleInput(event)} placeholder="Input task"/>
            <button type='submit'>Add</button>
            <button type='button' onClick={handleDispatchDeleteFinished}>Delete Finish</button>
        </form>
    );
};

export default Index;