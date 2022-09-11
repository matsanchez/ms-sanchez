import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ItemDetail.css";

const ItemDetail = ({ detail }) => {
  const [counter, setCounter] = useState(0);
  const [btnOptions, setBtnOptions] = useState(true);

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

  const onAdd = (counter) => {
    setBtnOptions(false);
    toast.success(`Agregaste ${counter} ${detail.name}`, {
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
      <div className="details" key={detail.id}>
        <div className="detail-img">
          <img src={detail.pictureUrl} alt="" />
        </div>
        <div className="box">
          <span>Vendidos: {detail.sold}</span>
          <div className="row">
            <h2>{detail.name}</h2>
            <span>${detail.price}</span>
          </div>
          <p>{detail.description}</p>
          <div className="detail-expand">
            <p>
              <strong>Categoria:</strong> {detail.category}
            </p>
            <p>
              <strong>Marca:</strong> {detail.trademark}
            </p>
            <p>
              <strong>Medidas:</strong> Ancho-({detail.measurement.width}cm) /
              Alto-(
              {detail.measurement.height}cm)
            </p>
          </div>
          {btnOptions ? (
            <ItemCount
              stock={detail.stock}
              counter={counter}
              setCounter={setCounter}
              onAdd={onAdd}
              emptyCart={emptyCart}
            />
          ) : (
            <>
              <Link to="/">
                <button className="btn-cart">Ver Catalogo</button>
              </Link>
              <Link to="/cart">
                <button className="btn-cart">Finalizar Compra</button>
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
