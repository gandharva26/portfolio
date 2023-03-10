import React from 'react'
import { ProjectTile } from '../../Components/ProjectTile'
import { ProjectList } from '../../helpers/helper'

export const Projects = () => {
  return (
    <div>
    
        <div className="projects">

      <div className="projectList">
        {ProjectList.map((project) => {
 return <ProjectTile name={project.name} image={project.image} skills={project.skills}/>
        })}
        </div>
        </div>
       
    </div>
  )
}
