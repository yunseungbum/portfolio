import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <>
      {/* Navbar 요소 */}
      <nav>
        <ul>
          <li><a href="#combined">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

       <div className="header-image"></div>
    </>
  );
}

export default Navbar;
