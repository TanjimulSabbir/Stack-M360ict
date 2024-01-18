import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Pagination = () => {
    const data = useSelector(state => state.pagination.pagiInfo);

    // Destructure with default values and check if data is not null
    const { pages, per_page, total } = data || {};

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(total / per_page);

    useEffect(() => {
        // onPageChange(currentPage);
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            {/* Display pagination buttons */}
            <div className='flex items-center space-x-2'>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <kbd key={pageNumber} className="kbd cursor-pointer" onClick={() => handlePageChange(pageNumber)}>
                        {pageNumber}
                    </kbd>
                ))}
            </div>
        </div>
    );
};

export default Pagination;
