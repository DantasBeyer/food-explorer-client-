import React from "react";
import { Link } from "react-router-dom";
import "./MyOrdersPage.css";

function MyOrdersPage() {
  return (
    <div className="myordersPage_container">
      <h1>MyOrdersPage</h1>
      <main className="main_content">Main Content</main>
      <Link className="back_btn_mobile" to="/">
        Back
      </Link>
    </div>
  );
}

export default MyOrdersPage;
