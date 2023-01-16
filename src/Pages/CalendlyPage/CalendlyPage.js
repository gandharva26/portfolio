
import React from "react";
import { PopupWidget } from "react-calendly";
import '../CalendlyPage/CalendlyPage.css'
import LinkedinLogo from "../../assets/products/download.png"
import facebookLogo from "../../assets/products/5365678_fb_facebook_facebook logo_icon.png"
import  GithubLogo  from "../../assets/products/GitHub-Mark.png";
export const CalendlyPage = () => {
  
    return(

        <div className="App" style={{display:"grid"}}>



        <PopupWidget
          url="https://calendly.com/gandharva-deshpande/15min"
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
          text="Click here to schedule a Meeting!"
          textColor="black"
          color="white"
        />
        <div className="socialMedia">
            <div className="row">
            
            <div style = {{ }}>
    
    </div>

            <div>
        <a  href="https://github.com/gandharva26">
        <img src={GithubLogo} style = {{borderRadius:"50%"}}
    width= "80px"
    height="80px"/>
        </a>
        </div>
      
      


      
       <div>
            
        <a target="_blank" href="Https://linkedin.com/in/gandharva-deshpande" className="fa fa-facebook">
        <img src={LinkedinLogo} style = {{borderRadius:"50%"}}
    width= "80px"
    height="80px"/>
        </a>
        </div>
    
        <div >
        
        <a target="_blank" href="https://www.facebook.com/gandharvak/">
        <img src={facebookLogo} style = {{borderRadius:"50%"}}
    width= "80px"
    height="80px"/>
        </a>
       </div>
     
       
      </div>
    
    </div>
      </div>
   
  )
}
