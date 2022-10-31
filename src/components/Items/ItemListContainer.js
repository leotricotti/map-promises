import { useState, useEffect } from "react";
import { getProducts } from "../../assets/data/products";
import { ItemList } from "./ItemList";

export const Card = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProductList(res));
  }, []);

  return (
    <ItemList productList = {productList} />
  );
};
