import { createContext, useContext, useState } from "react";
import { createTaskRequest } from "../api/task";

const TaskContext = createContext()

export const useTasks = () =>
{
    const context = useContext( TaskContext );

    if ( !context )
    {
        throw new Error( 'useTasks must be used within a TaskProvider' );
    }

    return context
}

export function TaskProvider ( { children } )
{
    const [ task, setTasks ] = useState( [] )

    const createTask = async (task) => {
        console.log('task created')
        const res = await createTaskRequest(task)
        console.log(res)
    }

    

    return (
        <TaskContext.Provider value={ {
            task,
            createTask

        } }>
            { children }
        </TaskContext.Provider>
    )

}