import React from "react";
import { FaTimes } from "react-icons/fa";
import Details from "../../Details/Details";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu_container">
      <FaTimes className="close" />
      <input type="text" placeholder="search" />
      <a href={Details}> Close</a>
    </div>
  );
}

export default Menu;
