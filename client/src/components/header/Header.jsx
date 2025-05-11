import React from "react";
import "./header.css";
import img from "../../assets/img.jpg";

function Header() {
  return (
    <div className="headerContainer">
      <img src={img} alt="img" />
      <h1>Domaine Name Finder</h1>
    </div>
  );
}

export default Header;
