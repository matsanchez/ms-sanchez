import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await fetch("products.json");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    setTimeout(() => {
      getData().then((prod) => setProducts(prod));
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div>
        {loading && <Loading />}
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
