import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userLogOut } from "../../RTK/features/auth/authSlice";

function PrivateRoute({ children }) {
    const auth = JSON.parse(localStorage.getItem("auth"));
    const navigate = useNavigate();

    useEffect(() => {
        if (!(auth && auth.accessToken && auth.user)) {
            userLogOut()
            return navigate("/signin");
        }
    })

    return children;
}

export default PrivateRoute;