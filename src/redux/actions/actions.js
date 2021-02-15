import { ADD_TODO, REMOVE_TODO, UPDATE_TODO ,DONE_TODO} from "./Types"


export const addTodo = (task) => {

return {

type : ADD_TODO ,

payload : task


}


}


export const removeTodo = (index) => {

    return {
    
    type : REMOVE_TODO ,
    
    payload :index
    
    
    }
    
    
    }


    export const updateTodo = (index,x) => {

        return {
        
        type : UPDATE_TODO ,
        
        payload :{index,x}
        
        
        }
        
        
        }

    export const doneTodo=(index) => {

        return {
        
            type : DONE_TODO,
            payload :index
            }
    } 
    
    



