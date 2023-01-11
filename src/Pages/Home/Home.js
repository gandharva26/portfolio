import React from 'react'
import "../Home/Home.css";
import mypic from '../../assets/products/WhatsApp Image 2022-12-30 at 7.38.04 PM.jpeg'
import '../../Components/Projects.css'
export const Home = () => {
    return (
        <div className="home">
            <div className='content'>
                 <div className='picture'>
                <img src={mypic}  width= "400 px"
                height= "400 px"
               style={{
                borderRadius: "50%"}}
                />
            </div>
          <div className="about">
       
            <div className="prompt">
            <h4> Hey 👋 , I am Gandharva</h4>
              <p>A software developer with a passion for web development and data analytics.</p>
             
            </div>
            </div>
          </div>
         
          <div className="about">
      
          <div className="skills">
          <h3>Take a look at  Skills ⬇️</h3>
        <ol className="list">
          <li className="item">
            <h4 style = {{background :"wheat", borderRadius:"25px"}}> Front-End</h4>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, BootStrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h4 style = {{background :"wheat", borderRadius:"25px"}}>Back-End</h4>
            <span>
              NodeJS, Java Spring, ExpressJS, GraphQL, REST 
              MySQL, MongoDB, DynamoDB, AWS S3
            </span>
          </li>
          <li className="item">
            <h4 style = {{background :"wheat", borderRadius:"25px"}}>Languages</h4>
            <span>JavaScript, Java, Python, C, C++, TypeScript, PHP</span>
          </li>
        </ol>
      </div>
          </div>

          <div>
   
  
   
</div>

        </div>

)};
