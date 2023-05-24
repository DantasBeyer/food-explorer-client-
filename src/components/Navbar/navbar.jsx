import React, { useState } from "react";
import "./Navbar.css";
import Myorders from "../MyOrders/Myorders";
import exitImg from "../../img/icons/logout.png";
import Logo from "../Logo/Logo";
import { FaBars, FaTimes } from "react-icons/fa";
import Details from "../../Pages/Details/Details";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div id="navbar_container">
      <Logo />
      <input
        className="search_bar"
        type="text"
        placeholder="search dishes or ingredients"
      />

      <div className="myorders">
        <Myorders />
      </div>
      <a href="/auth">
        <img className="exitImg" src={exitImg} alt="logout_img" />
      </a>
      <div onClick={handleClick} className="md:hidden z-20 bg-transparent">
        {!nav ? (
          <FaBars className=" w-8 h-8 bg-transparent" />
        ) : (
          <FaTimes className=" w-8 h-8 bg-transparent" />
        )}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0d1d25] flex flex-col justify-center items-center z-10 gap-10"
        }>
        <li onClick={handleClick} to="/">
        <h1 className="text-white bg-[#0d1d25] text-2xl ">Home</h1>
        </li>
        <li>
          <input
            className="search_bar_menu"
            type="text"
            placeholder="search dishes or ingredients"
          />
        </li>
        <li onClick={handleClick} to={Details}>
          <h1 className="text-white bg-[#0d1d25] text-2xl">Details</h1>
        </li>
        <li onClick={handleClick} to="exit">
          <h1 className="text-white bg-[#0d1d25] text-2xl ">Exit</h1>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
