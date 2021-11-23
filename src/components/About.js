import React from "react";
import profilepic from '../images/me.jpeg';

function About() {
    return(
      <div>
        <h1>About Me</h1>
        <hr className="hr-line"></hr><br></br>
        <img src={profilepic} className="App-profilepic" alt="Renu Sushma Kolli" />
        <div>
        <p className="homesection">
            <ul>
              <li>
              Detail-oriented and an adaptable SDET with over 9 years of experience. 
              </li>
              <li>
              Experienced in UI automation and building BE api's.
              </li>
              <li>
              Experienced in sharing stability and health check reports 
              </li>
              <li>
              Experienced in Back-end api's monitoring and database validation testing.
              </li>
            </ul>
        </p>
        </div>
      </div>
    )
}

export default About;