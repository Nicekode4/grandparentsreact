import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import CleanUp from '../Pages/CleanUp'
import Home from '../Pages/Home'

function AppRouter() {
  return (
    <Routes>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/cleanup" element={<CleanUp />}/>
    </Routes>
  )
}

export default AppRouter