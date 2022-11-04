import logo from "../../assets/images/logo/converse.webp";
import { MenuItems } from "./MenuItems";
import styles from "./NavBar.module.css";
import { CartWidget } from "../Widgets/CartWidget";
import { NavToggle } from "../Widgets/NavToggle";
import { useState, useEffect } from "react";

export function NavBar() {
  const [toggle, setToggle] = useState(false);

  //Funcion que maneja el estado de acuerdo al tamaño de pantalla
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 992) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);
  });

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navToggle}>
        <NavToggle action={() => setToggle(!toggle)} />
      </div>
      <div className={styles.navRight}>
        <div className={styles.logoContainer}>
          <a href="/">
            <img src={logo} alt="Logo" className={styles.headerLogo} />
          </a>
        </div>
        {toggle && (
          <nav className={styles.navContainer}>
            <ul className={styles.navItem}>
              {MenuItems.map((item) => {
                return (
                  <li key={item.title} className={styles.navList}>
                    <a href={item.url} className={styles.navLink}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
      <div className={styles.cart}>
        <p>Cart</p>
        <CartWidget />
      </div>
    </header>
  );
}
