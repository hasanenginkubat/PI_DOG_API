import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFav, deleteFav, cleanDog, deleteDog } from "../../actions";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({ currentPage, setCurrentPage }) {
  const allDogs = useSelector((state) => state.dog);
  const dispatch = useDispatch();
  const fav = useSelector((state) => state.fav);
  const pageSize = 20;
  const filteredDogs = allDogs;
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const paginatedDogs = filteredDogs.slice(startIdx, endIdx);

  const isList = (dog) => {
    return allDogs.some((e) => e.id === dog.id && e.name === dog.name);
  };

  const isFav = (dog) => {
    return fav.some((favDog) => favDog.id === dog.id && favDog.name === dog.name);
  };

  const handleToggleFavorite = (dog) => {
    if (isFav(dog)) {
      dispatch(deleteFav(dog));
      console.log(fav);
    } else {
      dispatch(addFav(dog));
      console.log(fav);
    }
  };

  const onClose = (dog) => {
    if (isList(dog)) {
      dispatch(cleanDog(dog));
    }
  };

  const clear = (dog) => {
    if (dog) {
      dispatch(deleteDog(dog));
      alert("DOG DELETED");
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={style.div}>
      <Pagination
        totalCount={filteredDogs.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <div className={style.Row}>
        {paginatedDogs.map((dog) => (
          <div className={style.map} key={`${dog.id}-${dog.name}`}>
            <button className={style.buttonFavorite} onClick={() => handleToggleFavorite(dog)}>
              {isFav(dog) ? "❤️" : "🤍"}
            </button>
            <button className={style.onClose} onClick={() => onClose(dog)}>
              X
            </button>
            <h1 className={style.name}>{dog.name}</h1>
            <img src={dog.image} alt={dog.name} />
            <div className={style.informacion}>
              <h6>Weight Max: {dog.weightMax}</h6>
              <h6>Weight Min: {dog.weightMin}</h6>
              <h6>Height Max: {dog.heightMax}</h6>
              <h6>Height Min: {dog.heightMin}</h6>
              {dog.life_span && <h6>Life Span: {dog.life_span}</h6>}
            </div>
            <div>
              <Link to={`/details/${dog.id}`}>
                <button className={style.info}>DOG INFO</button>
              </Link>
              <button className={style.delete} onClick={() => clear(dog.name)}>DELETE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
