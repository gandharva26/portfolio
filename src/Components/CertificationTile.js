import React from 'react'

export const CertificationTile = (props) => {
  return (
    <div className="projectItem">
    <h1> {props.name}</h1>
    <img src={props.image} width= "100%"
    height= "55%" />
    <p>
      <b>Issued on: {props.date}</b>
    </p>
    
  </div>
  )
}
