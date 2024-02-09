import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />}></Route>
           <Route path='/create' element={<Register />}></Route>
           <Route path='/accountLogin' element={<Login />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
