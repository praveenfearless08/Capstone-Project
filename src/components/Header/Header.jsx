import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
// import Logo from '../../assets/favicon.png'

const Header = () => {
  return (
    <div className="header">
    {/* <h2 className='logo'><img src={Logo} alt="" />Fitness Freak</h2> */}
        <img  src={Logo} alt="" className='logo'/>
        <ul className='header-menu'>
            <li>Home</li>
            <li>Best Plans</li>
            <li>Programs</li>
            <li>About</li>
        </ul>
    </div>
  )
}

export default Header