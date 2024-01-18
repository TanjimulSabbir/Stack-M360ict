import { useSelector } from "react-redux";
import searchIcon from "../../assets/searchIcon.svg"
import gravatar from "../../components/utils/gravatar";
function UserNavbar() {
  const data = useSelector(state => state.auth);
  const { avatar, email } = data.user || {};

  let emailAvatar;
  if (email) {
    emailAvatar = gravatar(email);
  }

  return (
    <div className="flex">
      <div className="relative">
        <span className="absolute top-5 right-6">
          <img src={searchIcon} alt="" />
        </span>
        <input className="userSearchInput" type="text" />
      </div>
      <div>
        <img className="shrink-0 h-12 w-12 rounded-full" src={avatar ? avatar : emailAvatar} alt="" />
      </div>
    </div>
  )
}

export default UserNavbar;