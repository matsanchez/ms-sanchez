import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const {
    id,
    name,
    price,
    pictureUrl,
    stock,
    sold,
    description,
    measurement,
    trademark,
    category,
  } = item;
  const [count, setCount] = useState(0);
  const [btnOptions, setBtnOptions] = useState(true);
  const { addItem } = useContext(CartContext);

  const emptyCart = () => {
    toast.error(`Ingrese la cantidad por favor!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const onAdd = (count) => {
    setBtnOptions(false);
    addItem({ ...item }, count);
    toast.success(`Agregaste ${count} ${name}`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="detail-container">
      <div className="details" key={id}>
        <div className="detail-img">
          <img src={pictureUrl} alt="" />
        </div>
        <div className="box">
          <span>Vendidos: {sold}</span>
          <div className="row">
            <h2>{name}</h2>
            <span>${price}</span>
          </div>
          <p>{description}</p>
          <div className="detail-expand">
            <p>
              <strong>Categoria:</strong> {category}
            </p>
            <p>
              <strong>Marca:</strong> {trademark}
            </p>
            <p>
              <strong>Medidas:</strong> Ancho-({measurement.width}cm) / Alto-(
              {measurement.height}cm)
            </p>
          </div>
          {btnOptions ? (
            <ItemCount
              stock={stock}
              count={count}
              setCount={setCount}
              onAdd={onAdd}
              emptyCart={emptyCart}
            />
          ) : (
            <>
              <Link to="/">
                <button className="btn-cart">Ver Catalogo</button>
              </Link>
              <Link to="/cart">
                <button className="btn-cart">Ir al carrito</button>
              </Link>
            </>
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ItemDetail;
