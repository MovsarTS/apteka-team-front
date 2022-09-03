import React from 'react';
import styles from "../CartDrugs/CartDrugs.module.css"
import Aos from 'aos';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchBasket, patchBasket } from "../../feauters/basketSlice";
import { useState } from "react";
import { fetchUsers } from '../../feauters/usersSlice';
import { adddrug } from '../../feauters/usersSlice';

const CartNews = ({drug}) => {
  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.applicationSlice.name);
  const basket = useSelector((state) => state.basketSlice.basket);

  const newBas = basket.find((item)=>item._id === drug._id)
  useEffect(() => {
    Aos.init({duration: 2000})
    dispatch(fetchBasket(userId))
  }, [dispatch])

  function hadleAddInBasket(drug) {
    dispatch(patchBasket({userId, drug}),
    dispatch(fetchUsers()))
    dispatch(fetchUsers())
  }


    return (
    <div  data-aos='zoom-in' className={styles.cardAndInf}>
      <div className={styles.wrapper}>
        <div class={styles.productImg}>
        <img src={`http://localhost:3030/images/${drug.image}`} alt='port'/>
        </div>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productText}>
          <h1>{drug.name}</h1>
          <p className={styles.disc}>{drug.discription}</p>
        <div className={styles.productPriceBtn}>
          <p>{drug.price}₽</p>
          <button className={styles.btn11} type='button' onClick={() => hadleAddInBasket(drug._id)} disabled={newBas ? true : false} >Добавить в корзину</button>
        </div>
      </div>
        
      </div>
    </div>
    );

    
};

export default CartNews;