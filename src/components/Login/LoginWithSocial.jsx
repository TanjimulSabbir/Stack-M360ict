import googleIcon from "../../assets/google.svg"
import appleIcon from "../../assets/apple.svg"
import auth from "../utils/Firebase";
import { useSignInWithApple, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useEffect, useState } from "react";
import { useLoginMutation, useRegisterMutation } from "../../RTK/features/auth/authApi";
import { useGetUsersQuery, useSpecifiedUserQuery } from "../../RTK/features/users/usersApi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

function LoginWithSocial() {
    const btnStyle = "flex items-center space-x-2 bg-[#F0F5FA] rounded-3xl w-[255px] h-14 text-center justify-center"
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithApple] = useSignInWithApple(auth);
    const { getUsers, isLoading, isError, error } = useGetUsersQuery();
    const [login, { data }] = useLoginMutation();
    const [register] = useRegisterMutation();
    const [signInData, setSiginData] = useState("");
    const { data: registeredUser } = useSpecifiedUserQuery(signInData?.user?.email, { skip: !signInData?.user?.email });
    const dispatch = useDispatch();

    const handleLogin = async (signInType) => {
        try {
            const data = signInType === "google" ? await signInWithGoogle() : await signInWithApple();
            if (data?.uid) {
                setSiginData(data)
            }

        } catch (error) {
            toast.error("Login error");
        }
    };

    useEffect(() => {
        if (signInData?.user) {
            const { displayName, email, photoURL, uid } = signInData.user;

            if (registeredUser?.password) {
                const alreadyUserIn = registeredUser.password === uid;

                if (!alreadyUserIn) {
                    register({ username: displayName, email: email, password: uid, avatar: photoURL });
                }
            } else {
                register({ username: displayName, email: email, password: uid, avatar: photoURL });
            }
        }
    }, [signInData, dispatch, login, registeredUser, register])

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