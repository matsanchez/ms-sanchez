import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="Greeting-div">
      <h1>{greeting.title}</h1>
      <h2>{greeting.subtitle}</h2>
    </div>
  );
};

export default ItemListContainer;
