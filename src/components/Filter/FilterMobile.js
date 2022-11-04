import React, { useState } from "react";
import img from "../../assets/images/mujer/calzado/banner/0047b494219b8af236da089e2c86.jpg";
import styles from "./filterMobile.module.css";
import { PlusSign } from "../Widgets/PlusSign";
import { MenuFilter } from "./MenuFilter";

export const FilterMobile = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.bannerImg}>
      <img src={img} alt="calzado mujeres" />
      <ul>
        <div className={styles.filterBtn}>
          <span>Filtros</span>
          <div className={styles.plusSign}>
            <PlusSign action={() => setToggle(!toggle)} />
          </div>
        </div>
        {toggle && (
          <ul>
            {MenuFilter.map((filter) => {
              return (
                <div key={filter.id}>
                  <div className={styles.subMenu}>
                    <h3 className={styles.title}>{filter.gender}</h3>
                    <div className={styles.filterPlus}>
                      <PlusSign />
                    </div>
                  </div>
                  <form action="">
                    <li className={styles.subMenuItem}>
                      <label className={styles.subMenuLabel}>
                        <input type="radio" name="item" />
                        <span className={styles.subMenuText}>
                          {filter.item1}
                        </span>
                      </label>
                    </li>
                    <li className={styles.subMenuItem}>
                      <label className={styles.subMenuLabel}>
                        <input type="radio" name="item" />
                        <span className={styles.subMenuText}>
                          {filter.item2}
                        </span>
                      </label>
                    </li>
                    <li className={styles.subMenuItem}>
                      <label className={styles.subMenuLabel}>
                        <input type="radio" name="item" />
                        <span className={styles.subMenuText}>
                          {filter.item3}
                        </span>
                      </label>
                    </li>
                  </form>
                </div>
              );
            })}
          </ul>
        )}
      </ul>
    </div>
  );
};
