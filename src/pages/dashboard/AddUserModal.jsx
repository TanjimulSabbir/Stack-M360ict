import { useState } from "react";
import { debounce } from "../../components/utils/Debounce";
import isEmailValid from "../../components/utils/IsEmailValid";
import { LiaUserSecretSolid } from "react-icons/lia";
import { addUser } from "../../RTK/features/users/usersSlice";
import { useDispatch } from "react-redux";
import "../../style/addUserModal.css"

/* eslint-disable react/prop-types */
function AddUserModal({ open, control, setOpened }) {
    const [formData, setFormData] = useState({});
    const [valid, setValid] = useState(true);

    const inputStyle = "appearance-none h-14 relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-lg text-gray-900 rounded-lg focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"

    const dispatch = useDispatch();

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
        dispatch(addUser(formData))
        event.target.reset();
        setOpened(prev => !prev)
    }

    return (
        open && (
            <> <div
                onClick={control}
                className="fixed min-h-full inset-0 w-full z-10 bg-black/50 cursor-pointer"
            ></div>
            
                <div className="rounded-lg w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">

                    <form className="relative mt-8 space-y-6" onSubmit={handleAddUser}>
                        <h2 className="my-8 updateUserTitle flex items-center space-x-2">
                            <LiaUserSecretSolid />
                            <span>Add User</span>
                        </h2>
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
                                Add User
                            </button>
                        </div>
                    </form>
                    <button className="absolute top-4 right-4 btn rounded-3xl hover:bg-red-300" onClick={control}>Close</button>
                </div>
            </>)
    )
}

export default AddUserModal;