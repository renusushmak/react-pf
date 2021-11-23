import React from "react";

function NavBar({setPage, pages}) {
    return(
      <div>
            <title>Renu portfolio</title>
      <br></br><h1 className="caption1"> Renu Sushma Kolli</h1>
      <ul className="navlist">
        <li onClick = {()=> setPage(pages[0])}>About</li>
        <li onClick = {()=> setPage(pages[1])}>Projects</li>
        <li onClick = {()=> setPage(pages[2])}>Contact</li>
        <li onClick = {()=> setPage(pages[3])}>Resume</li>
      </ul>
      </div>
    )
}

export default NavBar;
