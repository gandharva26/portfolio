import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Components/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import logo from '../assets/products/WhatsApp Image 2022-12-30 at 7.38.04 PM.jpeg'


function Navbar ()  {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  
    
    return (
      <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
        <div className="links">
        <Link  className='btn' to="/"> <div className="btn">Home <b style={{float:'right'}}>🏠</b></div></Link>
  <Link className='btn' to="/About"><div className="btn">Milestones<b style={{float:'right'}}>🚩</b></div></Link>
  <Link  className='btn'  to="/Projects"><div className="btn">Projects <b style={{float:'right'}}>🧑🏻‍💻</b></div></Link>
  <Link  className='btn'  to="/Experience"><div className="btn">Experience<b style={{float:'right'}}>📈</b> </div></Link>
  <Link  className='btn'  to="/Certifications"><div className="btn">Certifications<b style={{float:'right'}}>📜</b> </div></Link>
  <Link  className='btn'  to="/Awards"><div className="btn">Awards<b style={{float:'right'}}>🏆</b> </div></Link>
  
  
        </div>
      </div>
    );
  
}

export default Navbar;
