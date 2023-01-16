import React from 'react'

export const AwardTile = (props) => {
  return (
    <div className="projectItem">
       <div className="card">
        <img src={props.image} alt="sample image"/>
         <div class="texts">
              <h2>{props.name}</h2>
            
            
        </div>
     </div>
    
  </div>
  
  )
}
