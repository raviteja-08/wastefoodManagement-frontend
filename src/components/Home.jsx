import React from 'react'
import Navbar from './Navbar'
import banner from '../utils/Banner.png'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <img src={banner} alt="" style={{width:"100%"}} />
      <Footer/>
    </div>
  )
}

export default Home
