import React, { useState, useEffect } from "react";
import "./ItemList.css";

//COMPONENTS
import Item from "../Item/Item";

const ItemList = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, []);

  return (
    <div className="Cards-container">
      {character.map((charac) => {
        return <Item key={charac.id} data={charac} />;
      })}
    </div>
  );
};

export default ItemList;
