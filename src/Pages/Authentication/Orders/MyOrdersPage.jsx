import React from "react";
import { Link } from "react-router-dom";
import "./MyOrdersPage.css";

function MyOrdersPage() {
  return (
    <div className="myordersPage_container">
      MyOrdersPage
      <Link  className="back_btn_mobile" to="/">
        Home
      </Link>
    </div>
  );
}

export default MyOrdersPage;
