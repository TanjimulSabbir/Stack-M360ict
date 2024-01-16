import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiLockOpen } from "react-icons/bi";
import { useState } from "react";

function LoginForm() {
    const [open, setOpen] = useState(true)
    return (
        <form>
            <div className="flex flex-col items-center space-y-12">
                <div className="relative">
                    {open && <MdOutlineAlternateEmail className="absolute placeHolderIcon top-4 left-2" />}
                    <input type="text" placeholder="Your Email" className="inputBox" onChange={()=>setOpen(false)} />
                </div>
                <div className="relative">
                    <input type="text" placeholder="" className="inputBox" />
                    {open &&<div className="absolute placeHolderIcon top-4 left-2"> <BiLockOpen  /> <span>Password</span></div>}
                </div>
            </div>
        </form>
    )
}

export default LoginForm;