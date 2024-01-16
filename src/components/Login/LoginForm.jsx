import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiLockOpen } from "react-icons/bi";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { useState } from "react";
import { Link } from "react-router-dom";
import IsEmailValid from "../utils/IsEmailValid";

function LoginForm() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [open, setOpen] = useState(false);
    const [isValid, setValid] = useState(null);

    const handleFormData = (event) => {
        event.preventDefault();
        setFormData(prev => (setFormData({ ...prev, [event.target.name]: event.target.value })))
    }
    const handleSubmit = () => {

    }

    const debounce = (fn, delay) => {
        let timeOutId;
        return () => {
            clearTimeout(timeOutId)
            timeOutId = setTimeout(() => {
                setValid(fn(formData?.email))
            }, delay)
        }
    }

    const emailTyped = debounce(IsEmailValid, 3000)

    console.log(isValid, "isValid")
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center space-y-12">

                <div className="relative">
                    {formData?.email !== "" ||
                        <div className="absolute top-3 left-4 flex items-center space-x-1">
                            <MdOutlineAlternateEmail className="placeHolderIcon" />
                            <span className="label">Your Email</span>
                        </div>
                    }

                    <input type="text"
                        className={`inputBox`}
                        name="email"
                        onChange={(event) => handleFormData(event)}
                        required
                    />
                    {formData?.email && isValid == null ? <small className="invalidEmailError block text-start">Please enter a valid email address.</small> : ""}
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
                        {open ? <GoEye className="eye" onClick={() => setOpen(!open)} /> : <GoEyeClosed className="eye" onClick={() => setOpen(!open)} />}
                    </p>

                    {/* Checkbox */}
                    <div className="mt-4">
                        <p className="label flex items-center space-x-2 justify-start">
                            <input type="checkbox" className="checkbox cursor-pointer" />
                            <span className="checkBoxText">Remember me</span>
                        </p>
                    </div>

                    {/* Form button */}
                    <div className="signInBtn">
                        <button className="signInBtnText">Sign In</button>
                    </div>
                    <p className="formFooter">Don’t have an account yet? <Link className="formFooterLink" to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;
