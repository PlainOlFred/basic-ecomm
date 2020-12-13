import React from 'react';
import styles from "./Home.module.css";

// components
import Product from "../Product/Product";

function Home(props) {
    return ( 
        <div className={styles.home}>
            <div className={styles.home__container}>

            {/*  */}
            <Product description={"dfjkdjfkd"} price={12.99} rating={2}/>
            <Product description={"dfjkdjfkd"} price={12.99} rating={2}/>
            <Product description={"dfjkdjfkd"} price={12.99} rating={5}/>

           
            </div>
        </div>
    );
}

export default Home;