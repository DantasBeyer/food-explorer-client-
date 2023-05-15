import React from "react";
import logoFooterImg from "../../img/icons/poligon_logo_grey.png";
import "./Logo.css";

function Logo_footer() {
  return (
    <div className="logo_footer_container">
      <img src={logoFooterImg} alt="" />
      <a href="/">food explorer</a>
    </div>
  );
}

export default Logo_footer;
