import React, { useState } from "react";
import "./Navbar.css";
import Myorders from "../MyOrders/Myorders";
import exitImg from "../../img/icons/logout.png";
import Logo from "../Logo/Logo";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

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
        placeholder="search dishes or ingredients"
      />

      <Link onClick={handleClick} to="/Auth">
        <img className="exitImg" src={exitImg} alt="logout_img" />
      </Link>
      <div onClick={handleClick} className="md:hidden z-20 bg-transparent">
        {!nav ? (
          <FaBars className=" w-8 h-8 bg-transparent text-slate-400" />
        ) : (
          <FaTimes className=" w-8 h-8 bg-transparent  text-slate-400" />
        )}
      </div>
      <Transition
        show={nav}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0d1d25] flex flex-col justify-center items-center z-10 gap-10"
          }>
          <li className="bg-transparent">
            <input
              className="search_bar_menu"
              type="text"
              placeholder="Search "
            />
          </li>
          <li className="bg-transparent">
            <Link onClick={handleClick} to="/" className="text-white text-2xl ">
              Home
            </Link>
          </li>
          <li className="bg-transparent">
            <Link
              onClick={handleClick}
              to="/Auth"
              className="text-white text-2xl ">
              Exit
            </Link>
          </li>
        </ul>
      </Transition>
    </div>
  );
};

export default Navbar;
