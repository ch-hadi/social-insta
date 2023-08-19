import React, { useState, useEffect } from 'react';


const images = ['./images/inst1.png', './images/insta2.png', './images/insta4.png'];
const Login = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);
    
        return () => clearInterval(interval);
      }, []);
  return (
    <div className='container mx-auto w-full flex h-screen'>
        <div className='w-1/2 relative'>
           
                <div style={{backgroundImage:`url('./images/iph.png')`,overflow:'hidden',width:'375px',height:'512px',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                <img  id='login-image' alt='login-image' style={{width:'100%'}} className='max-h-full max-w-full' src='./images/insta1.png'/>
                </div>
           
        </div>
        <div className='w-1/2 bg-slate-700 '></div>
    </div>
  )
}

export default Login