import styles from './item.module.css'


export const Item = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.img} alt={product.title} />
      <h3 className={styles.title}>{product.title}</h3>
    </div>
  );
};
