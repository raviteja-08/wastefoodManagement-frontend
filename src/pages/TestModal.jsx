import React,{useState} from 'react'
import Modal from './Modal'
import './styles.css'
const TestModal = () => {
    let data;
    let [modal,setModal] = useState(false);

  return (
    <>

    <button onClick={()=>setModal((mod)=>!mod)} >open</button>
    {modal && <div className="modal1">
        <div className="overlay">
            <Modal toggle={setModal}/>
        </div>
    </div>}
   
    </>
  )
}

export default TestModal
