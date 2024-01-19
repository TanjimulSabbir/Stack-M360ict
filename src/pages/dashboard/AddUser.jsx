import { useEffect, useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { debounce } from "../../components/utils/Debounce";
import isEmailValid from "../../components/utils/IsEmailValid";

/* eslint-disable react/prop-types */
function AddUser({ user, setModalOpen }) {
    const [formData, setFormData] = useState({ ...user });
    const [valid, setValid] = useState(true);


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
            <dialog id="addUserModal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form className="mt-8 space-y-6" onSubmit={handleAddUser}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="relative">
                            {
                                formData?.email !== "" ||
                                <div className="absolute top-3 left-4 flex items-center space-x-1">
                                    <MdOutlineAlternateEmail className="placeHolderIcon" />
                                    <span className="label">Your Email</span>
                                </div>
                            }

                            <input type="text"
                                className={`inputBox min-w-[260px] md:w-auto ${valid || "invalidEmailInput"}`}
                                name="email"
                                onChange={(event) => handleFormData(event)}
                                required
                                value={formData?.email}
                            />
                            {valid || <small className="invalidEmailError block text-start">Please enter a valid email address.</small>}
                        </div>

                        <div>
                            <label htmlFor="first_name" className="sr-only">
                                First Name
                            </label>
                            <input
                                onChange={(event) => handleFormData(event)}
                                id="first_name"
                                name="first_name"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                placeholder="Message"
                                value={formData?.first_name}
                            />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="sr-only">
                                Last Name
                            </label>
                            <input
                                onChange={(event) => handleFormData(event)}
                                id="last_name"
                                name="last_name"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                placeholder="Message"
                                value={formData?.last_name}
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500`}
                            >
                                Update User
                            </button>
                        </div>
                    </form>


                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={() => setModalOpen(false)} className="btn">Close</button>
                        </form>
                    </div>
                </div >
            </dialog >
        </>
    )
}

export default AddUser;