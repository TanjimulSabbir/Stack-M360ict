import { useSelector } from "react-redux";
import searchIcon from "../../assets/searchIcon.svg"
import notificationBell from "../../assets/notification-bell 1.svg"
import { debounce } from "../../components/utils/Debounce";
import { useState } from "react";
import gravatarUrl from "gravatar-url";
import { Link } from "react-router-dom";
import { userLogOut } from "../../RTK/features/auth/authSlice";

function UserNavbar() {
  const loggedInUser = useSelector(state => state.auth) || {};
  const userReducerData = useSelector(state => state?.users?.allUserData);
  const [matchedUser, setMatchedUser] = useState([]);
  const [inputText, setInputText] = useState();
  const [showName, setShowName] = useState(false);

  const { avatar, email, first_name, last_name } = loggedInUser?.user.data || {};


  const handleUserSearch = (searchText) => {
    setInputText(searchText)
    if (searchText !== "") {
      const lowerSearchText = searchText.toLowerCase();
      const matchedData = userReducerData.filter(user => user.first_name.toLowerCase().includes(lowerSearchText) || user.last_name.toLowerCase().includes(lowerSearchText) || user.email.toLowerCase().includes(lowerSearchText)).sort((a, b) => a.id - b.id);
      setMatchedUser(matchedData)
    }
  }
  const searchUser = debounce(handleUserSearch, 300)

  return (
    <div className="relative flex items-center justify-between mt-6">
      {/* Left part of userNavbar or Search Input Box */}
      <div className="relative">
        <span className="absolute top-5 right-6">
          <img src={searchIcon} alt="" />
        </span>
        <input onChange={(event) => searchUser(event.target.value)} className="userSearchInput"
          placeholder="Search" type="text" />
      </div>

      {/* Right part of User Navar */}
      <div>
        <div>
          <ul className="menu menu-horizontal rounded-box flex items-center">
            <li>
              <p className="cursor-pointer" onClick={() => userLogOut()}>{loggedInUser.email ? "Logout" : "Login"}</p>
            </li>
            <li>
              <img className="cursor-pointer" src={notificationBell} alt="notificatin_bell" />
            </li>
            <li>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <img className="shrink-0 h-10 w-10 rounded-full cursor-pointer" src={avatar || gravatarUrl(email, { size: 80 })} alt="" />
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a href="">
                      {(first_name && first_name + " " + last_name && last_name) || "Name not found"}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* User Filtering Result */}
      {
        inputText !== "" && matchedUser.length > 0 && <div className="fixed min-h-full inset-0 w-full z-10 bg-black/50 cursor-pointer mt-24">

          <div className="overflow-x-auto rounded-lg">
            <table className="table">

              <tbody className="space-y-8 bg-white p-10  top-1/2 left-1/2 z-20">
                {matchedUser?.map(user => {
                  const { id, first_name, last_name, email, avatar } = user;
                  return (
                    <tr key={user.id} className="bg-sky-200">

                      <th>{id}</th>
                      <td>{first_name + last_name}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={avatar || gravatarUrl(email, { size: 80 })} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold"> {first_name + " " + last_name}</div>
                            <div className="text-sm opacity-50">United States</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {email}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>}
    </div>
  )
}

export default UserNavbar;