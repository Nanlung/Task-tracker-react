const tasks = [
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

const Tasks = () => {
  return (
    <div>
      {tasks.map((task) =>(<h3>{task.text}</h3>) ) }
    </div>
  )
}

export default Tasks
