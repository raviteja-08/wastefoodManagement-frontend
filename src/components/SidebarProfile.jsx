import React from 'react'

const SidebarProfile = () => {
    
  return (
    <div>
       <div className="left-side">
                    <h2>User Details</h2>
                    <p>Name: {user.fullName}</p>
                    <p>Email: {user.email}</p>
                    <p>Admin Name: {user.adminName}</p>
                    <p>country: {user.address.country}</p>
                    <p>state: {user.address.state}</p>
                    <p>city: {user.address.city}</p>
                    

                  
         </div>
    </div>
  )
}

export default SidebarProfile
