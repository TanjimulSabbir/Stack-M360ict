import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../RTK/features/auth/authSlice";
import { useNavigate } from "react-router-dom";


function useLoggedInCheck() {
    const [loginCheck, setLoginCheck] = useState(false);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("auth"));
        if (userInfo?.accessToken && userInfo?.user) {
            dispatch(userLoggedIn(userInfo))
            setLoginCheck(true)
        } else {
            return navigate("/signin")
        }
    }, [dispatch, navigate])

    return loginCheck;
}
export default useLoggedInCheck;