import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let products = [
      {
        id: 1,
        name: "Velador Diseño 1",
        price: 1500,
        stock: 10,
        pictureUrl: "../../../assets/products/pedestal-table/1.jpg",
      },
      {
        id: 2,
        name: "Velador Diseño 2",
        price: 1300,
        stock: 15,
        pictureUrl: "../../../assets/products/pedestal-table/2.jpg",
      },
      {
        id: 3,
        name: "Velador Diseño 3",
        price: 1400,
        stock: 5,
        pictureUrl: "../../../assets/products/pedestal-table/3.jpg",
      },
      {
        id: 4,
        name: "Velador Diseño 4",
        price: 1800,
        stock: 110,
        pictureUrl: "../../../assets/products/pedestal-table/4.jpg",
      },
      {
        id: 5,
        name: "Velador Diseño 5",
        price: 1900,
        stock: 7,
        pictureUrl: "../../../assets/products/pedestal-table/5.jpg",
      },
      {
        id: 6,
        name: "Velador Diseño 6",
        price: 1900,
        stock: 19,
        pictureUrl: "../../../assets/products/pedestal-table/6.jpg",
      },
      {
        id: 7,
        name: "Velador Diseño 6",
        price: 2900,
        stock: 50,
        pictureUrl: "../../../assets/products/pedestal-table/7.jpg",
      },
      {
        id: 8,
        name: "Velador Diseño 6",
        price: 3900,
        stock: 35,
        pictureUrl: "../../../assets/products/pedestal-table/8.jpg",
      },
    ];

    new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 2000);
    })
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="Greeting-div">
        <h1>{greeting.title}</h1>
        <h2>{greeting.subtitle}</h2>
      </div>
      <div>
        {loading && <Loading />}
        {error && alert("Error en la carga de Datos, reintente mas tarde!")}
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
