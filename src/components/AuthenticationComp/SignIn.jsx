import React from "react";
import "../../style/tailwind.css";
import { Link } from "react-router-dom";


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
      <Link
      to="/"
      className="text-gray-100 text-sm bg-red-900 hover:bg-red-800  active:bg-red-700 rounded h-7 mt-6 block text-center pt-1">
      Enter
    </Link>
        <button
          onClick={onClick}
          className="text-gray-200 text-xs mt-3 cursor-pointer">
          Create an account
        </button>
      </footer>
    </div>
  );
}

export default SignIn;
