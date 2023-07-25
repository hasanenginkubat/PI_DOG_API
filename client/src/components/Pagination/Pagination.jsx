import React from "react";
import style from "./Pagination.module.css";

export default function Pagination({ totalCount, pageSize, currentPage, onPageChange }) {
  const pageCount = Math.ceil(totalCount / pageSize);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= pageCount) {
      onPageChange(page);
    }
  };

  // Sayfa numaralarını düzgün bir şekilde oluşturun
  const generatePageNumbers = () => {
    const pageNumbers = [];

    // Önceki sayfa için bir düğme oluşturun
    if (currentPage > 1) {
      pageNumbers.push(
        <button key="prev" onClick={() => handlePageClick(currentPage - 1)}>
          &laquo;
        </button>
      );
    }

    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={currentPage === i ? style.active : ""}
        >
          {i}
        </button>
      );
    }

    // Sonraki sayfa için bir düğme oluşturun
    if (currentPage < pageCount) {
      pageNumbers.push(
        <button key="next" onClick={() => handlePageClick(currentPage + 1)}>
          &raquo;
        </button>
      );
    }

    return pageNumbers;
  };

  return (
  <div className={style.pagination}>
    {generatePageNumbers()}
  </div>
  );
}
