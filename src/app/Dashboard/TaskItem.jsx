
import React, { useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/Ai';
import Link from 'next/link';

export default function TaskItem({ task, onEditTask, onDeleteTask} ) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });
  const handleEditClick = () => {
      setIsEditing(true);
  };
  const handleSaveClick = () => {
      onEditTask(editedTask);
      setIsEditing(false);
  };
  const handleCancelClick = () => {
      setIsEditing(false);
  };
  const handleDeleteClick = () => {
      onDeleteTask(task.id);
  };
  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedTask((prevTask) => ({
          ...prevTask,
          [name]: value,
      }));
  };
  return (
    
  <>
    {/* <h3 className="text-lg font-semibold">{task.taskName}</h3>
    // <p className="font-bold mt-2">Start date: {task.startDate}</p>
    // <p className="font-bold">End date: {task.endDate}</p> */}

<section className="border rounded p-4 mb-4">
            {isEditing ? (
    <>
             <input
                        type="text"
                        name="taskName"
                        value={editedTask.taskName}
                        onChange={handleInputChange}
                        className="border rounded p-2 w-full mb-2"
                    />
                    <input
                        type="date"
                        name="startDate"
                        value={editedTask.startDate}
                        onChange={handleInputChange}
                        className="border rounded p-2 mb-2"
                    />
                    <input
                        type="date"
                        name="endDate"
                        value={editedTask.endDate}
                        onChange={handleInputChange}
                        className="border rounded p-2 mb-2"
                        />

<button
                        onClick={handleSaveClick}
                        className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-2 hover:bg-blue-600"
                    >
                        Save
                    </button>
                    <button
                        onClick={handleCancelClick}
                        className="bg-gray-400 text-white px-4 py-2 rounded w-full hover:bg-gray-500"
                    >
                        Cancel
                    </button>
                </>
                ):(
                  <>
                   <h3 className="text-lg font-semibold">{task.taskName}</h3>
                  <p className="font-bold mt-2">Start date: {task.startDate}</p>
                  <p className="font-bold">End date: {task.endDate}</p> 
                

     
        <button onClick={handleEditClick} className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Edit
        </button>
    
      <button  onClick={handleDeleteClick} className="px-4 py-2 text-3xl text-red-500">
        <AiTwotoneDelete />
      </button>
   

</>  

)
}

</section>
  

</>
  )
}