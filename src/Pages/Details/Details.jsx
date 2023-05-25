import React from "react";
import "./Details.css";
import parmaImg from "../../img/dishes/parma.png";
import Tag from "../../components/Tag/Tag";
import Stepper from "../../components/Stepper/Stepper";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function Details() {
  return (
    <div className="details_container">
      <main>
        <Link to="/" className="back_btn">
          back
        </Link>
        <img className="img" src={parmaImg} alt="parma_img" />

        <section className="content">
          <h1>Torradas de Parma</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O
            pão naan dá um toque especial.
          </p>

          <div className="tags">
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
          </div>

          <div className="order">
            <Stepper />
            <Button />
          </div>
          <Link to="/" className="back_btn_mobile">
          back
        </Link>
        </section>
      </main>
    </div>
  );
}

export default Details;
