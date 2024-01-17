import googleIcon from "../../assets/google.svg"
import appleIcon from "../../assets/apple.svg"
import auth from "../utils/Firebase";
import { useSignInWithApple, useSignInWithGoogle } from 'react-firebase-hooks/auth';

function LoginWithSocial() {
    const btnStyle = "flex items-center space-x-2 bg-[#F0F5FA] rounded-3xl w-[255px] h-14 text-center justify-center"
    const [signInWithGoogle, GoogleUser, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithApple, AppleUser, loading2, error2] = useSignInWithApple(auth);


    return (
        <div className="flex flex-col md:flex-row items-center justify-center space-y-7 md:space-y-0 md:space-x-7">
            <div>
                <button className={btnStyle} onClick={() => signInWithGoogle()}>
                    <img src={googleIcon} alt={"google"} />
                    <span>Sign In with Google</span>
                </button>
            </div>
            <div>
                <button className={btnStyle} onClick={() => signInWithApple()}>
                    <img src={appleIcon} alt={"apple"} />
                    <span>Sign In with Apple ID</span>
                </button>
            </div>
        </div>
    )
}

export default LoginWithSocial;