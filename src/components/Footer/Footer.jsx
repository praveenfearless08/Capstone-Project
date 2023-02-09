import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Insta from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr />
        <div className="blur blur-join"></div>
        <div className="footer">
            <div className='social-links'>
            <a href="https://github.com/praveenfearless08" rel="noreferrer" target="_blank" className='social-links'><img src={Github} alt="" /></a>
            <a href="https://www.linkedin.com/in/praveen-kumar-2408/"  rel="noreferrer" target="_blank" className='social-links'><img src={Insta} alt="" /></a>
            <a href="https://www.linkedin.com/in/praveen-kumar-2408/"  rel="noreferrer" target="_blank" className='social-links'><img src={Linkedin} alt="" /></a>
            
            </div>
        
           
        </div>
        <p className="footer-name">All right reserved |  @copyright 2023 </p>

    </div>
  )
}

export default Footer