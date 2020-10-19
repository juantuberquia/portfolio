import React from "react";
import imgMenu from "./menu.png";

const NavBar = () => {
  return (
    <div>
      <a href="/#">
        <img src={imgMenu} alt="icon-menu"></img>
      </a>
    </div>
  );
};

export default NavBar;
