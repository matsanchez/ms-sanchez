import { Box, Typography } from "@mui/material";
import React from "react";
import Logo from "../NavBar/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <Box className="container-footer bg-dark">
      <Box className="logo-footer">
        <img src={Logo} alt="logo" className="h-9" />
        <Typography>Proyecto Ecommerce React JS - Matias Sanchez</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
