import React from 'react';
import  './Reason.css';

import chooseImg from './choose-img.png';

import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';
const Reason = () => {
  return (
    <div className="Reasons" id='reasons'>
        <div className="left-r">
         
            <img src={chooseImg} height="600px"alt="" />
        </div>

        <div className="right-r">
            <span>Best reasons</span>
            <div><span className="stroke">Why </span>
                <span>Choose Use</span> 
                <span></span>
            </div>
            <div className='details-r'>
            <div><img src={tick} alt=""></img>
                <span>OVER 20+ COACHES</span>
            </div>
            <div><img src={tick} alt=""></img>
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div><img src={tick} alt=""></img>
                <span>FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div><img src={tick} alt="" />
            <span>ACCESS TO VIDEOS</span>
            </div>
            <div><img src={tick} alt="" />
            <span>200+ SUCCESFULL   MEMBERS</span>
            </div>
        </div>
        <span />
        <div className="partners">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Reason