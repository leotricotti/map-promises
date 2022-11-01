import styles from './'


export const Item = ({ product }) => {
  return (
    <div key={product.id} className="card">
      <img src={product.img} alt={product.title} />
      <h3>{product.title}</h3>
    </div>
  );
};
