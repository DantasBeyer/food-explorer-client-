import React from "react";
import "../Card.css";
import dishImg from "../../../img/dishes/juice/tee.png";
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
        <p>Tee </p>
      </Link>

      <div className="sub_title">
        <p>Chá de anis, canela e limao. Sinta o aroma italiano</p>
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
