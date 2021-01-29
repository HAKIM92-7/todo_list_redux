import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../redux/actions/actions';
const AddTodo = () => {

    const [newTask , setNewTask] = useState ("") ;

    const onChange= (e) => {

     setNewTask(e.target.value)

    }

    const dispatch=useDispatch();
    return (



        <div>
            <input type="text" value={newTask} onChange={onChange} />
            <button onClick= {() => dispatch(addTodo(newTask)) }>add task</button>
        </div>
    )
}

export default AddTodo
