"use client"

import { useState } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

export default function Home() {
  const [tasks, setTasks] = useState([])

  const handleAddTodo = (newTask) => {
    setTasks([...tasks, newTask])
  }
  return (
    <main>
      <h1>my task management app</h1>
      <TaskForm onAddTask={handleAddTodo} />
      <TaskList tasks={tasks} />
    </main>
  )
}
