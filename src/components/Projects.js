import React from "react";
import Project from './Project';
//import Example from '../images/logo192.png';
import Note from '../images/note-takr.png';
import Password from '../images/password-gen.gif';
import goodvice from '../images/The GoodVice Blog.gif';
//import KaraOk from '../images/The Kara-OK Corral.gif';


function Projects() {
    const data = [
        {title: 'note-takr', image: Note, link: 'https://github.com/renusushmak/note-takr', dlink: 'https://note-takr-krs.herokuapp.com/notes'},
        {title: 'goodvice-blog', image: goodvice, link: 'https://github.com/crossigarcia/the-goodvice-blog', dlink: 'https://the-goodvice-blog.herokuapp.com/'},
        //{title: 'Kara-OK-Corral', image: KaraOk, link: 'https://github.com/costanza13/kara-ok-corral', dlink: 'https://the-kara-ok-corral.herokuapp.com/'},
        {title: 'password generator', image: Password, link: 'https://github.com/renusushmak/password-generator-js', dlink: 'https://renusushmak.github.io/password-generator-js/'},
        // {title: 'seo optimization', image: Example, link: 'https://github.com/renusushmak/seo-optimization-krs ', dlink: 'https://renusushmak.github.io/seo-optimization-krs/ '},
        // {title: 'sqlize-ecommBE', image: Example, link: 'https://github.com/renusushmak/sqlize-ecommBE', dlink: 'deployed-link'},
    ];
    return(
        <div className="homesection">
            <h1>Projects Portfolio</h1>
            <hr className="hr-line"></hr>
            {data.map(proj => (
            <Project title={proj.title} image={proj.image} link={proj.link} dlink={proj.dlink}/>
            ))}
             <hr id="header" width="1250" size="1" color="tan" noshade></hr>
        </div>
    )
}

export default Projects;