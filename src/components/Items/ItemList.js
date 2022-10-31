import productList from './ItemListContainer';

export const ItemList = () => {
  return (
    <div>
      {productList.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <p className={styles.text}>{item.title}</p>
            <img src={img} alt={item.title} />
          </div>
          );
      })}
    </div>
  );
}