/* eslint-disable react/prop-types */
import UserBody from "./UserBody";

export default function User({ users }) {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <UserBody key={user.id} user={user} />)}
                </tbody>
            </table>
        </div>
    )
}
