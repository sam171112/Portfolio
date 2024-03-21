import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Header.css'
const Header = () =>
 {
  return (
    <div className='Header'>
       <Link to='/' className='Link'><img src={logo} alt="logo"  className='logo'/></Link> 
       <div className='NavList'>
        <ul className='ul'>
            <li ><Link to='/' className='Link'>Home</Link></li>
            <li><Link to='/about'   className='Link'>About</Link></li>
            <li><Link to='/movies'  className='Link'>Movies</Link></li>
            <li><Link to='/contact' className='Link'>Contact</Link></li>
            <li><Link to='/portfo'  className='Link'>PortFolio</Link></li>
        </ul>
       </div>
    </div>
  )
}

export default Header
