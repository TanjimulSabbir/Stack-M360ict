import { useState, useEffect } from 'react';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
    console.log(totalItems);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    useEffect(() => {
        onPageChange(currentPage);
    }, [currentPage, onPageChange]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            {/* Display pagination buttons */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
                    {pageNumber}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
