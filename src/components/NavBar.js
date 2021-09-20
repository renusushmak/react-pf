import React from "react";

function NavBar({setPage, pages}) {
    return(
      <div class="topnav">
        <p onClick = {()=> setPage(pages[0])}>About</p>
        <p onClick = {()=> setPage(pages[1])}>Projects</p>
        <p onClick = {()=> setPage(pages[2])}>Contact</p>
        <p>Resume</p>
      </div>
    )
}

export default NavBar;
