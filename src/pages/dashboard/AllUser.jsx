import { useGetUsersQuery } from "../../RTK/features/users/usersApi";
import { useDispatch, useSelector } from "react-redux";
import { setPagination } from "../../RTK/features/pagination/paginationSlice";
import User from "./User";

function AllUser() {
    const page = useSelector(state => state.pagination.currentPage)
    const { data: userData, isLoading, isError, error } = useGetUsersQuery(page);
    const dispatch = useDispatch();
    console.log(userData);

    let content = null;
    if (isLoading) content = <p>Loading...</p>
    if (!isLoading && isError) content = <p>{error?.message}</p>
    if (!isLoading && !isError && userData?.data.length === 0) content = <p>No user found</p>
    if (!isLoading && !isError && userData?.data.length > 0) {
        const { page, per_page, total, total_pages } = userData;
        dispatch(setPagination({ page, per_page, total, total_pages }));
        content = <User users={userData.data} ></User>
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default AllUser;