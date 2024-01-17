import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

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
    ]
}]);

export default router;