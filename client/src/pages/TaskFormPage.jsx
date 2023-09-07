const TaskFormPage = () =>
{
  return (
    <>
      <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className='bg-red-900 max-w-md p-10 rounded-md'>
          <h1 className="flex justify-center font-medium text-xl">Add Task</h1>
          <form  >
            <input type="text" className='w-full bg-red-700 text-white px-4 py-2 rounded-md my-2' placeholder='Title' />
            <textarea rows='4' className='w-full bg-red-700 text-white px-4 py-2 rounded-md my-2' placeholder='Task' />
            <button type="submit" className="w-full bg-red-600 hover:bg-red-400 text-white px-4 py-2 rounded-md my-2">Save</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default TaskFormPage