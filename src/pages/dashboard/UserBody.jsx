/* eslint-disable react/prop-types */
function UserBody({ user }) {
    const { id, email, first_name, last_name, avatar } = user;
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
            <td>Blue</td>
        </tr>
    )
}

export default UserBody;