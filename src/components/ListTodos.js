import React  from 'react'
import {useSelector} from 'react-redux'

const ListTodos = () => {

    const list = useSelector(state => state.todo_list);
    return (
        <div>
            <ul>
            {
                list.map((el,index)=> (


                <li key={index} >{el}</li>

                ))


            }
            
            </ul>
        </div>
    )
}

export default ListTodos

