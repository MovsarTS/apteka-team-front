import React from 'react';
import { useSelector } from 'react-redux';
import style from './Basket.module.css'

const Basket = () => {
    const basket = useSelector((state) => state.basketSlice.basket)
    console.log(basket);
    return (<div className={style.basket}>
        {basket.map((element) => {
            return (
                <div>
                    <img src={`http://localhost:3030/images/${element.image}`}/>
                    {element.name}
                    {element.price}
                </div>
            )
        })}
    </div>
    );
};

export default Basket;