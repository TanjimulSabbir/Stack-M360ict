import { ErrorIcon, LoaderIcon } from "react-hot-toast";
import { useGetUsersQuery } from "../../RTK/features/users/usersApi";
import User from "./User";
import { useDispatch } from "react-redux";
import { getPagination } from "../../RTK/features/Pagination/paginatinSlice";

function Users() {
    const { data: allUser, isLoading, isError, error } = useGetUsersQuery();
    const dispatch = useDispatch();

    let content = null;
    if (isLoading) content = <LoaderIcon />
    if (!isLoading && isError) content = <ErrorIcon />
    if (!isLoading && !isError && allUser?.data.length > 0) {
        const { data, page, per_page, total, total_pages } = allUser;

        dispatch(getPagination({ totalItems: total, itemsPerPage: per_page, onPageChange: page }))
        content = <User users={data} />
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default Users;