import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CartDrugs from "../CartDrugs/CartDrugs";
import { fetchDrugs } from "../../feauters/drugsSlice";
import styles from '../MainCart/main.module.css'
import { useState } from "react";
import { useParams } from "react-router-dom";

const MainCart = () => {
  const dispatch = useDispatch();
  const drugs = useSelector((state) => state.drugsSlice.drugs);
  const { id } = useParams();

  const [input, setInput] = useState('')

  const handleSearch = (e) => {
    setInput(e.target.value)
  }

  const filtered = drugs.filter((elem) => {
    if(!id) return true;
    return elem.category === id;
  })

  const mainCat = filtered.filter((categ) => {
    return categ.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
  })

  useEffect(() => {
    dispatch(fetchDrugs());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.liveSearchMain}>
        <input placeholder="Поиск..." className={styles.inputLive} value={input} onChange={handleSearch} />
        <button className={styles.buttonLive}>click</button>
      </div>
      <div className={styles.Cards_du}>{mainCat.map((item, index) => {
        if (item.category === id) {
          return <>
            <CartDrugs drug={item} key={index} />
          </>
        }
        return (
          <>
            <CartDrugs drug={item} key={index} />
          </>
        );
      })}</div>
    </div>
  );
};

export default MainCart;
