import { useGetUsersQuery } from "../../RTK/features/users/usersApi";
import { useDispatch, useSelector } from "react-redux";
import { setPagination } from "../../RTK/features/pagination/paginationSlice";
import User from "./User";
import { useEffect } from "react";
import { setUsersData } from "../../RTK/features/users/usersSlice";
import Error from "../../components/ui/Error";

function AllUser() {
    const { data: userData, isLoading, isError, error } = useGetUsersQuery(5);
    const userReducerData = useSelector(state => state.users?.allUserData);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userData?.data?.length > 0) {
            const { page, per_page, total, total_pages, data } = userData;
            dispatch(setPagination({ page, per_page, total, total_pages }));

            const uniqueUsers = data.map(user => {
                return userReducerData.filter(prevUser => prevUser.id !== user.id)
            })
            console.log(uniqueUsers, "uniqueUserData")
            dispatch(setUsersData(uniqueUsers));
        }
    }, [userData, dispatch]);

    if (isLoading) return <p>Loading...</p>

    return (
        <div>
            <User />
        </div>
    )
}

export default AllUser;