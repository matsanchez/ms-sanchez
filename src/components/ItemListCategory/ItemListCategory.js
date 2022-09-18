import * as React from "react";
import Box from "@mui/material/Box";
import Loading from "../Loading/Loading";
import ItemCategory from "./ItemCategory";
import { useEffect, useState } from "react";
import { showCategory } from "../../logicamock";

const ItemListCategory = () => {
  const [loading, setLoading] = useState(true);
  const [cardCategory, setCardCategory] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      showCategory().then((prod) => setCardCategory(prod));
      setLoading(false);
    }, 300);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            minWidth: 300,
            width: "100%",
            justifyContent: "center",
          }}
        >
          {cardCategory.map((_category) => {
            return <ItemCategory key={_category.title} category={_category} />;
          })}
        </Box>
      )}
    </>
  );
};

export default ItemListCategory;
