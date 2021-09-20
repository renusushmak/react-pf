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
            Detail-oriented and an adaptable SDET with over 9 years of experience. 
            Experienced in UI automation and building BE api's. 
            Experienced in sharing stability and health check reports 
            Experienced in Back-end api's monitoring and database validation testing.
        </p>
        </div>
      </div>
    )
}

export default About;