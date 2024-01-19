import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiLockOpen } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { BsEyeSlash } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IsEmailValid from "../utils/IsEmailValid";
import { debounce } from "../utils/Debounce";
import { useRegisterMutation } from "../../RTK/features/auth/authApi";
import toast from "react-hot-toast";
import Error from "../ui/Error";
import { FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";


function SignUpForm() {
    const [formData, setFormData] = useState({ email: "", name: "", password: "" });
    const [registerError, setRegisterError] = useState(false);
    const [open, setOpen] = useState(false);
    const [valid, setValid] = useState(true);
    const [register, { data: registerdUser, isError, isLoading, error }] = useRegisterMutation();
    const userData = useSelector(state => state.auth) || {};
    const navigate = useNavigate();

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
            register({ data: { ...formData } })
        }
    }

    useEffect(() => {
        if (isError) {
            setRegisterError(error?.data?.error)
            toast.error(error?.data?.error)
        }
        console.log({ registerdUser, userData, }, "registeredUSer")
        if (userData?.user?.email && userData?.accessToken) {
            navigate("/dashboard")
            toast.success("Register Successful")
        }
    }, [registerdUser, navigate, error, isError])

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
                        className={`inputBox min-w-[260px] sm:min-w-[400px] md:min-w-[540px] ${valid || "invalidEmailInput"}`}
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
                            <FiUser className="placeHolderIcon" />
                            <span className="label">Your Name</span>
                        </div>
                    }

                    <input type="text"
                        className={`inputBox min-w-[260px] sm:min-w-[400px] md:min-w-[540px]`}
                        name="name"
                        onChange={(event) => handleFormData(event)}
                        required
                    />
                </div>

                {/* Password */}
                <div className="relative">
                    <div className="hidden md:flex items-center">
                        <BiLockOpen className="placeHolderIcon" />
                        <span className="label">Create Password</span>
                    </div>

                    <input type={open ? "text" : "password"}
                        className="inputBox createPassword min-w-[260px] sm:min-w-[400px] md:min-w-[540px]"
                        maxLength="6"
                        name="password"
                        onChange={(event) => handleFormData(event)}
                        value={formData.password}
                        required
                    // placeholder="password"
                    />

                    {/* password be showed or not be showed */}
                    <p className="absolute top-5 md:top-3 right-5 cursor-pointer">
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
                        <div>
                            <button type="submit" className="signInBtn w-[260px] sm:w-[400px] md:w-[540px]" disabled={isLoading || !valid}> {isLoading ? "Loading..." : "Sign Up"}</button>
                        </div>
                    </div>

                    <p className="formFooter">Already have an account? <Link className="formFooterLink" to="/signin">Sign In</Link></p>
                </div>
            </div>
            {registerError && <Error message={registerError} />}
        </form>
    );
}

export default SignUpForm;
