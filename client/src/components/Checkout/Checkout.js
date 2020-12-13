import React from 'react';
import styles from "./Checkout.module.css";

// components


function Checkout(props) {
    return ( 
        <div className={styles.checkout}>
            <div className={styles.checkout__container}>

                <div className={styles.checkout__items}>
                    <h1>Preview Items </h1>
                    {/* CartItem */}
                    {/* CartItem */}
                    {/* CartItem */}
                    {/* CartItem */}
                </div>

                <div className={styles.checkout__summary}>
                    <h1>Summary</h1>
                    <p>sub Total</p>
                </div>
                
            </div>
        </div>
    );
}

export default Checkout;