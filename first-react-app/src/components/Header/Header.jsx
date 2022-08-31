import React from "react";
import { Link } from "react-router-dom";
import styles from "../Header/Header.module.css";

const Header = () => {
  return (
    <div className={styles.head}>
      <div className={styles.logo}>
      <Link to="/" className={styles.text}><img src="https://st2.depositphotos.com/1096482/7877/i/600/depositphotos_78778970-stock-photo-3d-pharmacy-symbol.jpg" alt="q"/></Link>
      </div>
      <div className={styles.link}>
        <Link to="/drugs/search" className={styles.text}> Поиск </Link>
        <Link to="/about" className={styles.text}> Категории </Link>
        <Link to="/drugs/category" className={styles.text}> О нас </Link>
      </div>
      <div className={styles.butt}>
        <button> <img src="https://png.pngtree.com/png-vector/20190926/ourlarge/pngtree-shopping-cart-line-icon-vector-png-image_1744042.jpg" alt="q"/> </button>
      </div>
    </div>
  );
};

export default Header;
