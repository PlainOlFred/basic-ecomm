import React from "react";
import styles from "./Checkout.module.css";

// components
import Summary from "./Summary/Summary";
import CartItem from "./CartItem/CartItem";

function Checkout(props) {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__container}>
        <div className={styles.checkout__items}>
          <h1>Preview Items </h1>
          <CartItem description={"dfjkdjfkd"} price={12.99} rating={2}/>
          <CartItem description={"dfjkdjfkd"} price={12.99} rating={2}/>
        </div>

        <div className={styles.checkout__summary}>
          <Summary />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
