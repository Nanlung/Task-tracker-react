import { useState} from 'react'



const Tasks = () => {

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
    <div>
      {tasks.map((task) =>(<h3 key={task.id}>  {task.text}</h3>) ) }
    </div>
  )
}

export default Tasks
