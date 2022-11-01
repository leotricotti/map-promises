import { Item } from "./Item";

export const ItemList = ({ productsList }) => {
  return (
    <>
      {productsList.map((product) => {
        return <Item product = {product} />;
      })}
    </>
  );
};
