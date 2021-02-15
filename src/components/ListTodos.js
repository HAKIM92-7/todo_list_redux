import React, { useState }  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { doneTodo, removeTodo } from '../redux/actions/actions';
import UpdateModal from './UpdateModal';
import './ListTodo.css';
const ListTodos = () => {
    const [filter,setFilter] = useState(null);
    const list = useSelector(state => state.todo_list);
    
    const dispatch = useDispatch();

const filtredlist= filter!==null ? list.filter (el => el.done ===filter) : list ;

    return (
        <div>

  <p>filter your tasks:</p>
  <div >
    
    <input type="radio"  id="done1"
     name="done" value="done1" 
     onChange={()=>setFilter(true)}
     />
    <label for="done1">done</label>
</div>
<div >
    <input type="radio" id="done2"
     name="done" value="done2"  
     onChange={()=>setFilter(false)}
     />
    <label for="done2">not done</label>
</div>
<div >
    <input type="radio" id="done3"
     name="done" value="done3"  
      onChange={()=>setFilter(null)}
       />
    <label for="done3">All</label>
  </div>
  

            <ul>
            {
            filtredlist.map((el,index)=> (

                <>
                <li className="task"  key={index} > <p style={{textDecoration:filtredlist[index].done ?'line-through':'none'}}>{el.text}</p> <button onClick={()=> dispatch(removeTodo(index))}>X</button> 
                 
                 <button className="done" onClick={()=> dispatch(doneTodo(index))}> {filtredlist[index].done?'undo':'done'}</button>
              
               <UpdateModal index={index} previous={el}  /> </li>
               
               </>
                ))


            }
            
            </ul>
            
        </div>
    )
}

export default ListTodos

