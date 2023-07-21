import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='NavContainer'>
      <h1 className='logo'>NewsStop</h1>
      <ul>
        <li><Link to="/sports">Sports</Link></li>
        <li><Link to="/business">Buisness</Link></li>
        <li><Link to="/entertainment">Entertainment</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
