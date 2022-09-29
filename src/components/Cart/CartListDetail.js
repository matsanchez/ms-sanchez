import React, { useContext } from "react";
import { Avatar, TableCell, TableRow } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { red } from "@mui/material/colors";
import { CartContext } from "../../context/CartContext";
import ItemCountCart from "../ItemCount/ItemCountCart";

const CartListDetail = ({ item }) => {
  const { removeItem, increaseItems } = useContext(CartContext);

  return (
    <TableRow className="media-querie-itemCart">
      <TableCell>
        <Avatar src={item.pictureUrl} sx={{ width: 56, height: 56 }} />
      </TableCell>
      <TableCell>
        <p>
          <strong>{item.quantity}u.</strong> x {item.name}
        </p>
      </TableCell>
      <TableCell>
        <p>${item.price.toLocaleString()}</p>
      </TableCell>
      <TableCell>
        <p>${(item.price * item.quantity).toLocaleString()}</p>
      </TableCell>
      <TableCell>
        <ItemCountCart item={item} increase={() => increaseItems(item)} />
      </TableCell>
      <TableCell>
        <button onClick={() => removeItem(item.id)}>
          <DeleteForeverIcon sx={{ color: red[500], fontSize: 30 }} />
        </button>
      </TableCell>
    </TableRow>
  );
};

export default CartListDetail;
