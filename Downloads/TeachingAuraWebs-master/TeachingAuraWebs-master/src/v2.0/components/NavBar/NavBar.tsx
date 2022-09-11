import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.name}>Teaching Aura</div>
      <div>
        <div className={styles.menu}>
          <div className={styles.menuItem}>Home</div>
          <div className={styles.menuItem}>About Us</div>
          <div className={styles.menuItem}> Book a Demo</div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.searchBtn}>Search</button>
        <button className={styles.signInBtn}>Sign up/Login</button>
      </div>
    </div>
  );
};

export default NavBar;
