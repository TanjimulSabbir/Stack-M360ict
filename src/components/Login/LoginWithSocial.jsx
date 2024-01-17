import googleIcon from "../../assets/google.svg"
import appleIcon from "../../assets/apple.svg"
import auth from "../utils/Firebase";
import { useSignInWithApple, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useEffect } from "react";
import { useLoginMutation } from "../../RTK/features/auth/authApi";
import { useGetUsersQuery } from "../../RTK/features/users/usersApi";

function LoginWithSocial() {
    const btnStyle = "flex items-center space-x-2 bg-[#F0F5FA] rounded-3xl w-[255px] h-14 text-center justify-center"
    const [signInWithGoogle, GoogleUser, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithApple, AppleUser, loading2, error2] = useSignInWithApple(auth);
    const { getUsers, isLoading, isError, error } = useGetUsersQuery();
    const [login, { data }] = useLoginMutation();

    console.log(GoogleUser, "GoogleUser")

    const handleLogin = async (SignInType) => {
        const googleUserData = await signInWithGoogle();
        console.log(googleUserData, "googleData")
        // getUsers.find(user=>user.)

    }

    useEffect(() => {
        if (GoogleUser?.uid) {
            const { displayName, email, photoURL, uid } = GoogleUser.user || {};
            login({ username: displayName, email: email, password: uid, uid, avatar: photoURL })
        }
    }, [GoogleUser, AppleUser, login])

    return (
        <div className="flex flex-col md:flex-row items-center justify-center space-y-7 md:space-y-0 md:space-x-7">
            <div>
                <button className={btnStyle} onClick={() => handleLogin("google")}>
                    <img src={googleIcon} alt={"google"} />
                    <span>Sign In with Google</span>
                </button>
            </div>
            <div>
                <button className={btnStyle} onClick={() => handleLogin("apple")}>
                    <img src={appleIcon} alt={"apple"} />
                    <span>Sign In with Apple ID</span>
                </button>
            </div>
        </div>
    )
}

export default LoginWithSocial;