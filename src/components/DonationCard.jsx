import React, { useEffect,useState } from 'react'
import "./donation.css"
import { useNavigate } from 'react-router-dom';

const DonationCard = ({donation}) => {
    const navigate = useNavigate();
    const [data,setData] = useState({});
    const fetchData = async()=>{
        const token = localStorage.getItem('token')
        let response = await fetch('http://localhost:8000/api/users/profile/'+donation.postedBy, {
             method: "POST",
             headers: {
             "Content-Type": "application/json",
            },
            body: JSON.stringify({token:token}) 
         })
        let response2 = await fetch('http://localhost:8000/api/donation/getDonation/'+donation.donationId, {
             method: "POST",
             headers: {
             "Content-Type": "application/json",
            },
            body: JSON.stringify({token:token}) 
         })
         response = await response.json()
         response2 = await response2.json()
         response2 = response2.donation
        //  console.log(response)
        //  console.log(response2)
         let nn = {fullName:response.data.fullName,quantity:response2.quantity,foodName:response2.foodName,foodType:response2.foodType}
         
         setData(nn);
        //  console.log(nn)
    }

    useEffect(()=>{
        fetchData()
    },[])
   
  return (
    <div style={{marginRight:'20px',marginTop:"20px"}}>
      <div className="container">
  <div className="parent">
        <div className="card">
            
            <div className="glass"></div>
            <div className="content">
                {/* <span className="title">{data.fullName}</span> */}
                <span className="text">{`${data.foodName} ${data.quantity} ${data.foodType}`}</span>
            </div>
            <div className="bottom">
                
                <div className="social-buttons-container">
                    <button onClick={()=>{
                        navigate(`/NGO/donation/${donation.donationId}`)
                    }} className="social-button social-button1">
                        
                          <p>view details</p>
                    </button>
                      
                </div>
                
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default DonationCard
