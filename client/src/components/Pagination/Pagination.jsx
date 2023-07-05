import React from "react";

export default function Pagination({ totalCount, pageSize, currentPage, onPageChange }) {
  const pageCount = Math.ceil(totalCount / pageSize);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= pageCount) {
      onPageChange(page);
    }
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return <div className="pagination">{generatePageNumbers()}</div>;
}
