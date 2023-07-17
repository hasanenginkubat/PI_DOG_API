import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDetails } from "../../actions/index";
import { useParams } from "react-router";
import style from "./details.module.css";


export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();


  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const dogDetails = useSelector((state) => state.details);

 

  return (
    <div className={style.classDiv}>
      {dogDetails &&
        <div className={style.detail}>
          <img className={style.img} src={dogDetails.image} alt="Not Found" />
          <h2 className={style.h2}>{dogDetails.name} </h2>
          <h5>Minimun height: {dogDetails.heightMin} Cm</h5>
          <h5>Maximun height: {dogDetails.heightMax} Cm</h5>
          <h5>Minimun weight: {dogDetails.weightMin} Kg</h5>
          <h5>Maximun weight: {dogDetails.weightMax} Kg</h5>
          <h5>Life span: {dogDetails.life_span} Years</h5>
          <h5>Temperaments: {dogDetails.temperament}</h5>
        </div>
      
      }
    </div>
  );
}