import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../firebase/LogicApi";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const allProducts = await getAllProducts(idCategory);
      setProducts(allProducts);
      setLoading(false);
    };
    getProducts();
  }, [idCategory]);

  return (
    <>
      <div>{loading ? <Loading /> : <ItemList products={products} />}</div>
    </>
  );
};

export default ItemListContainer;
