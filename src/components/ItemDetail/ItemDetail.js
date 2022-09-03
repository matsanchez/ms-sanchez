import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ detail }) => {
  return (
    <>
      <div className="Card-wrapper">
        <div className="Card-container-header">
          <img
            className="Card-img"
            src={detail.image}
            alt="Imagen de Internet"
          />
          <div className="Card-container-details">
            <h2>{detail.name}</h2>
            <h1>${detail.price}</h1>
          </div>
        </div>
        <div className="Card-container-content">
          <div className="Card-container-features">
            <h3>CARACTERISTICAS GENERALES</h3>
            <span>
              <strong>CATEGORIA:</strong> {detail.category}
            </span>
          </div>
          <div className="Card-container-description">
            <h3>DESCRIPCION DEL PRODUCTO</h3>
            <span>{detail.description}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
