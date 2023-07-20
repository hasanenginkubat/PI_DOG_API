import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFav } from "../../actions";
import { Link } from "react-router-dom";
import style from "./Favorites.module.css";

export default function Favorites() {
  const fav = useSelector((state) => state.fav);
  const dispatch = useDispatch();

  const handleDeleteFavorite = (dog) => {
    dispatch(deleteFav(dog));
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Favorites</h1>
      {fav.map((dog) => (
        <div className={style.card} key={dog.id}>
          <button
            className={style.favoriteButton}
            onClick={() => handleDeleteFavorite(dog)}
          >
            ❤️
          </button>
          <h1 className={style.name}>{dog.name}</h1>
          <img className={style.image} src={dog.image} alt={dog.name} />
          <div className={style.details}>
            <h6>Country: {dog.country_code}</h6>
            <h6>Weight Max: {dog.weightMax}</h6>
            <h6>Weight Min: {dog.weightMin}</h6>
            <h6>Height Max: {dog.heightMax}</h6>
            <h6>Height Min: {dog.heightMin}</h6>
          </div>
          <Link to={`/detail/${dog.id}`}>
            <button className={style.infoButton}>Dog Info</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
