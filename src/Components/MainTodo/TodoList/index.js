import React, {useContext} from 'react';
import TodoContext from "../../../Context/TodoContext";
import TodoTasks from "../TodoTasks";

const Index = () => {
    const {state} = useContext(TodoContext);

    return (
        <div className='todo-list-compartment__div'>
            <h3>On going ...</h3>
            <div className='todo-list-items__div'>
                {state.map(todo => (!todo.completed ?
                        (<TodoTasks
                            key={todo.id}
                            todo={todo}
                        />) : null
                ))}
            </div>
        </div>
    );
};

export default Index;