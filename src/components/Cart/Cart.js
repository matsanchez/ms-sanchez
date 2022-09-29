import { Container } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartEmpty from "./CartEmpty";
import CartList from "./CartList";

const Cart = () => {
  const { cart, totalPriceCart, cartClear } = useContext(CartContext);

  return (
    <Container className="mt-3 bg-dark rounded-4 p-5 shadow text-center">
      {!cart.length ? (
        <CartEmpty />
      ) : (
        <CartList cart={cart} totalPriceCart={totalPriceCart().toLocaleString()} cartClear={cartClear} />
      )}
    </Container>
  );
};

export default Cart;
