import React from 'react'
import { AwardTile } from '../../Components/AwardTile'
import { awardList } from '../../helpers/helper'
export const Awards = () => {
  return (
    <div>
    <h3>Honors and Awards</h3>
    <div className="projects">

  <div className="projectList">
    {awardList.map((project) => {
return <AwardTile name={project.name} image={project.image} date={project.date}/>
    })}
    </div>
    </div>
   
</div>
  )
}
