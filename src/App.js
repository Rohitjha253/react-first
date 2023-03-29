import logo from './logo.svg';
import React, { useState } from 'react'

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Task from './components/Task';

function App() {

   const[tasks,setTasks]=useState(
    [
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
    ]
   )

  return (
    <div className="container">
      <Header></Header>
      <Task tasks={tasks}></Task>
      <Footer></Footer>
    </div>
    
  );
}

// class App extends React.Component {
//     render() {
//       return <h1>Welcome from React Class</h1>
//     }
// }

export default App;
