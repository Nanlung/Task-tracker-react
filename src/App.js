import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="App">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : <h3>"No Tasks Available"</h3>}
    </div>
  );
}

export default App;
