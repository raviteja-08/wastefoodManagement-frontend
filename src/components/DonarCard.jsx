import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const DonarCard = ({donation}) => {
    const navigate = useNavigate()
    const [data,setData]=useState({});
    const fetchData = async()=>{
        const token = localStorage.getItem('token')
        // let response = await fetch('http://localhost:8000/api/users/profile/'+donation.postedBy, {
        //      method: "POST",
        //      headers: {
        //      "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({token:token}) 
        //  })
        // let response2 = await fetch('http://localhost:8000/api/donation/getDonation/'+donation.donationId, {
        //      method: "POST",
        //      headers: {
        //      "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({token:token}) 
        //  })
        //  response2 = await response2.json()
        //  response2 = response2.donation
         console.log(donation)
        //  console.log(response2)
        //  let createdAt = response2.createdAt;
        //  let expiresIn = response2.expiresIn;
        //  let nn = {food:response2.foodName,duration:(((expiresIn) - Math.round((Date.now()-Date.parse(createdAt))/(3.6e+6)))),quantity:response2.quantity}
        //  console.log(nn.duration)
        //  setData(nn)
        
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
           <article class="plan [ card ]">
            <div class="inner">
    
                <span class="pricing">
                    <span>
                         <small> </small>
                    </span>
                </span>
                <h2 class="title">RESTAURANT Donation</h2>
                <ul class="features">
                    <li>
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                            </svg>
                        </span>
                        <span>{donation.foodName} </span>
                    </li>
                    <li>
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                            </svg>
                        </span>
                        <span> <strong>{donation.quantity}</strong></span>
                    </li>
                    <li>
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                            </svg>
                        </span>
                        <span>{donation.expiresIn} hrs</span>
                    </li>
                </ul>
                <button onClick={()=>{navigate(`/NGO/donation/${donation._id}/${localStorage.getItem('type')==="NGO"}`)}} class="button">
                     details
                </button>
            </div>
        </article>
    </div>
  )
}

export default DonarCard
