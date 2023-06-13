import React, { useRef } from "react";
import { Link } from "react-router-dom";
// import { LeftArrow, RightArrow } from "../../Assets/Icons";

const ChannelNav = () => {
  const navRef = useRef(null);
  // const [scrollLeft, setScrollLeft] = useState(0);
  const links = [
    {
      title: "Home",
      url: "",
    },
    {
      title: "About",
      url: "About",
    },
  ];

  // const handleClick = (direction) => {
  //   if (direction === "prev") {
  //     navRef.current.scrollLeft -= navRef.current.clientWidth;
  //   } else if (direction === "next") {
  //     navRef.current.scrollLeft += navRef.current.clientWidth;
  //   }
  //   navRef.current.onscroll = () => {
  //     setScrollLeft(navRef.current.scrollLeft);
  //   };
  // };

  return (
    <div className="mt-9">
      <nav className="flex gap-2 items-center">
        {/* {scrollLeft > 0 && (
          <button
            className="text-subTitle text-lg"
            onClick={() => handleClick("prev")}
          >
            <LeftArrow />
          </button>
        )} */}
        <ul
          ref={navRef}
          className="channel-nav flex gap-5 items-center overflow-x-auto overflow-y-hidden scroll-smooth"
        >
          {links.map((link) => (
            <li key={link.title}>
              <Link
                to={link.url}
                className="py-3 px-4 uppercase text-sm font-semibold text-subTitle hover:text-white"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* <button
          className="text-subTitle text-lg"
          onClick={() => handleClick("next")}
        >
          <RightArrow />
        </button> */}
      </nav>
    </div>
  );
};

export default ChannelNav;
