import React from "react";
import './Card.css'
import dishImg from "../../img/dishes/pastry.png";
import heartImg from "../../img/icons/heart.png";
import heartClickedImg from "../../img/icons/heart_clicked.png";
import Stepper from "../Stepper/Stepper";
import Button from "../Button/Button";

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
        <p>Peachy pastrie</p>
      </div>

      <div className="sub_title">
        <p>Delicioso folheado de pessego com folhas de hortela</p>
      </div>

      <div className="price">
        <p>€ 10,00</p>
      </div>

      <div className="interaction">
        <Stepper />
        <Button />
      </div>
    </div>
  );
}

export default card;
