import Header from './components/Header'
import Tasks from './components/Tasks'

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

  return (
    <div className="App">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
