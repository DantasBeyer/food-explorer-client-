import React from "react";
import "../Card.css";
import dishImg from "../../../img/dishes/juice/espresso.png";
import heartImg from "../../../img/icons/heart.png";

import Stepper from "../../Stepper/Stepper";
import Button from "../../Button/Button";

function card() {
  return (
    <div className="card_container">
      <div className="heart">
        <img id="heart" src={heartImg} alt="hear_img" />
      </div>

      <div className="dish">
        <img id="cardImg" src={dishImg} alt="dish_img" />
      </div>

      <div className="title">
        <p>Espressso</p>
      </div>

      <div className="sub_title">
        <p>Café cremoso feito na temperatura e pressao perfeita</p>
      </div>

      <div className="price">
        <p>€ 7,00</p>
      </div>

      <div className="interaction">
        <Stepper />
        <Button />
      </div>
    </div>
  );
}

export default card;
