import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="Cards-container">
      {products.map((prod) => {
        return <Item key={prod.id} data={prod} />;
      })}
    </div>
  );
};

export default ItemList;
