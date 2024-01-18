import { ErrorIcon, LoaderIcon } from "react-hot-toast";
import { useGetUsersQuery } from "../../RTK/features/users/usersApi";
import User from "./User";
import { useDispatch } from "react-redux";
import { getPagination } from "../../RTK/features/pagination/paginationSlice";

function AllUser() {
    const { data: Users, isLoading, isError, error } = useGetUsersQuery() || {};
    const dispatch = useDispatch();

    let content = null;
    if (isLoading) content = <LoaderIcon />
    if (!isLoading && isError) content = <ErrorIcon />
    if (!isLoading && !isError && Users?.data.length > 0) {
        const { data, page, per_page, total } = Users || {};

        dispatch(getPagination({ totalItems: total, itemsPerPage: per_page, onPageChange: page }))
        content = <User users={data} />
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default AllUser;