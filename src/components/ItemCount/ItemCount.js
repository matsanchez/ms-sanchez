import React from "react";
import "./ItemCount.css";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";

const ItemCount = ({ stock, onAdd, emptyCart, counter, setCounter }) => {
  return (
    <div className="container-item-count">
      <div className="container-counter">
        <p>Cantidad:</p>
        <div className="container-buttons">
          <IndeterminateCheckBoxIcon
            className="Icons-counter"
            onClick={() => (counter === 0 ? "" : setCounter(counter - 1))}
          />
          <p className="Icons-counter">{counter}</p>
          <AddBoxIcon
            className="Icons-counter"
            onClick={() => (stock <= counter ? "" : setCounter(counter + 1))}
          />
        </div>
        <div>
          <span>Stock: {stock} Disponible</span>
        </div>
      </div>
      <div>
        <button
          className="detail-btn-cart"
          onClick={() => (counter === 0 ? emptyCart() : onAdd(counter))}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
