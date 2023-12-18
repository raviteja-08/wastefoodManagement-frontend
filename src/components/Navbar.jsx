import React, { useEffect, useState } from 'react'
import logo from '../utils/FeedOn.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  
  const [log,setLog]=useState(false);
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{display:'flex',justifyContent:'space-between'}} >
  <div className="">

  <Link href="/">

  <img src={logo} alt="" style={{height:"70px",width:"70px"}}/>
  </Link>

  </div>
<div className="">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {!localStorage.getItem("isLoggedIn") ? <>

        <Link className="nav-link " style={{color:'white'}} to="/login">Login </Link>
      
        <Link className="nav-link " style={{color:'white'}} to="/signin">Signup</Link>

    </>:
       <Link className="nav-link " style={{color:'white'}} onClick={()=>{ localStorage.removeItem('isLoggedIn');localStorage.removeItem('token');setLog(!log)}} to="/">Logout</Link>
    }

      
    
  </div>
</div>
</nav>


    </>
  )
}

export default Navbar
