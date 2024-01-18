/* eslint-disable react/prop-types */
import UserBody from "./UserBody";
import control_double_left from "../../assets/Control_double_left.svg";
import Control_single_left from "../../assets/Control_single_left.svg";
import Control_single_right from "../../assets/Control_single_right.svg";
import Control_double_right from "../../assets/Control_double_right.svg";
import Pagination from "../../components/utils/Pagination";

export default function User({ users }) {
    return (
        <div className="overflow-x-auto">
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
                    {users?.map(user => <UserBody key={user.id} user={user} />)}
                </tbody>
            </table>
            <div className="join space-x-2 mt-12 mb-8">
                <kbd className="kbd cursor-pointer"><img src={control_double_left} alt="<<" /></kbd>
                <kbd className="kbd cursor-pointer"><img src={Control_single_left} alt="<" /></kbd>
                <Pagination />
                <kbd className="kbd cursor-pointer"><img src={Control_single_right} alt=">" /></kbd>
                <kbd className="kbd cursor-pointer"><img src={Control_double_right} alt=">>" /></kbd>
            </div>
        </div>
    )
}
