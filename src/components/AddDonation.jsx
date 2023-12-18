import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
const AddDonation = () => {


  const navigate = useNavigate();
  const [user,setUser]=useState({email:"",password:"",fullName:"",adminName:"",phoneNumber:"",city:"",state:"",country:"",pincode:""});
  const change=(e)=>{
      setUser({...user, [e.target.name]:e.target.value})
  }
  const handleSubmit = async(e)=>{
      e.preventDefault();
      console.log(user)
      // setUser(e=>({...e,userType:e.pets}))

      console.log(user)
      let address={
          city:user.city,
          country:user.country,
          state:user.state,
          pincode:user.pincode
      }
      const token = localStorage.getItem('token')
      console.log({...user,address,token})
      const response = await fetch('http://localhost:8000/api/donation/create', {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
         },
         body: JSON.stringify({...user,address,token})
         
          
      });
      const json = await response.json();
      console.log(json)
      console.log(json)
      if(json.success===true){
          alert("succesfully added donation")
          navigate('/profile');
          
      }
      else{
          alert("password should be 8 chars");
      }
      
      
  }


  return (
    <div>
        
    
        <div className="container">
            <div className="form-container" id="signin-form">
            <h1>Donation Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="foodName">food </label>
                <input type="text" name="foodName" id="foodName"  onChange={change} value={user.foodName} required/>

                <label for="foodType">Food type:</label>

                    <select name="foodType" id="foodType" onChange={change} >
                        <option value="">--Please choose an option--</option>
                        <option value="vegitarian">veg</option>
                        <option value="non-vegitarian">non-veg</option>
                        
                    </select>



                <label htmlFor="quantity">Quantity</label>
                <input type="text" name="quantity" id="quantity"  onChange={change} value={user.quantity} required/>
                
                <label htmlFor="expiresIn">food expires in(hrs)</label>
                <input type="text" name="expiresIn" id="expiresIn"  onChange={change} value={user.expiresIn} required/>
                
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
                
                
                
                
                <button type="submit" >submit</button>
            </form>
        
            </div>
        </div>


  </div>
  )
}
  
export default AddDonation
