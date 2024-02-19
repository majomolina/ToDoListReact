import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare, faEdit, faSquare, faTimes} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Task= ({task, toggleCompleted, editingTask,deleteTask}) => {
    const [editTask, setEditTask]= useState(false);
    const [newTask, setNewTask]= useState(task.text);

    const handleSubmit = (e) => {
        e.preventDefault()
        editingTask(task.id, newTask);
        setEditTask(false);
        
    }

    return (  
     <li className="list-task__task">
        <FontAwesomeIcon 
        icon={task.complete ? faCheckSquare : faSquare}
        className='list-task__icon list-task__icon-check'
        onClick={() => toggleCompleted(task.id)}
        />
        <div className='list-task__text '>
        {editTask ?
        <form action="" className="form-edit-task " onSubmit={handleSubmit} >
        <input 
            type="text"
            className="form-edit-task__input"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
        />
        <button 
            type="submit" 
            className="form-edit-task__btn"
        >
            Update
        </button>
    </form>
    : task.text
    }
        </div>
        <div className='list-task__container-btn'>
        <FontAwesomeIcon 
        icon={faEdit}
        className='list-task__icon list-task__icon-action'
        onClick={() => setEditTask(!editTask)}
        />
        <FontAwesomeIcon 
        icon={faTimes}
        className='list-task__icon list-task__icon-action'
        onClick={() => deleteTask(task.id)}
        />
        </div>
        </li>   
    );
}
 
export default Task;