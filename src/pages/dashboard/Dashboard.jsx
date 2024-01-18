import { Link, Outlet } from "react-router-dom";
import menu from "../../assets/menu 1.svg";
import user from "../../assets/user 1.svg";
import invoice from "../../assets/invoice 1.svg";
import "../../style/dashboard.css";

export default function Dashboard() {
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
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full ml-12 pt-10">
                        {/* Sidebar content here */}
                        <li className="menuHolder">
                            <Link to="/dashbaord" className="flex items-center space-x-2">
                                <img src={menu} alt="" />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="menuHolder">
                            <Link to="/users" className="flex items-center space-x-2">
                                <img src={user} alt="" />
                                <span>Users</span>
                            </Link>
                        </li>

                        <li className="menuHolder">
                            <Link to="/sales" className="flex items-center space-x-2">
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
