import React from "react";
import Button from "react-bootstrap/Button";
import "./ItemDetail.css";

const ItemDetail = ({ detail }) => {
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
          <Button className="detail-btn-cart">Agregar al carrito</Button>
          <div className="mt-3">
            <span>Stock: {detail.stock} Disponible</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
