import React, { useState, useEffect } from "react"

function TodoApp() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  // Load tasks from local storage on initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"))
    if (storedTasks) {
      setTasks(storedTasks)
    }
  }, [])

  // Save tasks to local storage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const handleChange = e => {
    setTask(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (task.trim() !== "") {
      setTasks([...tasks, task])
      setTask("")
    }
  }

  const handleDelete = index => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <div className="container mt-5 mb-5">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit} className="form-inline">
        <input type="text" value={task} onChange={handleChange} placeholder="Enter task..." className="form-control mr-2" />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
      <ul className="list-group mt-3">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {task}
            <button onClick={() => handleDelete(index)} className="btn btn-danger btn-sm">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp
