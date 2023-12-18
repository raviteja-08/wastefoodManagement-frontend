import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'

const MessageDetail = ({}) => {

     const {id} = useParams();
     console.log(id)
     const [data,setData] = useState(null)
     const fetchData = async()=>{
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:8000/api/donation/getDonation/${id}`, {
             method: "POST",
             headers: {
             "Content-Type": "application/json",
            },
            body: JSON.stringify({token:token}) 
         })
         const json = await response.json();
         console.log(json.donation)
         setData(json.donation);
     }
     useEffect(()=>{
        fetchData();
     })
     if(data===null)
      return <></>
     return (
    <div className='container left-side bg-light'>

      <h2>Detailed information</h2>
      <p>Restaurent Name:
      </p>
      <p>Location:</p>
      <p>Food Type:</p>
      <p>Quantity: </p>
      <p>Duration:</p>
      <p>Contact details</p>
      <button style={{marginRight:'20px'}}>accept</button>

      <button>accept</button>

    </div>
  )


}

export default MessageDetail
