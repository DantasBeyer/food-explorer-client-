import React from "react";
import SignIn from "../../components/Authentication/SignIn";
import SignUp from "../../components/Authentication/SignUp";
import Logo from "../../components/Logo/Logo";
import './AuthenticationPage.css'


function Authentication() {
  return (
    <div className="authPage_container">
      <section className="left">
        <Logo />
      </section>

      {/* swich card */}
      <section className="right">
      <SignIn/> 
      {/* 
      <SignUp/>
      
    */}
    </section>
    </div>
  );
}

export default Authentication;
