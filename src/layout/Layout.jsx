import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header />
      <Outlet />
      <footer />
    </>
  )
}

export default Layout;