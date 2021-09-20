import React from "react";

function Project({title, image, link, dlink}) {
    return(
      <div  class="flex-container">
        <h2>{title}</h2>
        <img src = {image}></img>
        <a href = {link}>Github link</a>
        <a href = {dlink}>Deployed link</a>
      </div>
    )
}
//remove line breaks and see
export default Project;