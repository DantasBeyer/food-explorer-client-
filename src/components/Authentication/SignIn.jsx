import React from "react";
import "./Authentication.css";
import Logo from '../Logo/Logo'

function SignIn() {
  return (
    <div className="sigin_container">
      <header>
        <p>Login</p>
        <Logo className="logo"/>
      
      </header>

      <section className="inputs">
        <p>Email</p>
        <input type="text" placeholder="exemple: exemple@exemple.com" />
        <p>Password</p>
        <input type="text" placeholder="minimum of 6 characters" />
      </section>
      <footer>
        <button>Enter</button>
        <a href="#"> Create account</a>
      </footer>
    </div>
  );
}

export default SignIn;
