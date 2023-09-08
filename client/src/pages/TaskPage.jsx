import { useEffect } from "react";
import { useTasks } from "../context/AuthContext";

const TaskPage = () => {
  
  const { task, getTasks } = useTasks()
  console.log(task)

  useEffect

  return (
    <div>TaskPage</div>
  )
}

export default TaskPage