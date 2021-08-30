import React from "react";

function Project({title, image, link, dlink}) {
    return(
      <div>
        <h2>{title}</h2>
        <img src = {image}></img>
        <a href = {link}>Github link</a><br></br>
        <a href = {dlink}>Deployed link</a>
      </div>
    )
}

export default Project;