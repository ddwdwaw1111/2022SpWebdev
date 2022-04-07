import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
function App() {
  const[showAddTask,setShowAddTask] = useState(false)

  const showForm = () =>{

    setShowAddTask(!showAddTask)
  }
  //Delete Function
  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  const toggleReminder = (id)=>{
    console.log(id)
    setTasks(
        tasks.map(
            (task)=> task.id === id ? {...task, reminder: !task.reminder} : task
          )
        )
  }

  const addTask = (task)=>{
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask])
  }
  const [tasks,setTasks] = useState([
    {
      id:'1',
      text:'CS course',
      day: 'Feb 5th at 2:30pm',
      reminder: 'true'
    },
    {
      id:'2',
      text:'Art Course',
      day: 'Feb 5th at 4:00pm',
      reminder:'true'
    },
    {
      id:'3',
      text:'Math Course',
      day: 'Feb 5th at 5:00pm',
      reminder: 'true'
    }
  ])
  return (
    <div className="container">

      <Header title = 'Task Tracker' onAdd={showForm} showAddTask = {showAddTask} ></Header>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {
        tasks.length > 0 
        ? 
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        :
        (<div>There is no task</div>)
      }
      
    </div>
  );
}

export default App;
