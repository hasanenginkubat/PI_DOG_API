import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, orderByAZ, orderByWeight } from "../../actions/index";
import Pagination from "../Pagination/Pagination";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page - 1);
  };

  const allDogs = useSelector((state) => state.allDogs);
  const dispatch = useDispatch();
  const pageSize = 10;
  const pageCount = Math.ceil(allDogs.length / pageSize);
  const pages = Array.from({ length: pageCount }, (_, i) =>
    allDogs.slice(i * pageSize, (i + 1) * pageSize)
  );

  const handleOrderATOZ = () => {
    dispatch(getAllDogs()).then(() => dispatch(orderByAZ("ascendente")));
    setCurrentPage(1);
  };

  const handleOrderZAO = () => {
    dispatch(getAllDogs()).then(() => dispatch(orderByAZ("reverseAlphabetical")));
    setCurrentPage(1);
  };

  const handleOrderWeightMin = () => {
    dispatch(getAllDogs()).then(() => dispatch(orderByWeight("weightMin")));
    setCurrentPage(1);
  };

  const handleOrderWeightMax = () => {
    dispatch(getAllDogs()).then(() => dispatch(orderByWeight("weightMax")));
    setCurrentPage(1);
  };

  return (
    <div>
      <div>
        <button onClick={handleOrderATOZ}>Alphabetical Order</button>
        <button onClick={handleOrderZAO}>Reverse Alphabetical Order</button>
        <button onClick={handleOrderWeightMin}>Weight Min Order</button>
        <button onClick={handleOrderWeightMax}>Weight Max Order</button>
      </div>

      {pages && pages[currentPage] && pages[currentPage].map((e) => (
        <div key={e.id}>
          <h1>{e.name}</h1>
          <img src={e.image} alt={e.name} />
          <h6>Country: {e.country_code}</h6>
          <h6>Weight Max: {e.weightMax}</h6>
          <h6>Weight Min: {e.weightMin}</h6>
          <h6>Height Max: {e.heightMax}</h6>
          <h6>Height Min: {e.heightMin}</h6>
          <h6>Life Span: {e.life_span}</h6>
        </div>
      ))}

      <Pagination
        totalCount={allDogs.length}
        pageSize={pageSize}
        currentPage={currentPage + 1}
        onPageChange={handlePageChange}
      />
    </div>
  );
}