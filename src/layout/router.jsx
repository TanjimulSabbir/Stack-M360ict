import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";
import AllUser from "../pages/dashboard/AllUser";

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
            element: <Dashboard />,
            children: [
                {
                    path: "/dashboard",
                    element: <AllUser />,
                }
            ]
        },
    ]
}]);

export default router;