import React from "react";
import "../../style/tailwind.css";
import Logo from "../Logo/Logo";
import Home from "../../Pages/Home/Home";

function SignIn({ onClick }) {
  return (
    <div className="auth_container">
      <header>
        <p className="text-gray-300 text-2xl text-center mb-6 ">Sign in</p>
        {/* <Logo className="hidden"/> */}
      </header>

      <section className="inputs">
        <p className="text-gray-400 text-xs">Email</p>
        <input className=" text-white bg-slate-800 rounded mb-3" type="text" />
        <p className="text-gray-400 text-xs">Password</p>
        <input className=" text-white bg-slate-800 rounded" type="text" />
      </section>
      <footer className="flex flex-col  text-center">
        <button
          onClick={Home}
          className="text-gray-100 text-sm bg-red-900 hover:bg-red-800  active:bg-red-700 rounded h-7 mt-6">
          Enter
        </button>
        <a
          onClick={onClick}
          className="text-gray-200 text-xs mt-3 cursor-pointer">
          Create an account
        </a>
      </footer>
    </div>
  );
}

export default SignIn;
