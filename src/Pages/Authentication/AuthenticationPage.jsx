import React from "react";
import { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import SignIn from "../../components/Authentication/SignIn";
import SignUp from "../../components/Authentication/SignUp";
import Logo from "../../components/Logo/Logo";
import "./AuthenticationPage.css";

function Authentication() {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => {
    setIsFlipped((prevState) => !prevState);
  };
  
  return (
    <div className="authPage_container">
      <section className="left">
        <Logo />
      </section>

      {/* switch card */}
      <section className="right">
        <Flipper flipKey={isFlipped}>
          <Flipped flipId={"card"}>
            <div>
              {isFlipped ? (
                <SignUp onClick={flipCard} />
              ) : (
                <SignIn onClick={flipCard} />
              )}
            </div>
          </Flipped>
        </Flipper>
      </section>
    </div>
  );
}

export default Authentication;
