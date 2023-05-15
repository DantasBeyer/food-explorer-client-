import React from "react";
import "./Details.css";
import parmaImg from "../../img/dishes/parma.png";
import Tag from "../../components/Tag/Tag";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Stepper from "../../components/Stepper/Stepper";
import Button from "../../components/Button/Button";


function Details() {
  return (
    <div className="details_container">
      

    {/*   <button className="btn_back">
        <img src={backImg} alt="back_img" />
        back
      </button> */}

      <main>
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
        </section>
      </main>
   
    </div>
  );
}

export default Details;
