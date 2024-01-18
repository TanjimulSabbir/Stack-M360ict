import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../RTK/features/pagination/paginationSlice';

const Pagination = () => {
    const data = useSelector(state => state.pagination.pagiInfo);

    // Destructure with default values and check if data is not null
    const { per_page, total } = data || {};
    const totalPages = Math.ceil(total / per_page);
    const dispatch = useDispatch();


    return (
        <div>
            {/* Display pagination buttons */}
            <div className='flex items-center space-x-2'>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <kbd key={pageNumber} className="kbd cursor-pointer" onClick={() => dispatch(setPage(pageNumber))}>
                        {pageNumber}
                    </kbd>
                ))}
            </div>
        </div>
    );
};

export default Pagination;
