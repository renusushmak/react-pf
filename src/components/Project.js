import React from "react";

function Project({title, image, link}) {
    return(
      <div>
        <h1>{title}</h1>
        <img src = {image}></img>
        <a href = {link}> github link</a>
      </div>
    )
}

export default Project;