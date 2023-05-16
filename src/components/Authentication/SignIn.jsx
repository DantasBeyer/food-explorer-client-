import React from "react";
import "./Authentication.css";
import Logo from "../Logo/Logo";
import Home from "../../Pages/Home/Home";

function SignIn() {
  return (
    <div className="auth_container">
      <header>
        <p>Login</p>
        <Logo />
      </header>

      <section className="inputs">
        <p>Email</p>
        <input type="text" placeholder="exemple: exemple@exemple.com" />
        <p>Password</p>
        <input type="text" placeholder="minimum of 6 characters" />
      </section>
      <footer>
        <button id="enter" onClick={Home}>Enter</button>
        <a to="/"> Create an account</a>
      </footer>
    </div>
  );
}

export default SignIn;
