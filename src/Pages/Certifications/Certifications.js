import React from 'react'
import { CertificationsList } from '../../helpers/helper'
import { CertificationTile } from '../../Components/CertificationTile'
export const Certifications = () => {
  return (
    <div>
  
    <div className="projects">

  <div className="projectList">
    {CertificationsList.map((project) => {
return <CertificationTile name={project.name} image={project.image} date={project.date}/>
    })}
    </div>
    </div>
   
</div>
  )
}
