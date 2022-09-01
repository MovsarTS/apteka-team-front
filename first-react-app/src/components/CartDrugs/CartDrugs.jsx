import React from 'react';
import styles from "../CartDrugs/CartDrugs.module.css"
import Aos from 'aos';
import { useEffect } from 'react';

const CartNews = ({drug}) => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

    return (
      <div  data-aos='zoom-in' className={styles.wrapper}>
      <div class={styles.productImg}>
      <img src={`http://localhost:3030/images/${drug.image}`} alt='port'/>
    </div>
    <div className={styles.productInfo}>
      <div className={styles.productText}>
        <h1>{drug.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vitae in praesentium laudantium dolorem molestiae ut voluptate culpa fuga consequuntur suscipit, tempore voluptas repellendus possimus, blanditiis labore? Aliquam, iure laborum.</p>
      </div>
      <div className={styles.productPriceBtn}>
        <p><span>{drug.price}₽</span></p>
        <button type='button'>Добавить <br />в корзину</button>
      </div>
    </div>
    </div>
    );

    
};

export default CartNews;