import React from "react";
import "./Myorders.css";
import receptImg from "../../img/icons/recept.png";
import receptImgTwo from "../../img/icons/recept_mobile.png";
import { Link } from "react-router-dom";


function Myorders() {
  return (
    <div className="myorders_container">
      <Link to="/Orders" className="btn">
        <img className="receptImg" src={receptImg} alt="recept_img" />
        My Orders (0)
      </Link>
      <Link to="/Orders">
        <img className="receptImgMobile" src={receptImgTwo} alt="receptTwo_img" />
      </Link>
    </div>
  );
}

export default Myorders;
