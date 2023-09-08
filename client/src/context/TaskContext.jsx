import { createContext, useContext, useState } from "react";

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

    return (
        <TaskContext.Provider value={ {
            task

        } }>
            { children }
        </TaskContext.Provider>
    )

}