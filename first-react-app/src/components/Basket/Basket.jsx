import React from 'react';
import { useSelector } from 'react-redux';
import style from './Basket.module.css'

const Basket = () => {
    const basket = useSelector((state) => state.basketSlice.basket)
    console.log(basket);
    return (<>
        {basket.map((element) => {
            return(
                <div className={style.basket}>
                    <div>
                        {element._id}
                    </div>
                </div>
            )
        })}
        </>
    );
};

export default Basket;