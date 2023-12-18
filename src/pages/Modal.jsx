import React from 'react'
import DonationDetails from '../components/DonationDetails'

const Modal = ({toggle}) => {
  return (
    <div className='modal-content'>
      {/* <DonationDetails id={} /> */}
      <button onClick={()=>toggle()} >close</button>
    </div>
  )
}

export default Modal
