import React, {useReducer} from 'react';

import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import FinishedList from "./FinishedList";
import todoReducer from "../../Reducer/todoReducer";
import TodoContext from "../../Context/TodoContext";

const Index = () => {

    const [state, dispatch] = useReducer(todoReducer, []);

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            <div className='todo-app-container__div'>
                <div className='todo-input-container__div'>
                    <h1>TODO LIST APP</h1>
                    <InputTodo />
                </div>
                <hr/>
                <div className='todo-list-container__div'>
                    <TodoList />
                    <hr/>
                    <FinishedList />
                </div>
            </div>
        </TodoContext.Provider>
    );
};

export default Index;