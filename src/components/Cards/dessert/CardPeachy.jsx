import React from "react";
import "../Card.css";
import dishImg from "../../../img/dishes/pastry.png";
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

      <div className="dish">
        <img id="cardImg" src={dishImg} alt="dish_img" />
      </div>

      <Link to="/details" className="title">
        <p>Peachy </p>
      </Link>

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
