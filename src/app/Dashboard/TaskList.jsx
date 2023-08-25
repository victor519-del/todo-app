import TaskItem from "../Dashboard/TaskItem"

export default function TaskList({tasks}) {
  
// const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {
  const handleDeleteTask = (taskId) => {
      onDeleteTask(taskId);
  };

  const handleEditTask = (taskId, updatedTaskName) => {
      onEditTask(taskId, updatedTaskName);
  };
  return (
    <section className="space-y-4">
        {tasks.map( task => (
            <TaskItem key={task.id} 
            task={task}
            onEditTask={handleEditTask}
             onDeleteTask={handleDeleteTask}
            />
        ))}
    </section>
  )
}

