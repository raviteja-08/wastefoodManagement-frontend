import React, { useEffect, useState } from 'react'
import DonationsList from './DonationsList'

const Rightbox = () => {
   
    const [accepted,setAccepted] = useState([])
    const [notaccepted,setNotAccepted] = useState([])
    const fetchData = async()=>{
        const token = localStorage.getItem('token')
         const response = await fetch('http://localhost:8000/api/users/getAllDonationsNgo', {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
           },
           body: JSON.stringify({token})
           
        });
        let json = await response.json();
        // json = json.data.filter((donation)=> !((Math.round((Date.now()-Date.parse(donation.createdAt))/(3.6e+6)))<donation.expiresIn))
        json = json.data
        // ((Math.round((Date.now()-Date.parse(donation.createdAt))/(3.6e+6)))<donation.expiresIn)
        setAccepted(json.filter((item)=>item.isAccepted));

        setNotAccepted(json.filter((item)=> item.isAccepted===false && item.acceptedByOthers===false && !((Math.round((Date.now()-Date.parse(item.createdAt))/(3.6e+6)))<item.expiresIn)))
        // console.log(notaccepted)
    }
    useEffect(()=>{
        fetchData();
    },[])


  return (
    <div >
        <div className="">

            <h2>Accepted</h2>
        <DonationsList donations={accepted}/>

        </div>
       <div className="">

            <h2 >Available</h2>
            <DonationsList donations={notaccepted}/>

       </div>

    </div>
  )
}

export default Rightbox
