import React from "react";
import "../Card.css";
import dishImg from "../../../img/dishes/gambes.png";
import heartImg from "../../../img/icons/heart.png";

import Stepper from "../../Stepper/Stepper";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

function card() {
  return (
    <div className="card_container">
      <div className="heart">
        <img id="heart" src={heartImg} alt="hear_img" />
      </div>

      <Link to="/Details" className="dish">
        <img id="cardImg" src={dishImg} alt="dish_img" />
      </Link>

      <Link to="/details" className="title">
        <p>Spaguetti </p>
      </Link>

      <div className="sub_title">
        <p>Massa fresca com camaroes e pesto, que delicia, jovem.</p>
      </div>

      <div className="price">
        <p>€ 25,00</p>
      </div>

      <div className="interaction">
        <Stepper />
        <Button />
      </div>
    </div>
  );
}

export default card;
