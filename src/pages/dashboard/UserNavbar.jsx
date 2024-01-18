import { useSelector } from "react-redux";
import searchIcon from "../../assets/searchIcon.svg"
function UserNavbar() {
  const data = useSelector(state => state.auth)||{};
  const { avatar } = data?.user || {};

  console.log(data,"userNavbar")

  return (
    <div className="flex">
      <div className="relative">
        <span className="absolute top-5 right-6">
          <img src={searchIcon} alt="" />
        </span>
        <input className="userSearchInput" type="text" />
      </div>
      <div>
        <img className="shrink-0 h-12 w-12 rounded-full" src={avatar && avatar} alt="" />
      </div>
    </div>
  )
}

export default UserNavbar;