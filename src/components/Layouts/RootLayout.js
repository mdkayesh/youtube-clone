import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import FixedSidebar from "../Sidebars/FixedSidebar";
import Sidebar from "../Sidebars/Sidebar";

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="root-layout">
      <Header />
      <FixedSidebar />
      <div className="flex gap-5">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
