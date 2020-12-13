import React from 'react';
import styles from './Product.module.css';

function Product(props) {
    const {description, price, rating} = props;
    return (
        <div className={styles.product}>
            <div className={styles.product__description}>{description}</div>
            <div className={styles.product__price}>{price}</div>
            <div className={styles.product__rating}>
                {Array(rating).fill().map(() => <p>*</p>)}
        
            </div>
            <button  className={styles.product_button}>Add to Cart</button>
        </div>
    )
}

export default Product;