import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";

const TaskFormPage = () =>
{

  const { register, handleSubmit } = useForm();

  const {createTask} = useTasks()

  const onSubmit = handleSubmit((data) => {
    createTask(data)
  }) 

  return (
    <>
      <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className='bg-red-900 max-w-md p-10 rounded-md'>
          <h1 className="flex justify-center font-medium text-xl">Add Task</h1>
          <form  onSubmit={onSubmit}>
            <input type="text" className='w-full bg-red-700 text-white px-4 py-2 rounded-md my-2' placeholder='Title' {...register('title')} />
            <textarea rows='4' className='w-full bg-red-700 text-white px-4 py-2 rounded-md my-2' placeholder='Description' {...register('description')} />
            <button type="submit" className="w-full bg-red-600 hover:bg-red-400 text-white px-4 py-2 rounded-md my-2">Save</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default TaskFormPage