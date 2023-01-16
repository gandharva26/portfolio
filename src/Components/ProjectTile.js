import React from 'react'
import '../Components/Projects.css'
export const ProjectTile = (props) => {
  return (
   
    <div className="projectItem">
    <h1> {props.name}</h1>
    <a href = "https://github.com/gandharva26?tab=repositories">
    <img style = {{borderRadius:"50%"}}src={props.image} width="60%" height="150px" />
    </a>
    <p>
      <b>{props.skills}</b>
    </p>
    
  </div>
 
  )
}
