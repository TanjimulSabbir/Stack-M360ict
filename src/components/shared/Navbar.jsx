import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../../style/navbar.css";

function Navbar() {
  const path = useLocation().pathname;

  return (
    <div className={`flex items-center justify-between ${path == "/dashboard" && "hidden"} mt-4 px-4 md:mt-0 md:px-0`}>
      <div className="md:ml-20 md:mt-6">
        <img src={logo} alt="logo" />
      </div>
      <div className={`md:mr-20 `}>
        <select className="selet w-full rounded-xl cursor-pointer">
          <option value="" disabled>Select Language</option>
          <option value="English(uk)">English(uk)</option>
          <option value="Bangla">Bangla</option>
        </select>
      </div>
    </div>
  )
}

export default Navbar;