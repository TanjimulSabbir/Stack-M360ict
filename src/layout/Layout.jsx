import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Toaster } from "react-hot-toast";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster position="top-center" />
    </div>
  )
}

export default Layout;