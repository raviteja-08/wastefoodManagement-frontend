import React from 'react'
import DonationCardRes from './DonationCardRes'
import Card from './Card'
import DonarCard from './DonarCard'

const DonationListRes = (props) => {
  
  if(props.donations.length===0){
    return <>
       no {props.message} donations
    </>
  }
    return (
        <div className='cards'>
          {props.donations.map((donation)=>
            
            // <DonationCardRes name={props.name} donation = {donation}/>
            // <Card donation={donation}/>
            <DonarCard donation={donation}/>
            
          )}
        </div>)
  
}

export default DonationListRes
