import { useSelector } from "react-redux";
import searchIcon from "../../assets/searchIcon.svg"
import notificationBell from "../../assets/notification-bell 1.svg"

function UserNavbar() {
  const data = useSelector(state => state.auth) || {};
  const { avatar } = data?.user || {};

  console.log(data, "userNavbar")

  return (
    <div className="flex items-center justify-between mt-6">
      <div className="relative">
        <span className="absolute top-5 right-6">
          <img src={searchIcon} alt="" />
        </span>
        <input className="userSearchInput" type="text" />
      </div>
      <div className="flex items-center justify-center space-x-8 mr-4">
        <img className="cursor-pointer" src={notificationBell} alt="notificatin_bell" />
        <img className="shrink-0 h-10 w-10 rounded-full" src={avatar && avatar} alt="" />
      </div>
    </div>
  )
}

export default UserNavbar;