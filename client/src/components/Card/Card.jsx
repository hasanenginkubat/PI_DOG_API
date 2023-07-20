import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFav, deleteFav, cleanDog } from "../../actions";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card() {
  const allDogs = useSelector((state) => state.dog);
  const dispatch = useDispatch();
  const fav = useSelector((state) => state.fav);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Aynı olan köpekleri filtreleyen fonksiyon
  const filterDuplicateDogs = (dogs) => {
    const uniqueDogs = [];
    dogs.forEach((dog) => {
      if (!uniqueDogs.some((d) => d.id === dog.id && d.name === dog.name)) {
        uniqueDogs.push(dog);
      }
    });
    return uniqueDogs;
  };

  // Filtrelenmiş ve sayfalandırılmış köpekleri alın
  const filteredDogs = filterDuplicateDogs(allDogs);
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const paginatedDogs = filteredDogs.slice(startIdx, endIdx);

  const isList = (dog) => {
    return allDogs.find((e) => e.id === dog.id && e.name === dog.name);
  };

  const isFav = (dog) => {
    return fav.find((favDog) => favDog.id === dog.id && favDog.name === dog.name);
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
          <div className={style.informacion}></div>
          <h6>Weight Max: {dog.weightMax}</h6>
          <h6>Weight Min: {dog.weightMin}</h6>
          <h6>Height Max: {dog.heightMax}</h6>
          <h6>Height Min: {dog.heightMin}</h6>
          {dog.life_span && <h6>Life Span: {dog.life_span}</h6>}
          {dog.life_spanMin && dog.life_spanMax && (
            <div>
              <h6>Life Span Min: {dog.life_spanMin}</h6>
              <h6>Life Span Max: {dog.life_spanMax}</h6>
            </div>
          )}
          <div>
            <Link to={`/details/${dog.id}`}>
              <button className={style.info}>Dog info</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
