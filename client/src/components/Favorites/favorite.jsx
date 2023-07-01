import React from "react";
import { useSelector } from "react-redux";


export default function Favorites() {
  const fav = useSelector((state) => state.fav);


  return (
    <div>
      {fav.map((dog) => (
        <div key={dog.id}>
          <h1>{dog.name}</h1>
          <img src={dog.image} alt={dog.name} />
          <h6>Country: {dog.country_code}</h6>
          <h6>Weight Max: {dog.weightMax}</h6>
          <h6>Weight Min: {dog.weightMin}</h6>
          <h6>Height Max: {dog.heightMax}</h6>
          <h6>Height Min: {dog.heightMin}</h6>
        </div>
      ))}
    </div>
  );
}
