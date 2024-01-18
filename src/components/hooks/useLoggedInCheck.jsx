import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../RTK/features/auth/authSlice";


function useLoggedInCheck() {
    const [loginCheck, setLoginCheck] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("auth"));
        if (userInfo?.accessToken && userInfo?.user) {
            console.log(userInfo, "userInfo")

            dispatch(userLoggedIn(userInfo))
            setLoginCheck(true)
        }
    }, [dispatch])

    return loginCheck;
}
export default useLoggedInCheck;