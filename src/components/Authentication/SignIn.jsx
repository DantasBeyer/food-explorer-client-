import React from "react";
import Button from "../Button/Button";
import "./Authentication.css";
function SignIn() {
  return (
    <div className="sigin_container">
      <header className="titel">Login</header>

      <section className="inputs">
        <p>Email</p>
        <input type="text" placeholder="exemple: exemple@exemple.com" />
        <p>Password</p>
        <input type="text" placeholder="minimum of 6 characters" />
      </section>

      <button>Enter</button>

      <a href="#"> Create account</a>
    </div>
  );
}

export default SignIn;
