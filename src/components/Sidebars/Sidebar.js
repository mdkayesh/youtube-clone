import React from "react";
import {
  History,
  Home,
  Library,
  Like,
  Menu,
  PlaySquare,
  Shorts,
  Subscription,
  Time,
} from "../../Assets/Icons";
import Logo from "../../Assets/Logo";
import styles from "../../Utils/styles";
import { useContextValues } from "../../Context/ContextApI";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Home",
    icon: <Home />,
    url: "/",
  },
  {
    title: "Shots",
    icon: <Shorts />,
    url: "/",
  },
  {
    title: "Subscription",
    icon: <Subscription />,
    url: "/",
  },
  {
    title: "Library",
    icon: <Library />,
    url: "/",
  },
  {
    title: "History",
    icon: <History />,
    url: "/",
  },
  {
    title: "Your Videos",
    icon: <PlaySquare />,
    url: "/",
  },
  {
    title: "Watch later",
    icon: <Time />,
    url: "/",
  },
  {
    title: "Liked videos",
    icon: <Like />,
    url: "/",
  },
];

const Sidebar = () => {
  const { isOpenSidebar, toggleSidebar } = useContextValues();

  return (
    <>
      <div
        className={`sidebar ${isOpenSidebar ? "left-0" : "-left-full"} ${
          styles.paddingX
        } py-2 fixed top-0 w-[30%] min-w-[250px] max-w-[250px] h-screen overflow-y-auto bg-bg_primary transition-all duration-300 z-30`}
      >
        <div className="flex gap-1 items-center pb-3">
          <div
            className={`menu text-xl rounded-full p-2 ${styles.btnCommonStyle}`}
            onClick={toggleSidebar}
          >
            <Menu />
          </div>
          <div className="logo w-[120px] h-10">
            <Logo fillColor={"white"} />
          </div>
        </div>
        <nav>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                {index === 3 ? (
                  <hr className="border-[#3F3F3F] border border-solid my-3" />
                ) : null}
                <Link className="flex gap-5 items-center px-3 py-2 rounded-lg hover:bg-[#2f2f2f]">
                  <span className="w-5 [&_svg]:w-full [&_svg]:h-full">
                    {link.icon}
                  </span>
                  <span className="text-sm">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={`${
          isOpenSidebar ? "visible opacity-100" : "invisible opacity-0"
        } fixed top-0 left-0 w-full h-full bg-[#00000081] z-10`}
        onClick={toggleSidebar}
      />
    </>
  );
};

export default Sidebar;
