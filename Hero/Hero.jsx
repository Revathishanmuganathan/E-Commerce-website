import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/heroimg/hand-icon.png'
import arrow from '../Assets/heroimg/arrow.png'
import hero from '../Assets/heroimg/hero1.png'

const Hero = () =>{
    return(

        <div className='hero'>
           <div className='hero-left'>
              <h2>NEW ARRIVALS ONLY</h2>
               <div>
                   <div className='hero-hand-icon'>
                      <p>New</p>
                      <img src={hand_icon} alt='hand' />
                   </div>
                  <p>Collection</p>
                  <p> for everyone</p>
               </div>
              <div className='hero-latest-btn'>
                 <div>Latest Collection </div>
                 <img src={arrow} alt='arrow'/>
              </div>
           </div>
           <div className='hero-right'>
               <img src={hero} alt='hero'/>

           </div>

        </div>
    )
}
 export default Hero