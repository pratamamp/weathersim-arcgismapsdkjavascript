import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full h-screen bg-gray-500">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
