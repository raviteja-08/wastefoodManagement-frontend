import React from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'

import { useState } from 'react'

const Login = ({setLoggedIn}) => {

    const [user,setUser]=useState({email:"",password:""});
    const change=(e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }
    const navigator = useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/users/login', {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
           },
           body: JSON.stringify(user)
           
            
        });
        const json = await response.json();
        if(json.success===true){
            
            localStorage.setItem("token",json.token);
            localStorage.setItem("type",json.type);

            localStorage.setItem("isLoggedIn",true);
            setLoggedIn(true);
            if(json.type==="NGO"){

                navigator('/NGOprofile');
            }
            else{

                navigator('/profile');
            }
            
        }
        else{
            alert("incorrect details");
        }
        setUser({email:"",password:""});

    }

  return (
    <div>
        
    
        <div className="container" style={{marginTop:"100px"}}>
            <div className="form-container" id="login-form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label for="username">Username</label>
                <input type="text" name="email" id="email"  onChange={change} value={user.email} required/>
                <label for="password">Password</label>
                <input type="password"  name="password" id="password"  onChange={change} value={user.password} required/>
                
                <button type="submit" >Login</button>
            </form>
            <p>Don't have an account? <Link to="/signin" id="signup-link">Sign up</Link></p>
            </div>
        </div>


  </div>
  )
}

/*
   <div className="container">
    <div className="form-container" id="login-form">
      <h1>Login</h1>
      <form>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="#" id="signup-link">Sign up</a></p>
    </div>

    <div className="form-container" id="signup-form" style="display: none;">
      <h1>Sign Up</h1>
      <form>
        <label for="new-username">Username</label>
        <input type="text" id="new-username" name="new-username" required>
        <label for="new-email">Email</label>
        <input type="email" id="new-email" name="new-email" required>
        <label for="new-password">Password</label>
        <input type="password" id="new-password" name="new-password" required>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="#" id="login-link">Login</a></p>
    </div>
  </div>


*/
export default Login
