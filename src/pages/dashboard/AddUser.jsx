import { useEffect, useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { debounce } from "../../components/utils/Debounce";
import isEmailValid from "../../components/utils/IsEmailValid";
import "../../style/addUserModal.css"

/* eslint-disable react/prop-types */
function AddUser({ user, setModalOpen }) {
    const [formData, setFormData] = useState({ ...user });
    const [valid, setValid] = useState(true);
    const inputStyle = "appearance-none h-14 relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-lg text-gray-900 rounded-lg focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"

    const handleFormData = (event) => {
        setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }));

        if (event.target.name === "email") {
            emailValidityChecking(event.target.value)
        }
    }
    const handleEmail = (email) => {
        const emailValidity = isEmailValid(email);
        setValid(emailValidity);
    }
    const emailValidityChecking = debounce(handleEmail, 700);


    const handleAddUser = (event) => {
        event.preventDefault();
        console.log(formData, "formData")
    }

    useEffect(() => {
        document.getElementById('addUserModal').showModal()
    }, []);

    return (
        <>
            <button className="btn">open modal</button>
            <dialog id="addUserModal" className="modal modal-bottom sm:modal-middle w-full">
                <div className="modal-box">
                    <form className="mt-8 space-y-6" onSubmit={handleAddUser}>
                        <h2 className="my-8 updateUserTitle">Update User</h2>
                        <input type="hidden" name="remember" value="true" />

                        <div>
                            <label htmlFor="first_name" className="labelInput">
                                First name
                            </label>
                            <input
                                onChange={(event) => handleFormData(event)}
                                id="first_name"
                                name="first_name"
                                type="text"
                                required
                                className={`${inputStyle}`}
                                placeholder="First name"
                                value={formData?.first_name}
                            />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="labelInput">
                                Last name
                            </label>
                            <input
                                onChange={(event) => handleFormData(event)}
                                id="last_name"
                                name="last_name"
                                type="text"
                                required
                                className={`${inputStyle}`}
                                placeholder="Last name"
                                value={formData?.last_name}
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="email" className="labelInput">
                                Email
                            </label>

                            <input type="text"
                                className={`${inputStyle} ${valid || "invalidEmailInput"}`}
                                name="email"
                                onChange={(event) => handleFormData(event)}
                                required
                                value={formData?.email}
                            />
                            {valid || <small className="invalidEmailError block text-start">Please enter a valid email address.</small>}
                        </div>
                        <div>
                            <label htmlFor="avatar" className="labelInput">
                                Avatar
                            </label>
                            <input
                                onChange={(event) => handleFormData(event)}
                                id="avatar"
                                name="avatar"
                                type="text"
                                required
                                className={`${inputStyle}`}
                                placeholder="Avatar"
                                value={formData?.avatar}
                            />
                        </div>

                        <div>
                            <button type="submit" className="updateBtn">
                                Update User
                            </button>
                        </div>
                    </form>


                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle bg-red-500 hover:bg-red-600 absolute right-2 top-7">✕</button>
                        </form>
                    </div>
                </div >
            </dialog >
        </>
    )
}

export default AddUser;