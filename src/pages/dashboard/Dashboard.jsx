import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg"
import menu from "../../assets/menu 1.svg";
import user from "../../assets/user 1.svg";
import invoice from "../../assets/invoice 1.svg";
import "../../style/dashboard.css";

export default function Dashboard() {
    const path = useLocation().pathname;

    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                   <div className="flex items-center justify-end">
                   <label htmlFor="my-drawer-2" className="drawer-button bg-sky-500 lg:hidden p-3 rounded-md z-50 m-2 cursor-pointer">Open Menu</label>
                   </div>
                    <Outlet />
                </div>

                {/* side menu */}
                <div className="drawer-side overflow-hidden">
                    <div className="md:ml-20 md:mt-6 inline-block">
                        <img src={logo} alt="logo" />
                    </div>
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 min-h-full bg-gray-200 md:ml-12 pt-10 mt-20 rounded md:mt-0">
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
        </>
    )
}
