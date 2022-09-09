import { React, useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItemDetail } from "../../logicamock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [prodDetail, setProdDetail] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getItemDetail(idItem).then((detail) => setProdDetail(detail));
      setLoading(false);
    }, 1000);
  }, [idItem]);
  return (
    <div>{loading ? <Loading /> : <ItemDetail detail={prodDetail} />};</div>
  );
};

export default ItemDetailContainer;
