import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/shared/Navbar";
import Footer from "../components/ui/shared/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout;