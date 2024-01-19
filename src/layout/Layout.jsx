import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Toaster } from "react-hot-toast";
import useLoggedInCheck from "../components/hooks/useLoggedInCheck";
import { useEffect } from "react";

function Layout() {

  return (
    <div>
      {/* <Navbar /> */}
      <Outlet />
      <Toaster position="top-center" />
    </div>
  )
}

export default Layout;