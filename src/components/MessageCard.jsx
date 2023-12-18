import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MessageCard = ({msg}) => {
    const navigate = useNavigate();
    const [data,setData] = useState(null)
    // const [exp,setExp] = useState(null)
    const fetchData=async()=>{
        
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:8000/api/donation/getDonation/${msg.donationId}`, {
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
    },[])
    if(data===null ){
        return <></>
    }
    // setExp(data.expiresIn - (Math.round((Date.now()-Date.parse(data.createdAt))/(3.6e+6))))
    const exp = data.expiresIn - (Math.round((Date.now()-Date.parse(data.createdAt))/(3.6e+6)));
  return (
    
        // <div className="card-msg" style={{width:"18rem",}}>
        //   <div className="card-body">
        //     <h5 className="card-title">Details</h5>
        //     <p className="card-text">Restaurent Name:{msg.name}</p>
        //     <p className="card-text">food Type:{data.foodType}</p>
        //     <p className="card-text">Quantiity:{data.quantity}</p>
        //     {/* <Link to="/Detailed"><button className='btn btn-primary'>
        //               Access
        //             </button>
        //             </Link>
        //             <button type="button" className="btn btn-secondary" data-bs-dismiss="card">
        //                   Close
        //             </button> */}
                    
        //     <button onClick={()=>navigate(`/NGO/donation/${msg.donationId}`)} >open</button>
        //   </div>
        // </div>
        <article className="information [ card ]">
                    <span className="tag" style={{width:"200px",color:`${exp>0?"":'red'}`}}> {exp>0?`expiresIn ${exp} hrs`:"Expired"}</span>
                    <h2 className="title">{msg.name}</h2>
                    <span>food Type:{data.foodType}</span>
                    <span>Quantiity:{data.quantity}</span>
                    {/* <p className="info">Elemenatary tracks all the events for the day as you scheduled and you will never have to worry.</p> */}
                    <button className="button" onClick={()=>navigate(`/NGO/donation/${msg.donationId}/${exp>0}`)}>
                        <span> details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="none">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" fill="currentColor" />
                        </svg>
                    </button>
         </article>
          
  )
}

export default MessageCard
