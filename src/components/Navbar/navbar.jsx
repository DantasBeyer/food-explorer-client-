import React, { useState } from "react";
import "./Navbar.css";
import Myorders from "../MyOrders/Myorders";
import exitImg from "../../img/icons/logout.png";
import Logo from "../Logo/Logo";
import { FaBars, FaTimes } from "react-icons/fa";
import Menu from "./Menu/Menu";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div id="navbar_container">
      <div className="myorders">
        <Myorders />
      </div>

      <Logo />
      <input
        className="search_bar"
        type="text"
        placeholder='"img" search dishes or ingredients'
      />
      <div id="hamburger" onClick={handleClick}>
        {nav ? (
          <FaBars className="bars" />
        ) : (
          <div>
            {/* <Menu /> */}
          </div>
        )}
      </div>

      <img className="exitImg" src={exitImg} alt="logout_img" />
    </div>
  );
};

export default Navbar;
