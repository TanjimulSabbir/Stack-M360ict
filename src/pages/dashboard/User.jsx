/* eslint-disable react/prop-types */
import UserBody from "./UserBody";
import control_double_left from "../../assets/Control_double_left.svg";
import Control_single_left from "../../assets/Control_single_left.svg";
import Control_single_right from "../../assets/Control_single_right.svg";
import Control_double_right from "../../assets/Control_double_right.svg";
import Pagination from "../../components/utils/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../RTK/features/pagination/paginationSlice";
import UserNavbar from "./UserNavbar";
import { useEffect } from "react";

export default function User() {
    const userReducerData = useSelector(state => state?.users?.allUserData);
    const { currentPage, pagiInfo } = useSelector(state => state.pagination) || {};
    const { total_pages } = pagiInfo || {};
    const dispatch = useDispatch();

    console.log({ userReducerData }, "useReducerData");

    useEffect(() => {

    }, [userReducerData])

    return (
        <>
            <UserNavbar />
            <div className="overflow-x-auto">
                <h2 className="tableTitle">Users List</h2>
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-200 rounded-md">
                        <tr>
                            <th>#ID</th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userReducerData?.map(user => <UserBody key={user.id} user={user} />)}
                    </tbody>
                </table>
                <div className="join space-x-2 mt-12 mb-8">
                    <kbd className={`kbd ${currentPage > 1 ? "cursor-pointer bg-green-500" : "cursor-not-allowed"}`} onClick={() => currentPage > 1 && dispatch(setPage(currentPage - 1))}><img src={control_double_left} alt="<<" /></kbd>

                    <kbd className="kbd"><img src={Control_single_left} alt="<" /></kbd>
                    <Pagination />
                    <kbd className="kbd"><img src={Control_single_right} alt=">" /></kbd>

                    <kbd className={`kbd ${currentPage < total_pages ? "cursor-pointer bg-green-500" : "cursor-not-allowed"}`} onClick={() => currentPage < total_pages && dispatch(setPage(currentPage + 1))}><img src={Control_double_right} alt=">>" /></kbd>
                </div>
            </div>
        </>
    )
}
