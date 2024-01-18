import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiLockOpen } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import IsEmailValid from "../utils/IsEmailValid";
import { debounce } from "../utils/Debounce";
import { useRegisterMutation } from "../../RTK/features/auth/authApi";


function SignUpForm() {
    const [formData, setFormData] = useState({ email: "", name: "", password: "" });
    const [open, setOpen] = useState(false);
    const [valid, setValid] = useState(true);
    const [register, { data: registerdUser, isSuccess, isLoading, error }] = useRegisterMutation();
    // const { data: AllUser } = useGetUsersQuery();

    const handleFormData = (event) => {
        setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }));
        if (event.target.name === "email") {
            emailValidityChecking(event.target.value)
        }
        if (event.target.value.length === 6) {
            event.target.blur();
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
            register({ data: { ...formData } })
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

                <div className="relative">
                    {
                        formData?.name !== "" ||
                        <div className="absolute top-3 left-4 flex items-center space-x-1">
                            <MdOutlineAlternateEmail className="placeHolderIcon" />
                            <span className="label">Your Name</span>
                        </div>
                    }

                    <input type="text"
                        className={`inputBox min-w-[260px] md:w-auto`}
                        name="name"
                        onChange={(event) => handleFormData(event)}
                        required
                    />
                </div>

                {/* Password */}
                <div className="relative">
                    <div className="flex items-center">
                        <BiLockOpen className="placeHolderIcon" />
                        <span className="label">Create Password</span>
                    </div>

                    <input type={open ? "text" : "password"}
                        className="inputBox createPassword"
                        maxLength="6"
                        name="password"
                        onChange={(event) => handleFormData(event)}
                        value={formData.password}
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
                            <span className="checkBoxText">I agree to the Terms & Conditions</span>
                        </p>
                    </div>

                    {/* Form button */}
                    <div>
                        <button type="submit" className="signInBtn">Sign Up</button>
                    </div>
                    <p className="formFooter">Already have an account? <Link className="formFooterLink" to="/signin">Sign In</Link></p>
                </div>
            </div>
        </form>
    );
}

export default SignUpForm;
