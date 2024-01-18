import googleIcon from "../../assets/google.svg"
import appleIcon from "../../assets/apple.svg"
import auth from "../utils/Firebase";
import { useSignInWithApple, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useEffect, useState } from "react";
import { useLoginMutation, useRegisterMutation } from "../../RTK/features/auth/authApi";
import { useSpecifiedUserQuery } from "../../RTK/features/users/usersApi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../RTK/features/auth/authSlice";
import Error from "../ui/Error";

function LoginWithSocial() {
    const btnStyle = "flex items-center space-x-2 bg-[#F0F5FA] rounded-3xl w-[255px] h-14 text-center justify-center"
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithApple] = useSignInWithApple(auth);
    const [signInData, setSiginData] = useState("");
    const [register, { data: regData, isError: regError, isLoading: regLoading }] = useRegisterMutation();
    const [login, { data: logData, isError: logError, isLoading: logLoading }] = useLoginMutation();
    const [signInError, setSigninError] = useState(false);

    const { data: isUserRegistered } = useSpecifiedUserQuery(signInData?.user?.email, { skip: !signInData?.user?.email });
    const dispatch = useDispatch();

    const handleLogin = async (signInType) => {
        try {
            const data = signInType === "google" ? await signInWithGoogle() : await signInWithApple();

            if (data?.user?.uid) {
                setSiginData(data.user)
            }
            console.log("first Step-Google login", { googleSIgnData: data })
        } catch (error) {
            toast.error("Login error");
            setSigninError(error.data)
            console.log(error);
        }
    };

    useEffect(() => {
        try {
            const { uid, displayName, email, photoURL, accessToken } = signInData || {};

            if (uid) {
                const userData = { username: displayName, email, password: uid, avatar: photoURL };

                // if user not exists on db or if exists anyway, checking uid with the same email
                if (!isUserRegistered?.password || isUserRegistered.password !== uid) {
                    register({ data: { ...userData }, accessToken });
                } else {
                    login({ data: { ...userData } })
                }
            }
        } catch (error) {
            dispatch(userLogOut())
            toast.error("Login error!");
            // setSigninError(error.data)
            console.error({ error });
        }
    }, [signInData, isUserRegistered, register, dispatch, login]);

    useEffect(() => {
        if (regError || logError) {
            signInError("Signin error!")
            toast.error("Signin error!")
        }
        if (logData.data.token) {
            toast.success("sign in successful!")
        }
        if (regData.data.id) {
            toast.success("sign in successful!")
        }
    }, [regData, logData]);

    return (
        <>
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
            {regLoading || logLoading && <p>Loading...</p>}
            {signInError && <Error message={signInError} />}
        </>
    )
}

export default LoginWithSocial;