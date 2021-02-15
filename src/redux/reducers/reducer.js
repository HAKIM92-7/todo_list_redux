import {ADD_TODO, REMOVE_TODO, UPDATE_TODO , DONE_TODO} from '../actions/Types' ;

const initialState= {

todo_list : []


}


const reducer =(state = initialState , action) =>  {

const {type,payload}=action ;


switch (type) {
    case ADD_TODO: return {...state , todo_list : [...state.todo_list, {text:payload , done:false}] } 
    case REMOVE_TODO: return {...state , todo_list : state.todo_list.filter((el,i)=> i!==payload) } 
        
    case UPDATE_TODO: return {...state , todo_list : state.todo_list.map((el,i)=> i==payload.index ? {...el,text:payload.x} : el)} 
    case DONE_TODO : return {...state , todo_list: state.todo_list.map((el,i)=> i==payload ? {...el ,done:!el.done}:el)}
    default:
       return state 
}
}

export default reducer ;
