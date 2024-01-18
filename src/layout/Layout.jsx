import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Toaster } from "react-hot-toast";
import useLoggedInCheck from "../components/hooks/useLoggedInCheck";

function Layout() {
  const userAuthentication = useLoggedInCheck();
  return (
    userAuthentication ? <div>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster position="top-center" />
    </div> : <div className="flex items-center justify-center text-green-500 text-2xl min-h-screen">User Authentication Checking...</div>
  )
}

export default Layout;