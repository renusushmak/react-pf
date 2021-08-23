import React from "react";
import Project from './Project';
import Example from '../images/logo192.png';

function Projects() {
    const data = [
        {title: 'abc-placeholder', image: Example, link: 'abc-link-placeholder'},
        {title: 'abc-placeholder', image: Example, link: 'abc-link-placeholder'},
        {title: 'abc-placeholder', image: Example, link: 'abc-link-placeholder'}
    ];
    return(
        <div>
            {data.map(proj => (
            <Project title={proj.title} image={proj.image} link={proj.link}/>
            ))}
        </div>
    )
}

export default Projects;