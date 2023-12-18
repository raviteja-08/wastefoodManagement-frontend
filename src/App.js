import './App.css';
import AddDonation from './components/AddDonation';
import DonationDetails from './components/DonationDetails';
import Home from './components/Home';
import Login from './components/Login';
import MessageDetail from './components/MessageDetail';
import Messages from './components/Messages';
import NGOprofile from './components/NGOprofile';
import Restprofile from './components/Restprofile';
import Signup from './components/Signup';
import { Route,Routes } from 'react-router-dom';
import TestModal from './pages/TestModal';
import DonationDetailNGO from './components/DonationDetailNGO';
import Navbar from './components/Navbar';
import { useState } from 'react';
function App() {
  const [loggedIn,setLoggedIn]=useState(false);
  return (
    <div className="App">
     <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
     <Routes>

        <Route element={<Home/>} path="/"/>
        <Route element={<Login  setLoggedIn={setLoggedIn}/>} path="/login"/>
        <Route element={<Signup/>} path="/signin"/>
        <Route element={<NGOprofile/>} path="/NGOprofile"/>
        <Route element={<Restprofile/>} path="/profile"/>

        <Route element={<DonationDetails/>} path="/donation/:id/:rest"/>
        <Route element={<AddDonation/>} path="/donate"/>

        {/* <Route element={<DonationDetailNGO/>} path="/NGO/donation/:id"/> */}


        <Route element={<DonationDetailNGO/>} path="/NGO/donation/:id"/>
        <Route element={<DonationDetailNGO/>} path="/NGO/donation/:id/:acceptable"/>

        

        
        <Route element={<Messages/>} path="/messages"/>
        <Route element={<MessageDetail/>} path="/message/:id"/>
        <Route element={<TestModal/>} path="/modal"/>

     </Routes>
     
    </div>
  );
}

export default App;
