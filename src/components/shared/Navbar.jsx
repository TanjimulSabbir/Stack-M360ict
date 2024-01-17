import logo from "../../assets/logo.svg";
import "../../style/navbar.css";

function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="ml-20 mt-6">
        <img src={logo} alt="logo" />
      </div>
      <div className="mr-20">
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