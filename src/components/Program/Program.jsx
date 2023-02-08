import React from 'react';
import { programsData } from '../../data/programsData';
import './Program.css';
import RightArrow from '../../assets/rightArrow.png'

const Program = () => {
  return (
    <div className="Programs" id="programs">
        {/* header */}
        <div className="pro-header">
         <span className='stroke'>Build</span>
         <span>Your</span>
         <span className='stroke'>Best Body</span>
         </div>
         
        <div className="program-category">
            {programsData.map((program) =>(
                <div className="category">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now"><span>Join now</span><img src={RightArrow} alt="" /></div>
            </div>
            ))}
            
        </div>
    </div>
  );
};

export default Program