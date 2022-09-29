import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import CustomizedBreadcrumbs from "../NavBar/Breadcrumbs";
import ItemModal from "./ItemModal";

const ItemDetail = ({ item }) => {
  const { id, name, price, stock, sold, description, measurement, trademark, category } = item;
  const [count, setCount] = useState(1);
  const [btnOptions, setBtnOptions] = useState(true);
  const { addItem } = useContext(CartContext);

  const emptyCart = () => {
    toast.error(`Ingrese la cantidad por favor!`, {
      position: "top-center",
      autoClose: 1500,
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
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="detail-container">
      <CustomizedBreadcrumbs navigation={item} />
      <div className="details" key={id}>
        <div className="detail-img">
          <ItemModal item={item} />
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
            <>
              <div className="d-flex align-items-center">
                <p>Cantidad:</p>
                <ItemCount stock={stock} count={count} setCount={setCount} />
                <span>Stock: {stock} Disponible</span>
              </div>
              <div>
                <button className="detail-btn-cart" onClick={() => (count === 0 ? emptyCart() : onAdd(count))}>
                  Agregar al carrito
                </button>
              </div>
            </>
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
