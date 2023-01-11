

import React from "react";
import LinkedinLogo from "../assets/products/download.png"
import facebookLogo from "../assets/products/5365678_fb_facebook_facebook logo_icon.png"
import  GithubLogo  from "../assets/products/GitHub-Mark.png";
import resumeLogo from '../assets/products/res.jpeg'
export function Footer() {

  return (
    <div className="footer">

            <div className="socialMedia">
            <div className="row">
            
            <div>
        <a target="_blank" href="https://github.com/gandharva26">
        <img src={GithubLogo} style = {{borderRadius:"50%"}}
    width= "100px"
    height="100px"/>
        </a>
        </div>
      
      


      
       <div>
            
        <a target="_blank" href="Https://linkedin.com/in/gandharva-deshpande" className="fa fa-facebook">
        <img src={LinkedinLogo} style = {{borderRadius:"50%"}}
    width= "80px"
    height="80px"/>
        </a>
        </div>
    
        <div style = {{marginTop:"20px"}}>
        
        <a target="_blank" href="https://www.facebook.com/gandharvak/">
        <img src={facebookLogo} style = {{borderRadius:"50%"}}
    width= "80px"
    height="80px"/>
        </a>
       </div>
     
       
      </div>
    
    </div>

    <div className="copyright"> <p> &copy;2023 Gandharva Deshpande</p></div>
    </div>
  );
}

export default Footer;