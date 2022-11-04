import img from "../../assets/images/mujer/calzado/banner/0047b494219b8af236da089e2c86.jpg";
import styles from "./filterMobile.module.css";
import { PlusSign } from "../Widgets/PlusSign";
import { MinusSign } from "../Widgets/MinusSign";
import { MenuFilter } from "./MenuFilter";

export const FilterMobile = () => {
  return (
    <div className={styles.bannerImg}>
      <img src={img} alt="calzado mujeres" />
      <ul>
        <div className={styles.filterBtn}>
          <span>Filtros</span>
          <div className={styles.plusSign}>
            <PlusSign />
          </div>
          <div className={styles.minusSign}>
            <MinusSign />
          </div>
        </div>
        <ul>
          {MenuFilter.map((filter) => {
            return (
              <div>
                <div>
                  <h3 className={styles.title}>{filter.gender}</h3>
                  <div className={styles.plusSign}>
                    <PlusSign />
                  </div>
                  <div className={styles.minusSign}>
                    <MinusSign />
                  </div>
                </div>
                <li>
                  <a href="#">{filter.item1}</a>
                </li>
                <li>
                  <a href="#">{filter.item2}</a>
                </li>
                <li>
                  <a href="#">{filter.item3}</a>
                </li>
              </div>
            );
          })}
        </ul>
      </ul>
    </div>
  );
};
