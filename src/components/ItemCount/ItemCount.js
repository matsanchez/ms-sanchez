import React from "react";
import "./ItemCount.css";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";

const ItemCount = ({ stock, count, setCount }) => {
  return (
    <div className="container-item-count">
      <div className="container-counter">
        <div className="container-buttons">
          <IndeterminateCheckBoxIcon
            className="Icons-counter"
            onClick={() => (count === 0 ? "" : setCount(count - 1))}
          />
          <p className="Icons-counter">{count}</p>
          <AddBoxIcon className="Icons-counter" onClick={() => (stock <= count ? "" : setCount(count + 1))} />
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
