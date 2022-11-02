import img from "../../assets/images/mujer/calzado/banner/0047b494219b8af236da089e2c86.jpg";
import styles from "./filterMobile.module.css";
import { PlusSign } from "../Widgets/PlusSign";
import { MinusSign } from "../Widgets/MinusSign";

export const FilterMobile = () => {
  return (
    <div className={styles.bannerImg}>
      <img src={img} alt="calzado mujeres" />
      <div className={styles.filterBtn}>
        <span>Filtros</span>
        <div className={styles.plusSign}>
          <PlusSign />
        </div>
        <div className={styles.minusSign}>
          <MinusSign />
        </div>
      </div>
    </div>
  );
};

