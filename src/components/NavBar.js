import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a key= {0} href="#home">Home</a>
    <a key= {1} href="#about">About</a>
    <a key= {2} href="#projects">Projects</a>
  </nav>;
}

export default NavBar;
