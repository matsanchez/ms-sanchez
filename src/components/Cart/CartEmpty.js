import React from "react";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { red } from "@mui/material/colors";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="text-center">
      <ProductionQuantityLimitsIcon sx={{ color: red[500], fontSize: 200 }} />
      <Typography variant="h5" className="text-light mt-3">
        No hay productos en el carrito
      </Typography>
      <Link to="/">
        <Button variant="outlined" color="error" className="mt-5">
          Ver productos
        </Button>
      </Link>
    </div>
  );
};

export default CartEmpty;
