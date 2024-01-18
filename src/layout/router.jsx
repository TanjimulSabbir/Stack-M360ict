import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";
import AllUser from "../pages/dashboard/AllUser";
import PrivateRoute from "../components/shared/PrivateRoute";

const router = createBrowserRouter([{
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            path: "/",
            element: <App />
        },
        {
            path: "/signin",
            element: <Login />
        },
        {
            path: "/signup",
            element: <SignUp />
        },
        {
            path: "/dashboard",
            element: <PrivateRoute> <Dashboard /></PrivateRoute>,
            children: [
                {
                    path: "/dashboard",
                    element: <PrivateRoute><AllUser /></PrivateRoute>,
                }
            ]
        },
    ]
}]);

export default router;