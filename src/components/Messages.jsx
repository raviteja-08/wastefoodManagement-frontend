import React from 'react'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import MessageCard from './MessageCard';
import "./Card.css";
const Messages = () => {
    
    let [user,setUser]=useState(null);
    let [messages,setMessages]=useState(null);

    const navigate = useNavigate();
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
         console.log(json.data)
         setUser(json.data);
        //  console.log(navigate())
    }
    const fetchMessages=async()=>{
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8000/api/messages/getMessages', {
             method: "POST",
             headers: {
             "Content-Type": "application/json",
            },
            body: JSON.stringify({token:token}) 
         })
         const json = await response.json();
         console.log(json.data)
         json.data.reverse()
         setMessages(json.data);
         console.log(messages)
    }
    
    useEffect(()=>{
        
        fetchData()
        fetchMessages();

    },[])
    if(user===null)
      return <></>
  return (
    <>
            {/* <h1>{user.fullName} </h1>  */}

          {/* <button onClick={()=>{navigate('/donate')}} >Donation</button> */}
          <button style={{position:'fixed',bottom:'10%',right:"10%",zIndex:100}} onClick={()=>{navigate('/NGOprofile')}} >Profile</button>
            <div className="profile-container">
            <div className="left-side details-left-box-profile" style={{width:"40%"}}>
                    <h2>User Details</h2>
                    <p>Name: {user.fullName}</p>
                    <p>Email: {user.email}</p>
                    <p>Admin Name: {user.adminName}</p>
                    <p>country: {user.address.country}</p>
                    <p>state: {user.address.state}</p>
                    <p>city: {user.address.city}</p>
                    

                  
                  </div>
          <div className="right-side cards" style={{display:'flex',gap:'100px',flexWrap:"wrap"}}>
           {
              messages?.map((msg)=>(
                 <MessageCard msg = {msg}/>
                
              ))
           }
            
          </div>
        </div>
        </>
  )
}

export default Messages

/*

 let [user,setUser]=useState(null);
    const navigate = useNavigate();
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
         console.log(json.data)
         setUser(json.data);
    }
    
    useEffect(()=>{
        
        fetchData()

    },[])
*/
