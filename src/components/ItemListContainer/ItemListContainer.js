import React from "react";
import ItemCount from "./ItemCount";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const onAdd = (counter) => {
    alert(`Se agregaron ${counter} productos al carrito`);
  };

  return (
    <div className="Greeting-div">
      <h1>{greeting.title}</h1>
      <h2>{greeting.subtitle}</h2>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
