import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { pink } from "@mui/material/colors";

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
            <Avatar
              sx={{
                bgcolor: pink[500],
                width: 20,
                height: 20,
                padding: 1.5,
                fontSize: 15,
              }}
            >
              <p>{itemsInCart}</p>
            </Avatar>
          }
        >
          <Avatar sx={{ bgcolor: pink[500], width: 50, height: 50 }}>
            <ShoppingCartIcon fontSize="large" />
          </Avatar>
        </Badge>
      </Stack>
    </div>
  );
};

export default CartWidget;
