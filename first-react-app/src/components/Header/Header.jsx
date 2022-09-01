import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../Header/Header.module.css";
import AWW2 from './img/AWW2.png'
import Basket from "../Basket/Basket";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false)
  const token = useSelector((state) => state.applicationSlice.token)

  function handleBasketOpen(){
    setOpen(!open)
  }

 const handleClean = () => {
  localStorage.clear()
  window.location.reload()
 }

  return (
    <div className={styles.header}>
      <div className={styles.header_img}>
        {/* <Link to="/" className={styles.text}><img src="https://st2.depositphotos.com/1096482/7877/i/600/depositphotos_78778970-stock-photo-3d-pharmacy-symbol.jpg" alt="q" /></Link> */}
        <img src={AWW2} alt="" />
      </div>
      <div className={styles.header_text}>
        <div className={styles.link}>
          <Link to="/alldrugs" className={styles.text}> Поиск </Link>
          <Link to="/category" className={styles.text}> Категории </Link>
          <Link to="/contacts" className={styles.text}> Контакты </Link>
        </div>
        <div className={styles.btns}>
          {token ? <button className={styles.exitBtn} onClick={handleClean}>Выход</button> : <><Link to='/login' className={styles.line}><button className={styles.exitBtn}>Вход</button></Link>
          <Link to='/auth' className={styles.line}><button  className={styles.exitBtn}>Регистрация</button></Link></>}
        </div>
        <div className={styles.butt}>
          <button onClick={handleBasketOpen}> <img src="https://png.pngtree.com/png-vector/20190926/ourlarge/pngtree-shopping-cart-line-icon-vector-png-image_1744042.jpg" alt="q" /> </button>
          {
          open ? 
          <Basket />
          :
          false
        }
        </div>
      </div>
    </div>
  );
};

export default Header;
