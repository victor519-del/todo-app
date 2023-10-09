"use client"
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"

export default function TaskForm({onAddTask}) {
    const [taskName, setTaskName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        const newTask = {
            id: uuidv4(),
            taskName,
            startDate,
            endDate
        }
        onAddTask(newTask)
        setTaskName('')
        setStartDate('')
        setEndDate('')
    }
  return (
    <>
    <div className="border-slate-700 border-4 border-solid">
    <form onSubmit={handleClick}>
        <input 
        type="text" 
        name="text" 
        placeholder="add a task" className="border-solid border-4 b0rder-slate-400 items-center"
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)}/>

        <br /><label >Start date: </label>
        <input type="date" 
        name="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        />
       
       <br /><label className="font-bold ">End date: </label>
        <input type="date" 
        name="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        />

       <br /> <button type="submit" className="bg-slate-500 text-center">Add todo</button>
    </form>
    </div>
    </>
  )
}
