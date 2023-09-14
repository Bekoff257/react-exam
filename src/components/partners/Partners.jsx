import React, { useState, useEffect } from 'react';
import "./Partners.scss";
import { instance } from '../../api/allForApi';

function Partners() {
  const [partners, setPartnersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 27;

  useEffect(() => {
    instance('/watch/providers/movie')
      .then(response => {
        setPartnersData(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = partners.slice(startIndex, endIndex);
  const totalPages = Math.ceil((partners.length || 0) / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className='partners'>
      <div className="container">
        <h2>Partners</h2>
        <div className="prt_itm">
          {itemsToDisplay.map(partItm => (
            <img src={`https://image.tmdb.org/t/p/original/${partItm.logo_path}`} alt="" key={partItm.id} />
          ))}
        </div>
        <div className="pagination">
            <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            >
            Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            >
            Next
            </button>
        </div>
      </div>
    </div>
  );
}

export default Partners;
