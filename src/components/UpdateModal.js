import React from 'react'
import Modal from 'react-modal';
import {useDispatch} from 'react-redux';
import { updateTodo } from '../redux/actions/actions';
import './UpdateModal.css'
const UpdateModal = ({index,previous}) => {
 
    const customStyles = {
        content: {
            top: '25%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
          width:'300px' ,
          height:'200px'
        },
      };

    
 
  const [valueInput, setValueInput]= React.useState(previous.text);
  const [modalIsOpen , setModalIsOpen] =React.useState(false);
  const dispatch = useDispatch();
var subtitle ;
  function openModal() {
    setModalIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setModalIsOpen(false);
  }


  const onChange =(e) => {

setValueInput(e.target.value);


  }
    return (
        <div className="update" style={{width:'150px' , height: '50px'}}>
        <button  id="openmodal" onClick={()=> {

setModalIsOpen(true)    



}}>update</button>
       
         <Modal id="modalupdate"

          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={closeModal} 
          contentLabel="Example Modal"
          
        
        
        >
 
        <h3>Update</h3>            
            <input type="text" value={valueInput} onChange={onChange}/>
            <button onClick={()=>{
                dispatch(updateTodo(index,valueInput));
                setValueInput('');
                
                closeModal();
                
                }}>update</button>
           
            
         
          <button onClick={closeModal}>close</button>
       
         
        </Modal>




            
        </div>
    )
}

export default UpdateModal
