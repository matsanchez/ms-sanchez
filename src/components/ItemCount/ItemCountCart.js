import React from "react";
import "./ItemCount.css";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";

const ItemCountCart = ({ item, increase, decrease }) => {
  return (
    <div className="container-item-count">
      <div className="container-counter">
        <div className="container-buttons">
          <IndeterminateCheckBoxIcon className="Icons-counter" onClick={decrease} />
          <p className="Icons-counter">{item.quantity}</p>
          <AddBoxIcon className="Icons-counter" onClick={increase} />
        </div>
      </div>
    </div>
  );
};

export default ItemCountCart;
