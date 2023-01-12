import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Home from '../Pages/Home'

function AppRouter() {
  return (
    <Routes>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
    </Routes>
  )
}

export default AppRouter