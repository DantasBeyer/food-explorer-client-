import React from "react";
import "../Card.css";
import dishImg from "../../../img/dishes/raranello.png";
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
        <p>Salada </p>
      </div>

      <div className="sub_title">
        <p>Rabanetes, folhas verder e molho agridoce salpicados com ergelim.</p>
      </div>

      <div className="price">
        <p>€ 12,00</p>
      </div>

      <div className="interaction">
        <Stepper />
        <Button />
      </div>
    </div>
  );
}

export default card;
