import React from 'react'
import { useState,useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import Modal from '../pages/Modal';
import "../pages/styles.css"

const DonationCardRes = ({donation,name}) => {
    const [data,setData] = useState({});
    const [modal,setModal] = useState(false);
    const fetchData = async()=>{
        const token = localStorage.getItem('token')

        console.log(donation)
       
        let response2 = await fetch('http://localhost:8000/api/donation/getDonation/'+donation._id, {
             method: "POST",
             headers: {
             "Content-Type": "application/json",
            },
            body: JSON.stringify({token:token}) 
         })
        //  response = await response.json()
         response2 = await response2.json()
         response2 = response2.donation
        //  console.log(response)
        //  console.log(response2)
        console.log(response2)
         let nn = {quantity:response2.quantity,foodName:response2.foodName,foodType:response2.foodType}
         
         setData(nn);
         console.log(nn)
    }

    useEffect(()=>{
        fetchData()
    },[])
   const navigate = useNavigate()
  return (
    <div style={{marginRight:'20px',marginTop:"20px"}}>

        {modal && <div className="modal1">
                <div className="overlay">
                    <Modal toggle={setModal}/>
                </div>
              </div>}


      <div className="container">
  <div className="parent">
        <div className="card">
            
            <div className="glass"></div>
            <div className="content">
                {/* <span className="title">{data.fullName}</span> */}
                <span className="text">{`${data.foodName} `}</span>
                <span className="text">
                 {data.quantity}
                </span>
                <span className="text">
                
                {data.foodType}
                </span>
            </div>
            <div className="bottom">
                
                <div className="social-buttons-container">
                    

                        <button onClick={()=>{
                             navigate(`/donation/${donation._id}/${name}`)
                        }} className="social-button social-button1">
                            
                            <p> view details</p>
                            
                        </button>
                    
                      
                </div>
                
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default DonationCardRes
