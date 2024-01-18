import { ErrorIcon, LoaderIcon } from "react-hot-toast";
import { useGetUsersQuery } from "../../RTK/features/users/usersApi";

function Users() {
    const { data, isLoading, isError, error } = useGetUsersQuery();
    let content = null;
    if (isLoading) content = <LoaderIcon />
    if (!isLoading && isError) content = <ErrorIcon />
    if (!isLoading && !isError && data?.data.length > 0) {
        content = data?.data.map(user=>user.email)
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default Users;