import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState(
    [
  {
    id: 1,
    text: "Volley Ball game",
    day: "Thursday, May 6 2021",
    reminder: true
  },
  {
    id: 2,
    text: "Community Meeting",
    day: "Friday, May 7 2021",
    reminder: true
  }
]

  )

  const addTask = (task) => {
    console.log(task);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Reminder function
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)

    )}

  return (
    <div className="App">
      <Header title="Task Tracker" />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <h3>"No Tasks Available"</h3>}
    </div>
  );
}

export default App;
