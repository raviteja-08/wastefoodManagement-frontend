import React from 'react'
import DonationCard from './DonationCard'
import "./Card.css"
import Card from './Card'
const DonationsList = (props) => {
  return (
    <div className='cards'>
      {props.donations.map((donation)=>
        
        
        <Card donation={donation}/>
        
      )}
    </div>
  )
}

export default DonationsList
