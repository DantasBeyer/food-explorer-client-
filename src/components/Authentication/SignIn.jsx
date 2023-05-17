import React from "react";
import "./Authentication.css";
import Logo from "../Logo/Logo";

function SignIn({onClick}) {
  return (
    <div className="auth_container">
      <header>
        <p>Sign in</p>
        <Logo />
      </header>

      <section className="inputs">
        <p>Email</p>
        <input type="text" placeholder="exemple: exemple@exemple.com" />
        <p>Password</p>
        <input type="text" placeholder="minimum of 6 characters" />
      </section>
      <footer>
       <button href="/" id="enter">Enter</button>
        <a onClick={onClick} id="createacc"> Create an account</a>
      </footer>
    </div>
  );3
}

export default SignIn;
