import React from "react";
import "./Authentication.css";
import Logo from "../Logo/Logo";

function SignUp() {
  return (
    <div className="auth_container">
      <header>
        <p>Sign Up</p>
        <Logo />
      </header>

      <section className="inputs">
        <p>Name</p>
        <input type="text" placeholder="minimum of 6 characters" />
        <p>Email</p>
        <input type="text" placeholder="exemple: exemple@exemple.com" />
        <p>Password</p>
        <input type="text" placeholder="minimum of 6 characters" />
      </section>
      <footer>
        <button>Enter</button>
        <a href="#"> I have alrady an account</a>
      </footer>
    </div>
  );
}

export default SignUp;
