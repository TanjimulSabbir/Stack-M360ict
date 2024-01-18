import { ErrorIcon, LoaderIcon } from "react-hot-toast";
import { useGetUsersQuery } from "../../RTK/features/users/usersApi";
import User from "./User";
import { useDispatch } from "react-redux";
import { setPagination } from "../../RTK/features/pagination/paginationSlice";

function AllUser() {
    // const { data: userData, isLoading, isError, error } = useGetUsersQuery() || {};
    const dispatch = useDispatch();

    // let content = null;
    // if (isLoading) content = <LoaderIcon />
    // if (!isLoading && isError) content = <ErrorIcon />
    // if (!isLoading && !isError && userData?.data.length === 0) content = <p>No user found</p>
    // if (!isLoading && !isError && userData?.data.length > 0) {
    //     dispatch(setPagination({ ...userData.data }))
    //     content = <User users={userData.data} />
    // }
    // return (
    //     <div>
    //         {content}
    //     </div>
    // )
}

export default AllUser;