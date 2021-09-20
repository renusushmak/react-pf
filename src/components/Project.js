import React from "react";

function Project({title, image, link, dlink}) {
    return(
      <div class="card">
        <h2>{title}</h2>
        <img src = {image} alt="project"></img><br></br>
        <a href = {link}>Github link</a><br></br>
        <a href = {dlink}>Deployed link</a>
      </div>
    )
}

export default Project;