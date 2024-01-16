import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiLockOpen } from "react-icons/bi";

function LoginForm() {
    return (
        <form>
            <div className="flex flex-col items-center space-y-12">
                <div className="relative">
                    <MdOutlineAlternateEmail className="absolute placeHolderIcon top-4 left-2" />
                    <input type="text" placeholder="Your Email" className="inputBox" />
                </div>
                <div className="relative">
                    <input type="text" placeholder="Password" className="inputBox" />
                    <BiLockOpen className="absolute placeHolderIcon top-4 left-2" />
                </div>
            </div>
        </form>
    )
}

export default LoginForm;