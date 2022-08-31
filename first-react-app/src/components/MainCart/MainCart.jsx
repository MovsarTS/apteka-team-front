import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CartDrugs from "../CartDrugs/CartDrugs";
import { fetchDrugs } from "../../feauters/drugsSlice";

const MainCart = () => {
  const dispatch = useDispatch();
  const drugs = useSelector((state) => state.drugsSlice.drugs);

  useEffect(() => {
    dispatch(fetchDrugs());
  }, [dispatch]);

  return (
    <div>
      {drugs.map((item, index) => {
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
