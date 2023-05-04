import React, {useContext} from 'react';
import TodoContext from "../../../Context/TodoContext";
import FinishedTasks from '../FinishedTasks'

const Index = () => {
    const {state} = useContext(TodoContext);

    return (
        <div className='todo-list-compartment__div'>
            <h3>Finished</h3>
            <div className='todo-list-items__div'>
                {state.map(todo => (todo.completed ?
                        (<FinishedTasks
                            key={todo.id}
                            todo={todo}
                        />) : null
                ))}
            </div>
        </div>
    );
};

export default Index;