import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormTask =({task, setTask}) =>{
    const [inputTask, setInputTask] = useState('');
    const handleInput = (value) => {
        setInputTask(value);
    }
   


    const handleSubmit = (e) => {
        e.preventDefault();

        setTask(
            [
                ...task, 
                {
                    id: uuidv4(),
                    text: inputTask,
                    complete: false
                }
            ]
        );
        setInputTask('');
    }

    return (
        <form action="" className="form-task" onSubmit={handleSubmit}>
            <input type="text" 
            className="form-task__input" 
            placeholder="Write your task" 
            value={inputTask}
			onChange={(e) => handleInput(e.target.value)}/>
            <button type="sumit" className="form-task__btn">
            <FontAwesomeIcon 
					icon={faPlusSquare}
					className="form-task__icon-btn" 
				/>
           
            </button>
        </form>
    )
}

export default FormTask;