import React from "react";
import Me from '../images/me.jpeg';

function About() {
  const home = [
    {title: 'About Me', image: Me}
  ];
    return(
      <div>
        <h1>About Me</h1>
        <hr id="header" width="1250" size="5" color="DodgerBlue"></hr>
        <div>
            Detail-oriented and an adaptable SDET with over 9 years of experience. 
            Experienced in UI automation and building BE api's. 
            Experienced in sharing stability and health check reports 
            Experienced in Back-end api's monitoring and database validation testing.
        </div>
      </div>
    )
}

export default About;