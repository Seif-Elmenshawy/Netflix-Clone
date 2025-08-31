import React from 'react'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'
import { Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/player/:id' element={<Player/>} />
    </Routes>
      
    </>
  )
}

export default App