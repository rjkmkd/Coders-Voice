import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Register from './Pages/Register/Register.jsx'
import Navigation from './Components/shared/Navigation/Navigation.jsx'
import LogIn from './Pages/Login/Login.jsx'
const App = () => {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
