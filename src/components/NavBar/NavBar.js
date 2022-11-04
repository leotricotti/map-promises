import { useState } from "react";
import logo from "../../assets/images/logo/converse.webp";
import { MenuItems } from "./MenuItems";
import styles from "./NavBar.module.css";
import { CartWidget } from "../Widgets/CartWidget";
import { NavToggle } from "../Widgets/NavToggle";
import { NavBarDesktop } from "./NavBarDesktop";


export function NavBar() {
  const [toggle, setToggle] = useState(false);

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
      <div className={styles.navDesktop}>
        <NavBarDesktop />
      </div>
      <div className={styles.cart}>
        <p>Cart</p>
        <CartWidget />
      </div>
    </header>
  );
}
