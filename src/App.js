
import React from 'react'
import { useState } from "react"
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';


function App() {

  const [showAddTask, setshowAddTask] = useState(false)
  const [tasks, setTasks] = useState([

    {
        id:1,
        text: 'Yoga - Surya Namaskar',
        day: '30 March 2023 at 6:00 AM',
        reminder: true
    },
    {
        id:2,
        text: 'Scrum Meeting',
        day: '30 March 2023 at 7:30 AM',
        reminder: true
    },
    {
        id:3,
        text: 'Breakfast',
        day: '30 March 2023 at 8:30 AM',
        reminder: false
    },
    {
        id:4,
        text: 'Training',
        day: '30 March 2023 at 9:00 AM',
        reminder: true
    }

])

  // delete task

  const deleteTask = (id) => {
    // updating the state...which excludes item whose id is passed
      setTasks(tasks.filter((task) => task.id !== id))
  }

  const onTaskReminder =(id) =>{
    setTasks(
      tasks.map((task)=> task.id===id ?{...task,reminder:!task.reminder}: task))
  }
const addTask=(task)=>{
  const id= Math.floor(Math.random*10000+1)
  const newtask={id,...task}
  setTasks([...tasks,newtask])
}

const clickadd=()=>
{
  setshowAddTask(!showAddTask)
    
}

  return (
    <div className="container">
      <Header onAdd={clickadd} />
      {showAddTask &&<AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask}
      onReminder={onTaskReminder}/>
      : 'No Tasks Available for Today'}
    </div>
  );
}

export default App;
