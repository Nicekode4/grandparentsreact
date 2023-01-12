import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
<li>Home</li>
<li>About</li>
<li>Products</li>
    </nav>
  )
}

export default Navigation