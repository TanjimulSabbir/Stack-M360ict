import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiLockOpen } from "react-icons/bi";

function LoginForm() {
    return (
        <form>
            <div className="flex flex-col items-center space-y-12">
                <div className="relative">
                    <div className="absolute top-2 left-4 flex items-center space-x-1">
                        <MdOutlineAlternateEmail className="placeHolderIcon" />
                        <span className="mb-1 label">Your Email</span>
                    </div>
                    <input type="text" placeholder="" className="inputBox" />
                </div>
                <div>
                    <div>
                        <BiLockOpen className="placeHolderIcon" />
                        <span className="label">Password</span>
                    </div>
                    <input type="password" placeholder="Password" className="inputBox" />
                </div>
            </div>
        </form>
    );
}

export default LoginForm;
