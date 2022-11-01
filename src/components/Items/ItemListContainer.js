import { useState, useEffect } from "react";
import { getProducts } from "../../assets/data/products";
import { ItemList } from "./ItemList";
import styles  from './itemListContainer.module.css'

export const Card = () => {
  const [productsList, setProductList] = useState([]);
  
  useEffect(() => {
    getProducts().then((res) => setProductList(res));
  }, []);

  return (
    <div className={styles.gridContainer}>
      <ItemList productsList = {productsList} />
    </div>
  );
};

