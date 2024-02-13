import React, { useState, useContext, useEffect } from 'react';


const Pagination = ({ totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    while (pageNumbers.length < maxPagesToShow && startPage <= endPage) {
      pageNumbers.push(startPage);
      startPage++;
    }

    return pageNumbers.map((pageNumber) => (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        style={{
          fontWeight: pageNumber === currentPage ? 'bold' : 'normal',
          backgroundColor: pageNumber === currentPage ? '#4CAF50' : '#fff',
          color: pageNumber === currentPage ? '#fff' : '#000',
        }}
      >
        {pageNumber}
      </button>
    ));
  };

  return (
    <div>
      {/* Renderiza os botões de página */}
      {renderPageNumbers()}

      <div>
        {/* Renderiza os itens da página atual */}
        {/* Aqui você deve adicionar a lógica para renderizar os itens da página atual */}
        {/* por exemplo, usando um map no array de itens correspondentes à página atual */}
        {/* {currentItems.map((item, index) => (
          <div key={index}>{/* Renderizar os itens aqui * /}</div>
        ))} */}
      </div>
    </div>
  );
};

export default Pagination;
