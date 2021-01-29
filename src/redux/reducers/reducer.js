import {ADD_TODO} from '../actions/Types' ;

const initialState= {

todo_list : []


}


const reducer =(state = initialState , action) =>  {

const {type,payload}=action ;


switch (type) {
    case ADD_TODO: return {...state.todo_list , todo_list : [...state.todo_list, payload ] } 
        
        

    default:
       return state 
}
}

export default reducer ;
