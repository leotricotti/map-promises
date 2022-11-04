import React, { useState } from "react";
import { ChevronDown } from "../Widgets/ChevronDown";
import styles from "./filterMobile.module.css";

export const Order = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <>
      <ul>
        {toggle && (
          <div className={styles.orderBtn}>
            <span>Ordenar A-Z</span>
            <div className={styles.plusSign}>
              <ChevronDown action={() => setToggle(!toggle)} />
            </div>
          </div>
        )}
      </ul>
    </>
  )
};
