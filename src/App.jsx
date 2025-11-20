import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


import CreateEvent from './pages/CreateEvent'
import ViewEventList from './pages/ViewEventList'
import EventList from './pages/EventList'
import Login from './pages/Login'
import Register from './pages/Register'
import UserEventView from './pages/user/UserEventView'

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='' element={<Home/>}/>
          <Route path='login/createevent' element={<CreateEvent/>}/>
          <Route path='createevent' element={<CreateEvent/>}/>
          <Route path='eventlist' element={<ViewEventList/>}/>
          <Route path='list' element={<EventList/>}/>
           <Route path='login' element={<Login/>}/>
           <Route path='register' element={<Register/>}/>
           <Route path='events' element={<UserEventView/>}/>
           
           

          
         
      </Routes>
      
    </>
  )
}

export default App
