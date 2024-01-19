import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../RTK/features/pagination/paginationSlice';

const Pagination = () => {
    const userReducerData = useSelector(state => state?.users?.allUserData);
    const { currentPage, pagiInfo } = useSelector(state => state.pagination);
    const total = userReducerData?.length 
    // Destructure with default values and check if data is not null
    // const { per_page, total } = pagiInfo || {};
    const totalPages = Math.ceil(total / 6);
    const dispatch = useDispatch();


    return (
        <div>
            {/* Display pagination buttons */}
            <div className={`flex items-center space-x-2`}>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <kbd key={pageNumber} className={`kbd cursor-pointer ${currentPage === pageNumber && "bg-[#2F80ED]"}`} onClick={() => dispatch(setPage(pageNumber))}>
                        {pageNumber}
                    </kbd>
                ))}
            </div>
        </div>
    );
};

export default Pagination;
