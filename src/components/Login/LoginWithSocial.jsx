import googleIcon from "../../assets/google.svg"
import appleIcon from "../../assets/apple.svg"

function LoginWithSocial() {
    const btnStyle = "flex items-center space-x-2 bg-[#F0F5FA] rounded-3xl w-[255px] h-14 text-center justify-center"
    return (
        <div className="flex items-center justify-center space-x-7">
            <div>
                <button className={btnStyle}>
                    <img src={googleIcon} alt={"google"} />
                    <span>Sign In with Google</span>
                </button>
            </div>
            <div>
                <button className={btnStyle}>
                    <img src={appleIcon} alt={"apple"} />
                    <span>Sign In with Apple ID</span>
                </button>
            </div>
        </div>
    )
}

export default LoginWithSocial;