import React,{useEffect,useState} from 'react'
import Rightbox from './Rightbox';
import Rightboxres from './Rightboxres';
import { useNavigate } from 'react-router-dom';
import './NGOprofile.css'
const Restprofile = () => {
 
    
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
    if(user===null){
        return <>
        </>
    }
    return (
        <>
            {/* <h1 className='my-3' >{user.fullName}  </h1>  */}

            <button className='danger' style={{position:'fixed',top:'13%',right:"1%",zIndex:100}} onClick={()=>{navigate('/donate')}} >Donation</button>

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
            {/* Empty for now */}
            <Rightboxres name={user.fullName}/>
          </div>
        </div>
        </>
)}

export default Restprofile
