import { useState } from 'react';

function Paginate({ page, totalPages, setPage, setItemsPerPage }) {
  return (
    <div>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Précédent 
      </button>
      <span> Page {page} sur {totalPages} </span>
      <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        Suivant
      </button>
      <select onChange={(e) => setItemsPerPage(Number(e.target.value))}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </div>
  );
}

export default Paginate;
