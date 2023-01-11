import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "../Components/Navbar.css"
import logo from '../assets/products/WhatsApp Image 2022-12-30 at 7.38.04 PM.jpeg'
export const Navbar = () => {
  return (
    <div class = "navbar">
        <div class = "links ">
        <Link  className='btn' to="/"> Home</Link>
<Link className='btn' to="/About">Milestones</Link>
<Link  className='btn'  to="/Projects">Projects</Link>
<Link  className='btn'  to="/Experience">Experience</Link>
<Link  className='btn'  to="/Certifications">Certifications</Link>
<Link  className='btn'  to="/Awards">Awards</Link>

<div className = "logo"><Link to="/"><img  style = {{borderRadius:"50%"}}
    width= "80px"
    height="80px" src={logo} /></Link></div>
        </div>
    </div>
  )
}


