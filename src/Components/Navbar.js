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
        <Link  className='btn' to="/"> Home</Link>
  <Link className='btn' to="/About">Milestones</Link>
  <Link  className='btn'  to="/Projects">Projects</Link>
  <Link  className='btn'  to="/Experience">Experience</Link>
  <Link  className='btn'  to="/Certifications">Certifications</Link>
  <Link  className='btn'  to="/Awards">Awards</Link>
  
  
        </div>
      </div>
    );
  
}

export default Navbar;
