import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CartDrugs from "../CartDrugs/CartDrugs";
import { fetchDrugs } from "../../feauters/drugsSlice";
import styles from '../MainCart/main.module.css'
import { useState } from "react";

const MainCart = () => {
  const dispatch = useDispatch();
  const drugs = useSelector((state) => state.drugsSlice.drugs);

  const [input, setInput] = useState('')

  const handleSearch = (e) => {
    setInput(e.target.value)
  }

  const filtered = drugs.filter((elem) => {
    return elem.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
  })

  useEffect(() => {
    dispatch(fetchDrugs());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.liveSearchMain}>
        <input placeholder="Поиск..." className={styles.inputLive} value={input} onChange={handleSearch}/>
        <button className={styles.buttonLive}>click</button>
      </div>
      {filtered.map((item, index) => {
        return (
          <>
            <CartDrugs drug={item} key={index}/>
          </>
        );
      })}
    </div>
  );
};

export default MainCart;
