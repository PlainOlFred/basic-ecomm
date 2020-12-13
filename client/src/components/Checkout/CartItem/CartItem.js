import React from 'react';
import styles from "./CartItem.module.css";

// components



function CartItem(props) {
    const {description, price} = props;
    return ( 
        <div className={styles.cartItem}>
           <h2>{description}</h2>
           <p>{price}</p>
           <button>Remove</button>
        </div>
    );
}

export default CartItem;