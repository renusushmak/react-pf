import React from "react";
import Project from './Project';
import Example from '../images/logo192.png';

function Projects() {
    const data = [
        {title: 'note-takr', image: Example, link: 'https://github.com/renusushmak/note-takr', dlink: 'https://note-takr-krs.herokuapp.com/notes'},
        {title: 'password generator', image: Example, link: 'https://github.com/renusushmak/password-generator-js', dlink: 'https://renusushmak.github.io/password-generator-js/'},
        {title: 'seo optimization', image: Example, link: 'https://github.com/renusushmak/seo-optimization-krs ', dlink: 'https://renusushmak.github.io/seo-optimization-krs/ '},
        {title: 'sqlize-ecommBE', image: Example, link: 'https://github.com/renusushmak/sqlize-ecommBE', dlink: 'deployed-link'},
        {title: 'goodvice-blog', image: Example, link: 'https://github.com/crossigarcia/the-goodvice-blog', dlink: 'https://the-goodvice-blog.herokuapp.com/'},
        {title: 'Kara-OK-Corral', image: Example, link: 'https://github.com/costanza13/kara-ok-corral', dlink: 'https://the-kara-ok-corral.herokuapp.com/'}
    ];
    return(
        <div>
            {data.map(proj => (
            <Project title={proj.title} image={proj.image} link={proj.link} dlink={proj.dlink}/>
            ))}
        </div>
    )
}

export default Projects;