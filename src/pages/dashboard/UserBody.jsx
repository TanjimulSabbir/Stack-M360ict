import { useEffect, useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../RTK/features/users/usersSlice";
import EditUserModal from "./EditUserModal"
import gravatarUrl from "gravatar-url";


/* eslint-disable react/prop-types */
function UserBody({ user }) {
    const [opened, setOpened] = useState(false);
    const { id, email, first_name, last_name, avatar } = user;
    const dispatch = useDispatch();


    const controlModal = () => {
        setOpened((prevState) => !prevState);
    };
    const handleEdit = () => {
        controlModal()
    }

    return (
        <>
            <tr>
                <th>{id}</th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={avatar || gravatarUrl(email, { size: 80 })} />
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
                        <BiEdit onClick={() => handleEdit()} className={`text-green-500 cursor-pointer text-lg`} />
                        <BsTrash3 onClick={() => dispatch(deleteUser(id))} className={`text-red-500 cursor-pointer text-lg`} />
                    </div>
                </td>
            </tr>
            <EditUserModal open={opened} setOpened={setOpened} control={controlModal} user={user} />
        </>
    )
}

export default UserBody;