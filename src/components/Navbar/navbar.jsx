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
      <Logo />
      <input
        className="search_bar"
        type="text"
        placeholder='"img" search dishes or ingredients'
      />

      <div className="myorders">
        <Myorders />
      </div>
      <a href="/auth">
        <img className="exitImg" src={exitImg} alt="logout_img" />
      </a>
      <div onClick={handleClick} className="md:hidden z-10 ">
        {!nav ? <FaBars className=" w-8 h-8 bg-transparent"/> : <FaTimes className=" w-8 h-8 bg-transparent" />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center"
        }>
        <li
          onClick={handleClick}
          to="home" >
          <h1 className="text-white pt-0">Home</h1>
        </li>
        <li
        onClick={handleClick}
        to="exit">
        <h1 className="text-white">Exit</h1>
      </li>
      </ul>

      {/*   <div id="hamburger" onClick={handleClick}>
        {nav ? (
          <FaBars className="bars" />
        ) : (
          <div>
            <Menu />
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
