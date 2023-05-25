import React from "react";
import "./Myorders.css";
import receptImg from "../../img/icons/recept.png";
import receptImgTwo from "../../img/icons/recept_mobile.png";

function Myorders() {
  return (
    <div className="myorders_container">
      <button className="btn">
        <img className="receptImg" src={receptImg} alt="recept_img" />
        My Orders (0)
      </button>

      <img className="receptImgMobile" src={receptImgTwo} alt="receptTwo_img" />
    </div>
  );
}

export default Myorders;
