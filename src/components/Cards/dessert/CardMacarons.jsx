import React from "react";
import "../Card.css";
import dishImg from "../../../img/dishes/macaron.png";
import heartImg from "../../../img/icons/heart.png";
import Stepper from "../../../components/Stepper/Stepper";
import Button from "../../../components/Button/Button";
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

      <Link to="/Details" className="title">
        <p>Macaron </p>
      </Link>

      <div className="sub_title">
        <p>Farinha de amendoas, manteiga, claras e acucar.</p>
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
