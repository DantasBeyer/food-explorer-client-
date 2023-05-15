import React from "react";
import SignIn from "../../components/Authentication/SignIn";
import Logo from "../../components/Logo/Logo";
import './Authentication.css'

function Authentication() {
  return (
    <div className="auth_container">
      <section className="left">
        <Logo />
      </section>
      <section className="right">
        <SignIn/>
      </section>
    </div>
  );
}

export default Authentication;
