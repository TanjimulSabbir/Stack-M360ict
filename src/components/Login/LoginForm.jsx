import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiLockOpen } from "react-icons/bi";
import { useState } from "react";

function LoginForm() {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleFormData = (event) => {
        event.preventDefault();
        setFormData(prev => (setFormData({ ...prev, [event.target.name]: event.target.value })))
    }
    const handleSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center space-y-12">
                <div className="relative">
                    {formData?.email !== "" || <div className="absolute top-2 left-4 flex items-center space-x-1">
                        <MdOutlineAlternateEmail className="placeHolderIcon" />
                        <span className="label">Your Email</span>
                    </div>}
                    <input type="text" placeholder="" className="inputBox"
                        name="email"
                        onChange={(event) => handleFormData(event)}
                    />
                </div>
                <div className="relative">
                    {formData?.password !== "" || <div className="absolute top-2 left-4 flex items-center space-x-1">
                        <BiLockOpen className="placeHolderIcon" />
                        <span className="label">Password</span>
                    </div>}

                    <input type="password" placeholder="" className="inputBox"
                        name="password"
                        onChange={(event) => handleFormData(event)} />
                </div>
            </div>
        </form>
    );
}

export default LoginForm;
