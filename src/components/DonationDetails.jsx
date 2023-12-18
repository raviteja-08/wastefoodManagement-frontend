import React from 'react'
import { useEffect,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../pages/styles.css'
const DonationDetails = () => {
    const [data,setData] = useState(null);
    const id=useParams().id;
    const name = useParams().rest;
    const navigate = useNavigate();
    const fetchData = async()=>{
        const token = localStorage.getItem('token')

        // console.log(donation)
        let response2 = await fetch(`http://localhost:8000/api/donation/getDonation/${id}`, {
             method: "POST",
             headers: {
             "Content-Type": "application/json",
            },
            body: JSON.stringify({token:token}) 
         })
    
         response2 = await response2.json()
         response2 = response2.donation
        console.log(response2)
         let nn = {quantity:response2.quantity,foodName:response2.foodName,foodType:response2.foodType}
         
         setData(response2);
         
    }

    useEffect(()=>{
        fetchData()
    },[])
  if(data===null)
  return <></>
  return (
    <div>



        <div className="modal1">
          <div className="overlay">
             <div className="modal-content">

                    <h2>Detailed information</h2>
                    <p>Restaurent Name:{name}
                    </p>
                    <p>Location:{data.address.city}</p>
                    <p>Food Type:{data.foodType}</p>
                    <p>Quantity:{data.quantity} </p>
                    <p>{(Math.round((Date.now()-Date.parse(data.createdAt))/(3.6e+6)))<data.expiresIn && `expiresIn:${data.expiresIn-(Math.round((Date.now()-Date.parse(data.createdAt))/(3.6e+6)))}hrs`} 

{(Math.round((Date.now()-Date.parse(data.createdAt))/(3.6e+6)))>=data.expiresIn && `expired: ${(Math.round((Date.now()-Date.parse(data.createdAt))/(3.6e+6)))-data.expiresIn}hrs ago`}</p>
                    <p>Contact details:{data.phoneNumber}</p>
                    Accepted:{data.isAccepted===true?"yes":"no"}
                   <button className='my-3' onClick={()=>{navigate('/profile')}} >close</button>
             </div>
               
          </div>
        </div>



    </div>
  )
}

export default DonationDetails
