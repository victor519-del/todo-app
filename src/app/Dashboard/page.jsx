"use client"
import { useState } from "react"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"
import { BsArrowLeft } from 'react-icons/bs'
import Link from "next/link"

export default function Home() {
  
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
  }

  // const handleAddTask = (newTask) => {
  //   setTasks([...tasks, newTask]);
  // };


  return (
    <body>
 
    
          <Link href='/'><div className="text-2xl"><BsArrowLeft /></div></Link>
          <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-lg font-extrabold bg-slate-600 text-white p-4">My Task Management App</h1>
            <div className="mt-8 items-center">
            <TaskForm onAddTask={handleAddTask}/>
            <TaskList tasks={tasks} onDeleteTask={handleDeleteTask}/>
            </div>
          </main>

    </body>
  );
}
