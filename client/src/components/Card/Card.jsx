import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { favDogs, deleteFav, cleanDog } from "../../actions";

export default function Card() {
  const dogs = useSelector((state) => state.dog);
  const dispatch = useDispatch();
  const fav = useSelector((state) => state.fav);

  const isList = (dog) => {
    return dogs.find((e) => e.id === dog.id && e.name === dog.name);
  };

  const isFav = (dog) => {
    return fav.find((favDog) => favDog.id === dog.id && favDog.name === dog.name);
  };

  const handleToggleFavorite = (dog) => {
    if (isFav(dog)) {
      dispatch(deleteFav(dog));
      console.log(fav)
    } else {
        dispatch(favDogs(dog));
        console.log(fav)
      }
    }


  const onClose = (dog) => {
    if (isList(dog)) {
      dispatch(cleanDog(dog));
    }
  };

  return (
    <div>
      {dogs.map((dog) => (
        <div key={dog.id}>
          <button onClick={() => handleToggleFavorite(dog)}>
            {isFav(dog) ? "❤️" : "🤍"}
          </button>
          <button onClick={() => onClose(dog)}>X</button>
          <h1>{dog.name}</h1>
          <img src={dog.image} alt={dog.name} />
          <h6>Country: {dog.country_code}</h6>
          <h6>Weight Max: {dog.weightMax}</h6>
          <h6>Weight Min: {dog.weightMin}</h6>
          <h6>Height Max: {dog.heightMax}</h6>
          <h6>Height Min: {dog.heightMin}</h6>
          <h6>Life Span: {dog.life_span}</h6>
        </div>
      ))}
    </div>
  );
}
