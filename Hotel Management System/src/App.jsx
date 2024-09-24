import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Signup from './React Hackathon/Signup'
import Login from './React Hackathon/LOGIN.JSX'
import Admin from './React Hackathon/Admin'
import Customer from './React Hackathon/Customer'
import Room from './React Hackathon/Room'
import RoomDetails from './React Hackathon/RoomDetails'
import RoomBooking from './React Hackathon/RoomBooking'
import Booking from './React Hackathon/Booking'
import PaymentForm from './React Hackathon/Payment'
import AdminDashboard from './React Hackathon/AdminDashboard'
import Event from './React Hackathon/Event';

const App = () => {
  return (
    <div>
      <Routes>
      
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/room' element={<Room/>} />
        <Route path='/roomdetails' element={<RoomDetails/>}/>
        <Route path='/roombooking' element={<RoomBooking/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/payment' element={<PaymentForm/>}/>
        <Route path='/event'element={<Event/>}/>

        {/* <Route path='/product/:productId' element={<Product1/>}/> */}


      </Routes>
    </div>
  )
}

export default App
