import React from "react";
import { useDispatch } from "react-redux";
import { getAllDogs, orderAlphabetically, orderByWeight } from "../../actions/index";

import style from "./Home.module.css";

export default function Home() {

  const dispatch = useDispatch();

  const handleOrderATOZ = () => {
    dispatch(getAllDogs()).then(() => dispatch(orderAlphabetically("ascendente")));
  };

  const handleOrderZAO = () => {
    dispatch(getAllDogs()).then(() => dispatch(orderAlphabetically("reverseAlphabetical")));
  };

  const handleOrderWeightMin = () => {
    dispatch(getAllDogs()).then(() => dispatch(orderByWeight("weightMin")));
  };

  const handleOrderWeightMax = () => {
    dispatch(getAllDogs()).then(() => dispatch(orderByWeight("weightMax")));
  };

  return (
    <div className={style.container}>
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={handleOrderATOZ}>
          Alphabetical Order
        </button>
        <button className={style.button} onClick={handleOrderZAO}>
          Reverse Alphabetical Order
        </button>
        <button className={style.button} onClick={handleOrderWeightMin}>
          Weight Min Order
        </button>
        <button className={style.button} onClick={handleOrderWeightMax}>
          Weight Max Order
        </button>
      </div>
    </div>
  );
}
