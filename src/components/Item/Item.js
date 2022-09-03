import * as React from "react";
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

const Item = ({ data }) => {
  const onAdd = (counter) => {
    alert(`Se agregaron ${counter} productos al carrito`);
  };
  return (
    <Card className="Card-container" sx={{ maxWidth: 250 }}>
      <div className="Card-header">
        <p>Ver detalle del producto</p>
      </div>
      <CardActionArea>
        <CardMedia component="img" image={data.pictureUrl} alt={data.name} />
        <CardContent className="Card-content">
          <Typography variant="h6" component="div" color="#fff">
            {data.name}
          </Typography>
          <Typography variant="h7" color="#fff">
            $ {data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemCount stock={5} initial={0} onAdd={onAdd} />
      <div className="Product-stock">
        <p>Stock Disponible: {data.stock} u.</p>
      </div>
    </Card>
  );
};

export default Item;
