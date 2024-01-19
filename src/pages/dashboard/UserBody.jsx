import { BsTrash3 } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { useDeleteUserMutation } from "../../RTK/features/users/usersApi";
import { apiSlice } from "../../RTK/features/api/apiSlice";
import { useDispatch } from "react-redux";


/* eslint-disable react/prop-types */
function UserBody({ user }) {
    const { id, email, first_name, last_name, avatar } = user;
    const [deleteUser, { isLoading }] = useDeleteUserMutation();
    const dispatch = useDispatch();
    return (
        <tr>
            <th>{id}</th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={avatar} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold"> {first_name + last_name}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
            </td>
            <td>
                <div className="flex items-center space-x-2">
                    <BiEdit className={`text-green-500 cursor-pointer text-lg`} />
                    <BsTrash3 onClick={() => deleteUser(id)} className={`text-red-500 cursor-pointer text-lg`} />
                </div>
            </td>
        </tr>
    )
}

export default UserBody;