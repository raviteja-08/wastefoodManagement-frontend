import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const DonationDetailNGO = () => {
   
    const [donation,setDonation]=useState(null);
    const [donar,setDonar]=useState(null);

    const donationId = useParams().id;
    const acceptable = useParams().acceptable==='true';

    const [expiryStatus,setExpiryStatus]=useState(false)
    const [expiry,setExpiry]=useState(0);
    const navigate = useNavigate();
    console.log(acceptable)
    const fetchData = async()=>{

        const token = localStorage.getItem('token');
        let response = await fetch(`http://localhost:8000/api/donation/getDonation/${donationId}`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
           },
           body: JSON.stringify({token:token}) 
        })
        response = await response.json()
        setDonation(response.donation);
        // console.log(donationId,response)
        let userId = response.donation.donar;
        response = await fetch(`http://localhost:8000/api/users/profile/${userId}`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
           },
           body: JSON.stringify({token:token}) 
        })
        response = await response.json()
        console.log(response)
        setDonar(response.data);
        
    }
    useEffect(()=>{
      fetchData();
      if(donation!==null){
        setExpiryStatus((Math.round((Date.now()-Date.parse(donation.createdAt))/(3.6e+6)))<donation.expiresIn);
        setExpiry( Math.abs(donation.expiresIn-(Math.round((Date.now()-Date.parse(donation.createdAt))/(3.6e+6)))))
    }
    },[])

    const handleAccept=async()=>{
        // if(!(Math.round((Date.now()-Date.parse(donation.createdAt))/(3.6e+6)))){
        //     alert('food is expired');
        //     navigate('/NGOprofile')
        // }
        const token = localStorage.getItem('token');
        let response = await fetch(`http://localhost:8000/api/donation/accept/${donationId}`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
           },
           body: JSON.stringify({token:token}) 
        })
        response = await response.json()
        if(response.message==='you are late'){
          alert('someother NGO accepted this donation')
          
        }
        else
           alert('succesfully accepted');
        navigate('/NGOprofile')
    }

  if(donar===null || donation===null){
    return <>
    </>
  }
  return (
    <div>


        <div className="modal1">
                <div className="overlay">
                    <div className="modal-content" style={{height:'70%'}}>

                            <h2>Detailed information</h2>
                            <p>Restaurent Name:{donar.fullName}
                            </p>
                            <p>Location:{donation.address.city}</p>

                            <p>Food :{donation.foodName}</p>
                            <p>Food Type:{donation.foodType}</p>
                            <p>Quantity:{donation.quantity}</p>
                            <p>Quantity:{donation.quantity}</p>

                           

                            <p>{(Math.round((Date.now()-Date.parse(donation.createdAt))/(3.6e+6)))<donation.expiresIn && `expiresIn:${ Math.abs(donation.expiresIn-(Math.round((Date.now()-Date.parse(donation.createdAt))/(3.6e+6))))}hrs`} 

                            {!((Math.round((Date.now()-Date.parse(donation.createdAt))/(3.6e+6)))<donation.expiresIn) && `expired: ${ Math.abs(donation.expiresIn-(Math.round((Date.now()-Date.parse(donation.createdAt))/(3.6e+6))))}hrs ago`}</p>
                            <p>Contact details:{donation.phoneNumber}</p>

                            {/* Accepted:{data.isAccepted===true?"yes":"no"} */}
                        <div className="buttons2">

                        <button className='mx-3' onClick={()=>{ 
                          // if(localStorage.getItem('type')==="NGO") 
                          //         navigate('/NGOprofile') 
                          // else {
                          //   navigate('/profile')
                          // }
                          navigate(-1);
                          }
                        } >close</button>

                        
                       { !donation.isAccepted && acceptable && <button className={`${!((Math.round((Date.now()-Date.parse(donation.createdAt))/(3.6e+6)))<donation.expiresIn)?'btn-danger':''}`} onClick={handleAccept}>accept</button>
}
                        </div>

                    </div>
                    
                </div>
         </div>
      
    </div>
  )
}

export default DonationDetailNGO
