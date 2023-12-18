import React, { useState,useEffect } from 'react'
import './NGOprofile.css'
import DonationCard from './DonationCard';
import Rightbox from './Rightbox';
import { useNavigate } from 'react-router-dom';
const NGOprofile = () => {
    const navigate = useNavigate()
    let [user,setUser]=useState(null);
    
    const fetchData = async()=>{
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8000/api/users/profile', {
             method: "POST",
             headers: {
             "Content-Type": "application/json",
            },
            body: JSON.stringify({token:token}) 
         })
         const json = await response.json();
         setUser(json.data);
    }
    
    useEffect(()=>{
        
        fetchData()

    },[])
    if(user===null){
        return <>
        </>
    }
    return (
        <>
            {/* <h1>  NGO </h1> */}

            <button style={{position:'fixed',bottom:'10%',right:"2%",zIndex:100}} onClick={()=>{navigate('/messages')}} >Messages</button>
            <div className="profile-container">
          <div className="left-side details-left-box-profile">
            <h2>User Details</h2>
            <p>Name: {user.fullName}</p>
            <p>Email: {user.email}</p>
            <p>Admin Name: {user.adminName}</p>
            <p>country: {user.address.country}</p>
            <p>state: {user.address.state}</p>
            <p>city: {user.address.city}</p>
          </div>
          <div className="right-side">
            <Rightbox/>
          </div>
        </div>
        </>


      );
}

export default NGOprofile
