import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


import CreateEvent from './pages/CreateEvent'
import ViewEventList from './pages/ViewEventList'
import EventList from './pages/EventList'

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='' element={<Home/>}/>
        
          <Route path='createevent' element={<CreateEvent/>}/>
          <Route path='eventlist' element={<ViewEventList/>}/>
          <Route path='list' element={<EventList/>}/>
          
         
      </Routes>
      
    </>
  )
}

export default App
