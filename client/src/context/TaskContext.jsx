import { useAuth } from "./AuthContext"


const TaskContext = () =>
{
    const { user }  = useAuth()
    console.log(user)
    
    return (
        <div>TaskContext</div>
    )
}

export default TaskContext