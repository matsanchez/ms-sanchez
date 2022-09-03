import { React, useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail";

const getData = async () => {
  const response = await fetch("https://peticiones.online/api/products/1");
  const data = await response.json();
  return data;
};

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [prodDetail, setProdDetail] = useState({});

  useEffect(() => {
    setTimeout(() => {
      getData().then((detail) => setProdDetail(detail));
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading === true ? <Loading /> : <ItemDetail detail={prodDetail} />};
    </div>
  );
};

export default ItemDetailContainer;
