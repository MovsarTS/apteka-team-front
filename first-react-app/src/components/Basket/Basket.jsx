import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyByBasket } from "../../feauters/usersSlice";
import { amountMinus, amountPlus } from "../../feauters/usersSlice";
import { deleteBasket, fetchUsers } from "../../feauters/usersSlice";
import style from "./Basket.module.css";

const Basket = () => {
  const userId = useSelector((state) => state.applicationSlice.name);
  const user = useSelector((state) => state.usersSlice.user)

  const dispatch = useDispatch();

  function handlePlus(drugId, amount) {
    amount += 1;
    dispatch(amountPlus({ drugId, amount, userId }));
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  function handleMinus(drugId, amount) {
    if (amount !== 1) {
      amount -= 1;
      dispatch(amountMinus({ drugId, amount, userId }));
    }
  }
  function handleDelete(drugId) {
    dispatch(deleteBasket({ userId, drugId }))
  }

  const handleBuy = () => {
    dispatch(buyByBasket({ userId }))
  }

  return (
    <div className={style.basket}>
      {user.map((item) => {
        if (item._id === userId) {
          return item.basket.map((element) => {
            return (
              <div className={style.card_basket}>
                <div className={style.delBtn}>
                  <button onClick={() => handleDelete(element._id)}>✖</button>
                </div>
                {element.name}
                <div className={style.amoun_controller}>
                  <button
                    disabled={element.inBasket ? false : true}
                    onClick={() => handleMinus(element._id, element.inBasket)}
                  >
                    -
                  </button>
                  <img src={`http://localhost:3030/images/${element.image}`} alt='j' />
                  <button
                    onClick={() => handlePlus(element._id, element.inBasket)}
                  >
                    +
                  </button>
                </div>
                <div>{`Количество: ${element.inBasket}`}</div>
                {`Цена: ${element.price}`}
                {item.basket.length === 0 ? 'Корзина пуста' : <button className={style.buttonBuy} onClick={handleBuy}>Купить</button>}
              </div>
            );
          })
        }
      }
      )}
    </div>
  );
};

export default Basket;
