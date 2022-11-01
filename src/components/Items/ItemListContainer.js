import { useState, useEffect } from "react";
import { getProducts } from "../../assets/data/products";
import { ItemList } from "./ItemList";

export const Card = (i) => {
  const [productsList, setProductList] = useState([]);
  
  useEffect(() => {
    getProducts().then((res) => setProductList(res));
  }, []);

  return (
    <ItemList productsList = {productsList} />
  );
};

