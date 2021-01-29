import { ADD_TODO } from "./Types"


export const addTodo = (task) => {

return {

type : ADD_TODO ,

payload : task


}


}