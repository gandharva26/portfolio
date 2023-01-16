import React from 'react'
import "../Home/Home.css";
import mypic from '../../assets/products/WhatsApp Image 2022-12-30 at 7.38.04 PM.jpeg'
import '../../Components/Projects.css'
import pic2 from '../../assets/products/IMG_3024.jpg'
import pic3 from '../../assets/products/WhatsApp Image 2022-12-14 at 11.14.19 AM.jpeg'
import { useNavigate, useLocation } from 'react-router-dom'  
import useScreenType from 'react-screentype-hook'; 
import { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export const Home = () => {
   
    const screenType = useScreenType();
    const navigate = useNavigate()
    console.log(screenType.isMobile)
    
    return (
        <div>
        <div className="home">
        
            <div className='content' id={screenType.isMobile ? "Mobile" : ""}  >
                 <div className='picture'>
              
 <Carousel
        
        className="carousel"
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={3000}
       >
      <div className="slider-item">
        <img src={mypic} alt="horse" className='responsive' width="100%" height="100%" style={{borderRadius:"50%"}}/>
        <p className="horse"><b>Signal Top Hill</b></p>
      </div>
      <div className="slider-item" >
        <img src={pic2} alt="carnival" className='responsive' width="100%" height="100%"  style={{borderRadius:"50%"}}/>
        <p className="carnival"><b>Carnival</b></p>
      </div>
      <div className="slider-item">
        <img src={pic3} alt="fair ground" className='responsive' width="100%" height="100%"  style={{borderRadius:"50%"}}/>
        <p className="ground"><b>Artesia</b></p>
      </div>
    </Carousel>

            </div>
          <div className="about">
          <button className='emailbutton' onClick={()=>navigate("/CalendlyPage")}><b>Connect with me</b></button>
            <div className="prompt">
            <h4> Hey 👋 , I am Gandharva</h4>
              <h3>A software developer with a passion for web development and data analytics.</h3>
             
            </div>
           
       
          
            </div>
         
          </div>
        

        </div>
      
       
        </div>
)};
