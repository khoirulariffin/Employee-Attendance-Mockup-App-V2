import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import SmallSidebar from "../../Components/SmallSidebar/SmallSidebar";
import LargeSidebar from "../../Components/LargeSidebar/LargeSidebar";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="grid grid-cols-12 min-h-screen">
      {location.pathname === "/home/schedule" ? (
        <SmallSidebar />
      ) : (
        <div className="col-span-2 bg-[rgb(16,24,40)]">
          <LargeSidebar />
        </div>
      )}
      <div className="bg-[rgb(16,24,40)] col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
