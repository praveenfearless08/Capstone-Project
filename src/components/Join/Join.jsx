import { useRef } from 'react';
import './Join.css';
import emailjs from 'emailjs-com';
// import emailjs from '@emailjs/browser';

const Join = () => {
    const form =useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hb61nwj', 'template_7i7vo76', form.current, 'kD81vwDlubvk-7N8A')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
    <div className="Join" id="join-us">
        
        
        <div className="left-j">
            <hr/>
            <div>
                <span>SUBSCRIBE </span>
                <span>TO JOIN</span> 
            </div>
            <div>
                <span> OUR</span>
                <span>COMMUNITY</span>
            </div>
        </div>
        <div className="right-j">
        <div className="blur blur-join"></div>
            <form ref={form} className="email-container" onSubmit={sendEmail}>
            
                <input type="email" name="user_email" placeholder='Enter Your Email Address.' />
                <input type="text" name="user_Name" placeholder='Enter Your Name.' />
                <input type="text" name="mobile" placeholder='Enter Your Mobile No.' />
                <button className="btn btn_join">Join Now</button>
                
                
            </form>
        </div>
    </div>
  
  )
}

export default Join