import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  let itemsInCart = 0;

  cart.map((item) => {
    return (itemsInCart = itemsInCart + item.quantity);
  });

  return (
    <div className="cart">
      <ShoppingCartIcon />
      <p>{itemsInCart}</p>
    </div>
  );
};

export default CartWidget;
