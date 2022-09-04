import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyByBasket } from "../../feauters/usersSlice";
import { amountMinus, amountPlus } from "../../feauters/usersSlice";
import { deleteBasket, fetchUsers } from "../../feauters/usersSlice";
import style from "./Basket.module.css";

const Basket = () => {
  const userId = useSelector((state) => state.applicationSlice.name);
  const [disabled, setDisabled] = useState(false);
  const user = useSelector((state) => state.usersSlice.user)

  const dispatch = useDispatch();

  function handlePlus(drugId, amount) {
    amount += 1;
    dispatch(amountPlus({ drugId, amount, userId }));
    setDisabled(false);
  }

  useEffect(()=>{
    dispatch(fetchUsers())
  },[dispatch])

  function handleMinus(drugId, amount) {
    if (amount !== 1) {
      amount -= 1;
      dispatch(amountMinus({ drugId, amount, userId }));
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
 const handleBuy = () => {
  dispatch(buyByBasket({userId}))
 }

  return (
    <div className={style.basket}>
        {user.map((item)=>{
             if(item._id === userId){
                return item.basket.map((element) => {
                    return (
                      <div className={style.card_basket}>
                        <div className={style.delBtn}>
                            <button onClick={() => handleDelete(element._id)}>✖</button>
                            </div>
                        {element.name}
                        <div className={style.amoun_controller}>
                          <button
                            disabled={disabled}
                            onClick={() => handleMinus(element._id, element.inBasket)}
                          >
                            -
                          </button>
                          <img src={`http://localhost:3030/images/${element.image}`} alt='j'/>
                          <button
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
            }
        )}
        <button className={style.buttonBuy} onClick={handleBuy}>Buy</button>
    </div>
  );
};

export default Basket;
