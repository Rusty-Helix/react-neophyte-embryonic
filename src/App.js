import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

// App is also a component
const App = () => { // same as the file name

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])


// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id
  ? ({ ...task, reminder:!task.reminder}) : task))
}

  return (
    // this can only return 1 element
    <div className="container">
      <Header 
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      

      {showAddTask && <AddTask onAdd={addTask} />}
      
      {tasks.length > 0 ? <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      /> : 'no task available'}
      
    </div>
    // jsx expression must have one element
  );
}

export default App;
