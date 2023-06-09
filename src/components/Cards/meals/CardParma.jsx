import React from "react";
import "../Card.css";
import dishImg from "../../../img/dishes/parma.png";
import heartImg from "../../../img/icons/heart.png";
import { Link } from "react-router-dom";
import Stepper from "../../Stepper/Stepper";
import Button from "../../Button/Button";

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
        <p>Torradas </p>
      </Link>

      <div className="sub_title">
        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
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
