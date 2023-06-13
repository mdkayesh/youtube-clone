import React from "react";
import { Home, Library, Shorts, Subscription } from "../../Assets/Icons";
import { Link, useLocation } from "react-router-dom";
import styles from "../../Utils/styles";

const sidebarLinks = [
  {
    title: "Home",
    icon: <Home className="w-full h-full" />,
    url: "",
  },
  {
    title: "Shorts",
    icon: <Shorts />,
    url: "",
  },
  {
    title: "Subscription",
    icon: <Subscription className="w-full h-full" />,
    url: "",
  },
  {
    title: "Library",
    icon: <Library className="w-full h-full" />,
    url: "",
  },
];

const FixedSidebar = () => {
  const loacation = useLocation();

  return (
    !loacation.pathname.includes("watch") && (
      <div className="fixed w-fit left-0 top-14 h-full p-1 hidden md:block">
        <nav>
          <ul>
            {sidebarLinks.map((link) => (
              <li key={link.title}>
                <Link
                  className={`flex flex-col items-center gap-1 ${styles.btnCommonStyle} px-2 py-4 rounded-lg`}
                >
                  <span className={`w-5`}>{link.icon}</span>
                  <span className="text-xs">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  );
};

export default FixedSidebar;
