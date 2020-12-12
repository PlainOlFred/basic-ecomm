import React from 'react';
import styles from "./Header.module.css";

function Header() {
    return ( 
        <div className={styles.header}>

          <h1 className={styles.header__logo}>Ecomm</h1>

          <div className={styles.header__search}>
              <input className={styles.header__searchInput}/>
              <button className={styles.header__searchIcon}>Search</button>
          </div>

          <div className={styles.header__nav}>
              <div className={styles.header__navItem}>
                  <span className={styles.header__navOption_top}>Cart <span className={styles.header__cart}>0</span></span>
                  <span className={styles.header__navOption_bottoom}><span >Checkout</span></span>
              </div>
              <div className={styles.header__navItem}>
                  <span className={styles.header__navOption_top}>Track <span className={styles.header__orders}>0</span></span>
                  <span className={styles.header__navOption_bottoom}>Orders</span>
              </div>
              <div className={styles.header__navItem}>
                  <span className={styles.header__navOption_top}>Manange</span>
                  <span className={styles.header__navOption_bottoom}>Your Account</span>
              </div>
              <div className={styles.header__navItem}>
                  <span className={styles.header__navOption_top}>Welcome</span>
                  <span className={styles.header__navOption_bottoom}>Sign In</span>
              </div>
          </div>
        </div>
    )
}

export default Header