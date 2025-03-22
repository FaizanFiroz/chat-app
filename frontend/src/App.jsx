import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path = '/' element={<HomePage />} />
      <Route path = '/signup' element={<HomePage />} />
      <Route path = '/login' element={<HomePage />} />
      <Route path = '/' element={<HomePage />} />
      <Route path = '/' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App