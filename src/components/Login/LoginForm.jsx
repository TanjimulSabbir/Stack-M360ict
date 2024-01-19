import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiLockOpen } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { BsEyeSlash } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IsEmailValid from "../utils/IsEmailValid";
import { debounce } from "../utils/Debounce";
import { useLoginMutation } from "../../RTK/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import Error from "../ui/Error";
import toast from "react-hot-toast";

function LoginForm() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loginError, setLoginError] = useState(false);
    const [open, setOpen] = useState(false);
    const [valid, setValid] = useState(true);
    const [login, { data: loginUser, isError, isLoading, error }] = useLoginMutation();
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
            login({ data: { ...formData } })
        }
    }

    useEffect(() => {
        if (isError) {
            setLoginError(error.data.error)
            toast.error(error.data.error)
        }
        console.log(error, "error");

        if (loginUser?.token) {
            navigate("/dashboard")
            toast.success("Login Successful!")
        }
    }, [loginUser, navigate, error, isError])

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
                        <button type="submit" className="signInBtn" disabled={isLoading}>{isLoading ? "Loading..." : "Sign in"}</button>
                    </div>
                    <p className="formFooter">Don’t have an account yet? <Link className="formFooterLink" to="/signup">Sign Up</Link></p>
                </div>
            </div>
            {loginError && <Error message={loginError} />}
        </form>
    );
}

export default LoginForm;
