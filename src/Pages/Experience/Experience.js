import { AlignLeft } from 'phosphor-react';
import React from 'react'
import aapLogo from '../../assets/products/download-aap.jpeg'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
export const Experience = () => {
  return (
    <div className="experience">
    <VerticalTimeline lineColor="wheat">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Aug 2019 - Dec 2019"
        iconStyle={{ background: "wheat", color: "#fff" }}
      
      >
        <h3 className="vertical-timeline-element-title">
         AAP - Machine Learning - X
        </h3>
        <h4>Machine Learning Intern</h4>
        <p >
           
                    Developed ML Models using SVM, KNN and Logistic Regression to predict Bank Defaulters using Python
             
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Jul 2020 - Oct 2020"
        iconStyle={{ background: "wheat", color: "#fff" }}
      
      >
        <h3 className="vertical-timeline-element-title">
          Frontend Developer Intern
        </h3>

        <h4>
          TechskillsIt Pvt. Ltd.
        </h4>
        <p>Supported development of Angular application to monitor sales data for a client using Angular.js, MongoDB.
</p><p>Enhanced security by adding 2-factor authentication for the Angular application and wrote unit tests using JEST.</p>

       
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Nov 2020 - Aug 2021"
        iconStyle={{ background: "wheat", color: "#fff" }}
      
      >
        <h3 className="vertical-timeline-element-title">
          Associate Software Engineer
        </h3>

        <h4 >
          Xoriant Pvt. Ltd.
        </h4>
        <p>Developed an employee Timeline using HTML, CSS and Javascript for UI, PHP - Codeignitor MVC and MySQL for backend for stake-holders to assess resources and manage project allocations. </p>
    <p>


 Developed frontend components for Weekly status report app used by 3000+ users using HTML, CSS and Javascript.

    </p>
    <p>
     Designed various Java and MySQL based Cron Jobs for cleaning, filtering, synchronizing and migrating data .

    </p>
    <p>
     Modeled the Project Health Report pipeline using SAS programming, Python, and SQL to generate quarterly reports
by designing 10 dashboards pertaining to data of ~75 business clients.
    </p>

    </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Mar 2022- Jun 2022"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
   
      >
        <h3 className="vertical-timeline-element-title">
          Teaching Assistant
        </h3>
        <h4>
          University of California
        </h4>
        <p>Taught Combinatorics and Algorithmic optimizations to a class of 30 students and Graded quizzes, midterms, and finals- Taught Algorithmic optimizations to a class of 30 students - Graded quizzes, midterms, and finals
</p>
      </VerticalTimelineElement>



       

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jun 2022- Dec 2022"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
   
      >
        <h3 className="vertical-timeline-element-title">
          Software Engineer Intern
        </h3>
        <h4 >
          Postman, Inc.
        </h4>
  
     <p>
     Migrated functionalities into React.js based Postman-app from existing framework to create mono-repo and save
developer’s time and enhance productivity by at least 20%.
</p>
<p>
 Piloted automation flows for React-Redux applications using WebdriverIO to improve code coverage by at least 1.5x.
</p>
<p>
Implemented REST and GraphQL APIs for migration of repositories inside the postman-app using Node.js to improve
the feedback loop for end to end test triggers and reduce delay by 40%.</p><p>
Packaged the Anomaly detection module into a REST API using Python Flask for performance tests by processing
cloud data and detecting performing modules, aimed to improve app performance quality by ~30%
     </p>
     
     </VerticalTimelineElement>
     <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Oct 2022- Mar 2023"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
   
      >
        <h3 className="vertical-timeline-element-title">
          Research Assistant
        </h3>
        <h4>
          University of California
        </h4>
        <p>Autonomously delivered Node.Js package for JSONSki parser which is 3x faster than current Javascript parsing tools.
</p><p>Migrated JSONSki’s C++ codebase into Javascript using Node.Js’ NAPI Module and published an npm package.
</p>
      </VerticalTimelineElement>
  
    </VerticalTimeline>
  </div>
  )
}
