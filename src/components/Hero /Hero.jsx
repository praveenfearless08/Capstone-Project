import React from 'react'
import Header from'../Header/Header'
import hero1 from '../../assets/home-img.png'

import back from '../../assets/hero_image_back.png'
import './Hero.css'

import {motion} from 'framer-motion'



const Hero = () => {
  const transition ={type:'spring', duration:3}
  // const mobile = window.innerWidth <= 768 ? true: false;
  return (
    <div className='hero'>
      <div className="blur blur-he"></div>
        <div className="left-h">
          <Header/>
       
        <div className='text'>
          <div className='tes'>
            <span className='stroke'>MAKE   </span>
            <span>YOUR</span>
          </div>
          <div className='tes'>
            <span>Body Shape</span>
          </div>
          <div>
            <span> In here we will help you to shape and build your ideal
                        body and live your life to the fullest.</span>
          </div>
        </div>
     
      <div className="in-buttons">
        <div>
        <buttons className="btn1">Get Started <i class="ri-arrow-right-line"></i></buttons>
        </div>
        <div>
         </div>
        
        
      </div>     
        </div>
        <div className="right-h">
          <button className="btn">Join Now</button>
         
            <img src={hero1} alt=""   className="hero-img" />
          <motion.img 
          transition={transition}
          initial={{right: '-1rem'}}
          whileInView={{right: '22rem'}}
          src={back} alt="" className="back" />
        </div>
        
    </div>
  )
}

export default Hero