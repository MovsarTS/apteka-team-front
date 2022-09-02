import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBasket } from "../../feauters/basketSlice";
import { amountMinus, amountPlus } from "../../feauters/drugsSlice";
import style from "./Basket.module.css";

const Basket = () => {
  const userId = useSelector((state) => state.applicationSlice.name);
  const [disabled, setDisabled] = useState(false);
  const basket = useSelector((state) => state.basketSlice.basket);

  const dispatch = useDispatch();

  function handlePlus(drugId, amount) {
    amount += 1;
    dispatch(amountPlus({ drugId, amount }));
    setDisabled(false);
  }
  function handleMinus(drugId, amount) {
    if (amount !== 0) {
      amount -= 1;
      dispatch(amountMinus({ drugId, amount }));
    } else {
      setDisabled(true);
    }
  }
  function handleDelete(drugId){
    
    // const drugID = basket.filter((item) => {
    //     return item._id === drugId
    // })
    dispatch(deleteBasket({userId, drugId}))
  }

  return (
    <div className={style.basket}>
      {basket.map((element) => {
        return (
          <div className={style.card_basket}>
            <div className={style.delBtn}>
                <button onClick={() => handleDelete(element._id)}>X</button>
                </div>
            {element.name}
            <div className={style.amoun_controller}>
              <button
                disabled={disabled}
                onClick={() => handleMinus(element._id, element.inBasket)}
              >
                -
              </button>
              <img src={`http://localhost:3030/images/${element.image}`} />
              <button
                disabled={disabled}
                onClick={() => handlePlus(element._id, element.inBasket)}
              >
                +
              </button>
            </div>
            <div>{`Количество: ${element.inBasket}`}</div>
            {`Цена: ${element.price}`}
          </div>
        );
      })}
    </div>
  );
};

export default Basket;
