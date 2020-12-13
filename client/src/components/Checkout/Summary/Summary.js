import React from 'react';
import styles from "./Summary.module.css";

// components



function Summary(props) {
    return ( 
        <div className={styles.summary}>
           <p>Number of Items <span>0</span></p>
           <p>SubTotal $<span>12.99</span></p>

           <button className={styles.summary__button}>Finalize order</button>
        </div>
    );
}

export default Summary;