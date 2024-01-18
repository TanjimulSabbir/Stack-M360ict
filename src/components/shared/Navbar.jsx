import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../../style/navbar.css";
import UserNavbar from "../../pages/dashboard/UserNavbar";

function Navbar() {
  const path = useLocation().pathname;
  console.log(path, "navbar")
  return (
    <div className={`flex items-center ${path === "/" ? "justify-between" : "justify-start"}`}>
      <div className="ml-20 mt-6">
        <img src={logo} alt="logo" />
      </div>
      <div className={`mr-20 ${path !== "/" && "hidden"}`}>
        <select className="selet w-full rounded-xl cursor-pointer">
          <option value="" disabled>Select Language</option>
          <option value="English(uk)">English(uk)</option>
          <option value="Bangla">Bangla</option>
        </select>
      </div>
      <div className={`mr-20 ${path == "/dashboard" ? "block" : "hidden"}`}>
        <UserNavbar />
      </div>
    </div>
  )
}

export default Navbar;