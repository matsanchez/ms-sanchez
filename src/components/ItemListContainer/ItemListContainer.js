import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getData, getCategory } from "../../logicamock";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    setLoading(true);

    if (!idCategory) {
      setTimeout(() => {
        getData().then((prod) => setProducts(prod));
        setLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        getCategory(idCategory).then((prod) => setProducts(prod));
        setLoading(false);
      }, 2000);
    }
  }, [idCategory]);

  return (
    <>
      <div>{loading ? <Loading /> : <ItemList products={products} />}</div>
    </>
  );
};

export default ItemListContainer;
