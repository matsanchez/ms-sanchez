import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Avatar, Stack } from "@mui/material/";
import { pink } from "@mui/material/colors";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  let itemsInCart = 0;

  cart.map((item) => {
    return (itemsInCart = itemsInCart + item.quantity);
  });
  return (
    <div className="cart">
      <Stack>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          badgeContent={
            !cart.length ? null : (
              <Avatar
                sx={{
                  bgcolor: pink[800],
                  width: 20,
                  height: 20,
                  padding: 1.5,
                  fontSize: 15,
                }}
              >
                <p>{itemsInCart}</p>
              </Avatar>
            )
          }
        >
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      </Stack>
    </div>
  );
};

export default CartWidget;
