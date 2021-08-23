import React from "react";

function NavBar({setPage, pages}) {
    return(
      <ul>
        <li onClick = {()=> setPage(pages[0])}>About</li>
        <li onClick = {()=> setPage(pages[1])}>Projects</li>
        <li onClick = {()=> setPage(pages[2])}>Contact</li>
        <li>Resume</li>
      </ul>
    )
}

export default NavBar;