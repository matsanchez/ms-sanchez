import React, { useState } from "react";
import "./ItemCount.css";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  return (
    <div className="container-item-count">
      <div className="container-counter">
        <p>Producto Numero 1</p>
        <div className="container-buttons">
          <RemoveCircleOutlineIcon
            onClick={() => (counter === 0 ? "" : setCounter(counter - 1))}
          />
          <p>{counter}</p>
          <AddCircleOutlineIcon
            onClick={() => (stock <= counter ? "" : setCounter(counter + 1))}
          />
        </div>
        <button
          className="button-add-cart"
          onClick={() =>
            counter === 0
              ? alert("No hay productos para agregar")
              : onAdd(counter)
          }
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
