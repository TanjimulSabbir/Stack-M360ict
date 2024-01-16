import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";

const router = createBrowserRouter({
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            path: "/",
            element: <App />
        },
        {

        }
    ]
});

export default router;