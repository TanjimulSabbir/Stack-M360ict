import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiLockOpen } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import IsEmailValid from "../utils/IsEmailValid";
import { debounce } from "../utils/Debounce";
import { useAddUserMutation, useGetUsersQuery } from "../../RTK/features/users/usersApi";


function LoginForm() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [open, setOpen] = useState(false);
    const [valid, setValid] = useState(true);
    const [addUser, { data: userAdded, isSuccess, isLoading, error }] = useAddUserMutation();
    // const { data: AllUser } = useGetUsersQuery();

    const handleFormData = (event) => {
        setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }));
        if (event.target.name === "email") {
            emailValidityChecking(event.target.value)
        }
    }
    const handleEmail = (email) => {
        const emailValidity = IsEmailValid(email);
        setValid(emailValidity);
    }
    const emailValidityChecking = debounce(handleEmail, 700);


    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData?.email && formData?.password) {
            console.log({ ...formData }, "formData")
            addUser({ data: { ...formData, username: "Sabbir Hossen" } })
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center space-y-12">
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
                    />
                    {valid || <small className="invalidEmailError block text-start">Please enter a valid email address.</small>}
                </div>

                {/* Password */}
                <div className="relative">
                    {formData?.password !== "" ||
                        <div className="absolute top-3 left-4 flex items-center space-x-1">
                            <BiLockOpen className="placeHolderIcon" />
                            <span className="label">Password</span>
                        </div>
                    }

                    <input type={open ? "text" : "password"}
                        className="inputBox"
                        name="password"
                        onChange={(event) => handleFormData(event)}
                        required
                    />

                    {/* password be showed or not be showed */}
                    <p className="absolute top-4 right-5 cursor-pointer">
                        {open ? <BiSolidShow className="eye" onClick={() => setOpen(!open)} /> : <BsEyeSlash className="eye" onClick={() => setOpen(!open)} />}
                    </p>

                    {/* Checkbox */}
                    <div className="mt-4">
                        <p className="label flex items-center space-x-2 justify-start">
                            <input type="checkbox" className="check cursor-pointer" required />
                            <span className="checkBoxText">Remember me</span>
                        </p>
                    </div>

                    {/* Form button */}
                    <div>
                        <button className="signInBtn">Sign In</button>
                    </div>
                    <p className="formFooter">Don’t have an account yet? <Link className="formFooterLink" to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;
