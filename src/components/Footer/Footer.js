import React from "react";
import Logo from "../NavBar/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-footer bg-dark">
      <div className="logo-footer">
        <img src={Logo} alt="logo" className="h-9" />
        <p>Proyecto Ecommerce React JS - Matias Sanchez</p>
      </div>
    </div>
  );
};

export default Footer;
