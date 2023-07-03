import React from "react";

export default function DogList({ dogs, totalPages, currentPage, handlePageChange }) {
  return (
    <div>
      <div>
        {/* Sayfa değiştirme düğmeleri */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {dogs.map((dog) => (
        <div key={dog.id}>
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
