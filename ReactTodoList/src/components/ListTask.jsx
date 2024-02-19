import Task from "./Task";

const ListTask = ({task, setTask,showCompleted}) =>{
    const toggleCompleted = (id) =>{
        setTask(task.map( (task)=> {
            if(task.id === id){
                return {...task, complete: !task.complete}
            }
            return task;
        }))
    }

    const editingTask = (id, newText) => {
		setTask(task.map((task) => {
			if(task.id === id){
				return {...task, text: newText}
			}
			return task;
		}));
	}

	const deleteTask = (id) => {
		setTask(task.filter((task) => {
			if(task.id !== id){
				return task;
			}
			return;
		}));
	}
    return(
        <ul className="list-task ">
            {task.length > 0 ? task.map((task) =>{
                if(showCompleted){
                    return <Task 
                key={task.id}
                task={task}
                toggleCompleted={toggleCompleted}
                editingTask={editingTask}
                deleteTask={deleteTask}
                />
                } else if(!task.complete){
                    return <Task 
                    key={task.id}
                    task={task}
                    toggleCompleted={toggleCompleted}
                    editingTask={editingTask}
                    deleteTask={deleteTask}
                    />  
                }
                return;
            })
            : <div className="list-task__msn">~~No tasks added ~~</div>
        }

        </ul>
    );
}

export default ListTask;