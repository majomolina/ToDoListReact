import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/header'
import FormTask from './components/FormTask'
import ListTask from './components/ListTask'
import { json } from 'react-router-dom'
import Header2 from './components/header2'

function App() {
  //se obtienen las tarares guardadas
  const saveTask = 
  localStorage.getItem('tareas') ? 
  JSON.parse(localStorage.getItem('tareas')) : [];
//estado de la tarea
  const [task, setTask] = useState(saveTask);
//guarda el estado dentro de locals
useEffect(() => {
  localStorage.setItem('tareas', JSON.stringify(task));
},[task])

  // Acceder a localstorage y comprobar si mostrarCompletadas es null
  // let configShowCompleted = '';
  // if(localStorage.getItem('showCompleted') === null){
  //   configShowCompleted = true;
  // } else {
  //   configShowCompleted = localStorage.getItem('showCompleted') === 'true';
  // }

//muestra la tarea completadas
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    localStorage.setItem('showCompleted', showCompleted.toString());
  }, [showCompleted]);
  return (
    <>
    <div className='container'>
   <Header2/>
    <Header showCompleted={showCompleted} setShowCompleted={setShowCompleted} />
    <FormTask task={task} setTask={setTask}/>
    <ListTask 
    task={task} 
    setTask={setTask} 
    showCompleted={showCompleted}
    />
    </div>
    </>
  )
}

export default App
