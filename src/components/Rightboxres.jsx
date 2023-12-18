
import React, { useEffect, useState } from 'react'
import DonationsList from './DonationsList'
import DonationListRes from './DonationListRes'

const Rightboxres = ({name}) => {
    const [accepted,setAccepted] = useState([])
    const [notaccepted,setNotAccepted] = useState([])
    const fetchData = async()=>{
        const token = localStorage.getItem('token')
         const response = await fetch('http://localhost:8000/api/donation/getAllDonationsRest', {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
           },
           body: JSON.stringify({token})
           
        });
        const json = await response.json();
        
        setAccepted(json.data.filter((item)=>item.isAccepted));

        setNotAccepted(json.data.filter((item)=> item.isAccepted===false ))
        // console.log(notaccepted)
    }
    useEffect(()=>{
        fetchData();
    },[])


  return (
    <div >
        <div className="">

            <h2>Accepted</h2>
        <DonationListRes donations={accepted} name={name} message={"accepted"}/>

        </div>
       <div className="">

            <h2 >Pending</h2>
            <DonationListRes donations={notaccepted} name={name} message={"pending"}/>

       </div>

    </div>
  )
}

export default Rightboxres
