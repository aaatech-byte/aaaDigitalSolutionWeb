
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Sidebar from "../Sidebar/Sidebar";


 function Layout() {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="content-area">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;