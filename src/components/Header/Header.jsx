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
            <a href="/"><li>Home</li></a>
            <a href="/"><li>Best Plans</li></a>
            <a href="/"> <li>Programs</li></a> 
            <a href="/"><li>About</li></a>

           
        </ul>
    </div>
  )
}

export default Header