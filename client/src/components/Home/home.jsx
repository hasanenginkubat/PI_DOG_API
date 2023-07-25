import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, orderAlphabetically, orderByWeight,filteredByTemperament, getTemperaments } from "../../actions/index";
import { useLocation } from "react-router-dom";
import Card from "../Card/Card";

import style from "./Home.module.css";

export default function Home() {

  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperaments);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation()
  const [selectedTemperament, setSelectedTemperament] = useState("All")
  


  const handleOrderATOZ = () => {
   
       dispatch(orderAlphabetically("ascendente"))
      setCurrentPage(2)
  };
  
  const handleOrderZAO = () => {
       dispatch(orderAlphabetically("reverseAlphabetical"))
      setCurrentPage(2)
  };

  const handleOrderWeightMin = () => {
   
   dispatch(orderByWeight("weightMin"))
 setCurrentPage(2)
  };

  const handleOrderWeightMax = () => {
    
    dispatch(orderByWeight("weightMax"))
   setCurrentPage(2)
  };
  const handleFilterTemperaments = (e) => {
    const selectedValue = e.target.value;
    setSelectedTemperament(selectedValue); // selectedTemperament değerini güncelliyoruz
    dispatch(filteredByTemperament(selectedValue));
    setCurrentPage(1);

    if (selectedValue === "All") {
      dispatch(getAllDogs());
    }
  };

  useEffect(() => {
    dispatch(getAllDogs())
    dispatch(getTemperaments());
  },[dispatch])


  return (
    <div className={style.container}>
      <div className={style.selectcontainer}>
        <select className={style.botonfiltro} onChange={(e) => handleFilterTemperaments(e)}>
          <option value="All">All Temperaments</option>
          {allTemperaments &&
            allTemperaments.map((temp) => (
              <option key={temp.id} value={temp.name}>
                {temp.name}
              </option>
            ))}
        </select>
      </div>
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
      {location.pathname === "/home" && (
        <Card
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          selectedTemperament={selectedTemperament}
        />
      )}
    </div>
  );
}