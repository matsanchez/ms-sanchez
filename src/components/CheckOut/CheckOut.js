import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Container, Typography, Box } from "@mui/material";
import CheckOutForm from "./CheckOutForm";
import CheckOutResume from "./CheckOutResume";
import { setOrder } from "../../firebase/LogicApi";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const { cart, totalPriceCart, cartClear } = useContext(CartContext);
  const [showIdOrder, setShowIdOrder] = useState();
  const [boolean, setBoolean] = useState(true);
  const navigate = useNavigate();

  const getOrderId = async (order) => {
    const idOrder = await setOrder(order);
    setShowIdOrder(idOrder);
    setBoolean(false);
    cartClear();
  };

  useEffect(() => {
    if (!cart.length) {
      navigate("/Notfound");
    }
  }, []);

  return (
    <Container className="mt-3 bg-dark rounded-4 p-3 shadow text-center">
      {boolean ? (
        <>
          <h1 className="fs-1 text-center uppercase text-white">checkout</h1>
          <div className="d-flex justify-content-between">
            <CheckOutForm cart={cart} totalPriceCart={totalPriceCart} getOrderId={getOrderId} />
            <CheckOutResume cart={cart} totalPriceCart={totalPriceCart} />
          </div>
        </>
      ) : (
        <Box>
          <VerifiedIcon color="success" sx={{ width: 100, height: 100 }} />
          <Typography className="text-white mt-2">Su pedido fue generado exitosamente con el codigo: </Typography>
          <Typography variant="h4" className="bg-light rounded-3 mt-1 mb-1 p-2">
            {showIdOrder}
          </Typography>
          <Typography className="text-white">En la brevedad recibirá un correo con los pasos a seguir</Typography>
          <Typography variant="h4" className="text-white mt-3">
            Gracias por su compra!
          </Typography>
        </Box>
      )}
    </Container>
  );
};
export default CheckOut;
