import React from 'react'

export const CertificationTile = (props) => {
  return (
    <div className="projectItem">
    <h1> {props.name}</h1>
    <img src={props.image} width="50px" height="50px" />
    <p>
      <b>Skills:{props.date}</b>
    </p>
    
  </div>
  )
}
