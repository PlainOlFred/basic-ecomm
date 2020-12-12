import React from 'react';
import styles from "./Header.module.css";

function Header() {
    return ( 
        <div className={styles.header}>
            
          <h1 className={styles.header__logo}>Ecomm</h1>

          <div className={styles.header__search}>
              <input className={styles.header__searchInput}/>
          </div>

          <div className={styles.header__nav}>
              <div className={styles.header__navItem}>
                  <span className={styles.header__navOption_top}>Welcome</span>
                  <span className={styles.header__navOption_bottoom}>Sign In</span>
              </div>
              <div className={styles.header__navItem}>
                  <span className={styles.header__navOption_top}>Track</span>
                  <span className={styles.header__navOption_bottoom}>Order</span>
              </div>
              <div className={styles.header__navItem}>
                  <span className={styles.header__navOption_top}>Manange</span>
                  <span className={styles.header__navOption_bottoom}>Your Account</span>
              </div>
          </div>
        </div>
    )
}

export default Header