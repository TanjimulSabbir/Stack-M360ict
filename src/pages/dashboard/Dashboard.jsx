import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg"
import menu from "../../assets/menu 1.svg";
import user from "../../assets/user 1.svg";
import invoice from "../../assets/invoice 1.svg";
import "../../style/dashboard.css";

export default function Dashboard() {
    const path = useLocation().pathname;
    console.log(path, "path")
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>

                {/* side menu */}
                <div className="drawer-side overflow-hidden">
                    <div className="ml-20 mt-6 inline-block">
                        <img src={logo} alt="logo" />
                    </div>
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 min-h-full ml-12 pt-10">
                        {/* Sidebar content here */}
                        <li className={`menuHolder ${path === "/dashboard" && ""}`}>
                            <Link to="/dashboard" className="flex items-center space-x-2">
                                <img src={menu} alt="" />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className={`menuHolder ${path === "/dashboard" && "activeMenu"}`}>
                            <Link to="/dashboard" className="flex items-center space-x-2">
                                <img src={user} alt="" />
                                <span>Users</span>
                            </Link>
                        </li>

                        <li className={`menuHolder ${path === "/sales" && "activeMenu"}`}>
                            <Link to="/dashboard" className="flex items-center space-x-2">
                                <img src={invoice} alt="" />
                                <span>Sales</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
