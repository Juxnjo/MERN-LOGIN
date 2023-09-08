import axios from "./axios";

export const getTasksRequest = () => axios.get( `/tasks` )
export const getTaskRequest = ( id ) => axios.get( `/tasks)/${ id }` )
export const createTaskRequest = ( task ) => axios.get( `/tasks`, task )
export const updateTaskRequest = ( task ) => axios.get( `/tasks${ task._id }`, task )
export const deleteTaskRequest = ( id ) => axios.get( `/tasks/${ id }` )
