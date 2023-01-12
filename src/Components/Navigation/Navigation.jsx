import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div className='div1'>
    <nav className='sticky'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/cleanup'>Clean up</NavLink></li>
    </nav>
    </div>
  )
}

export default Navigation