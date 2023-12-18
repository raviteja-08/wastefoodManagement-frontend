import React from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Signup = () => {
    const navigate = useNavigate();
    const [user,setUser]=useState({email:"",password:"",fullName:"",adminName:"",phoneNumber:"",city:"",state:"",country:"",pincode:""});
    const change=(e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(user)
        setUser(e=>({...e,userType:e.pets}))
     
        console.log(user)
        let address={
            city:user.city,
            country:user.country,
            state:user.state,
            pincode:user.pincode
        }
        const response = await fetch('http://localhost:8000/api/users/register', {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
           },
           body: JSON.stringify({...user,address})
           
            
        });
        const json = await response.json();
        console.log(json)
        if(json.success===true){
            
            navigate('/login');
            
        }
        else{
            alert("password should be 8 chars");
        }
        
        
    }


  return (
    <div>
        
    
        <div className="container">
            <div className="form-container" id="signin-form">
            <h1>signUp</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Email</label>
                <input type="text" name="email" id="email"  onChange={change} value={user.email} required/>

                <label for="userType">user type:</label>

                    <select name="userType" id="userType" onChange={change} >
                        <option value="">--Please choose an option--</option>
                        <option value="NGO">NGO</option>
                        <option value="RESTAURANT">RESTAURANT</option>
                        
                    </select>



                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" id="fullName"  onChange={change} value={user.fullName} required/>
                
                <label htmlFor="adminName">Admin name</label>
                <input type="text" name="adminName" id="adminName"  onChange={change} value={user.adminName} required/>
                
                <label htmlFor="phoneNumber">phone number</label>
                <input type="text" name="phoneNumber" id="phoneNumber"  onChange={change} value={user.phoneNumber} required/>
                
                <label htmlFor="city">city</label>
                <input type="text" name="city" id="city"  onChange={change} value={user.city} required/>

                <label htmlFor="state">state</label>
                <input type="text" name="state" id="state"  onChange={change} value={user.state} required/>

                <label htmlFor="country">country</label>
                <input type="text" name="country" id="country"  onChange={change} value={user.country} required/>

                <label htmlFor="pincode">pincode</label>
                <input type="text" name="pincode" id="pincode"  onChange={change} value={user.pincode} required/>
                
                
                <label htmlFor="password">Password</label>
                <input type="password"  name="password" id="password"  onChange={change} value={user.password} required/>
                
                <button type="submit" >Sign Up</button>
            </form>
            <p>Don't have an account? <Link to="/login" id="signup-link">Login</Link></p>
            </div>
        </div>


  </div>
  )
}

export default Signup
