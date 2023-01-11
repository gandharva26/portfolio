import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const About = () => {
  return (
    <div className="experience">
    <VerticalTimeline lineColor="wheat">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Aug 2016 - Oct 2020"
        iconStyle={{ background: "wheat", color: "#fff" }}

      >
        <h3 className="vertical-timeline-element-title">
         University Of Mumbai
        </h3>
        <p> Bachelors in Computer Science and Engineering</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Jul 2020 - Oct 2020"
        iconStyle={{ background: "wheat", color: "#fff" }}
      
      >
        <h3 className="vertical-timeline-element-title">
          Frontend Developer Intern
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
          TechskillsIt Pvt. Ltd.
        </h4>
        <p>Developed functionalities for web-applications using Angular.Js</p>

       
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Nov 2020 - Aug 2021"
        iconStyle={{ background: "wheat", color: "#fff" }}
      
      >
        <h3 className="vertical-timeline-element-title">
          Associate Software Engineer
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
          Xoriant Pvt. Ltd.
        </h4>
        <p>Developed web-applications using Javascript, PHP and MySQL. Generated Visualizations using Python and SAS</p>

       
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jun 2022- Dec 2022"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
   
      >
        <h3 className="vertical-timeline-element-title">
          Software Engineer Intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Postman, Inc.
        </h4>
        <p>Developed functionalities and automation Flows in Javascript for React applications. Packaged APIs using Python Flask and Node.js</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Aug 2021 - Mar 2023"
        iconStyle={{ background: "wheat", color: "#fff" }}

      >
        <h3 className="vertical-timeline-element-title">
         University Of California, Riverside
        </h3>
        <p> Master in Computer Science </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
  )
}
