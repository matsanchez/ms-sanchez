import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ItemCount from "../ItemListContainer/ItemCount";
import "./Item.css";

const Item = ({ data }) => {
  const onAdd = (counter) => {
    alert(`Se agregaron ${counter} productos al carrito`);
  };
  return (
    <Card className="Card-container" sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia component="img" image={data.image} alt={data.name} />
        <CardContent className="Card-content">
          <Typography variant="h6" component="div" color="#fff">
            {data.name}
          </Typography>
          <Typography variant="body2" color="#fff">
            {data.species}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemCount stock={5} initial={0} onAdd={onAdd} />
    </Card>
  );
};

export default Item;
