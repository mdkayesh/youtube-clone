import React, { useRef, useState } from "react";
import Logo from "../../Assets/Logo";
import {
  Menu,
  Microphn,
  Notification,
  Search,
  VideoAdd,
} from "../../Assets/Icons";
import SearchBar from "./SearchBar";
import styles from "../../Utils/styles";
import { useContextValues } from "../../Context/ContextApI";
import { Link } from "react-router-dom";
import MobileSearch from "./MobileSearch";
import { clickToClose } from "../../Utils/functions";

const Header = () => {
  const { toggleSidebar } = useContextValues();
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);

  return (
    <header
      className={`header fixed top-0 left-0 bg-bg_primary w-full py-2 z-50 ${styles.paddingX}`}
      ref={containerRef}
    >
      <div className="relative">
        <MobileSearch
          show={show}
          setShow={setShow}
          containerRef={containerRef}
        />
        <div className="flex justify-between items-center">
          {/* left */}
          <div className="left flex gap-1 items-center">
            <div
              className={`menu text-xl rounded-full p-2 ${styles.btnCommonStyle}`}
              onClick={toggleSidebar}
            >
              <Menu />
            </div>
            <Link to={"/"} className="logo w-[120px] h-10">
              <Logo fillColor={"white"} />
            </Link>
          </div>

          {/* middle */}

          <div className="middle flex-[0.8] hidden md:block">
            <SearchBar />
          </div>

          {/* right */}

          <div className="right">
            <div className="flex gap-3 items-center text-2xl">
              <div
                className={`searchBtn ${styles.btnCommonStyle} p-2 rounded-full md:hidden`}
                onClick={() =>
                  clickToClose(
                    show,
                    setShow,
                    containerRef,
                    ".header",
                    ".searchBtn"
                  )
                }
              >
                <Search />
              </div>
              <div
                className={`${styles.btnCommonStyle} p-2 rounded-full md:hidden`}
              >
                <Microphn />
              </div>
              <div className={`${styles.btnCommonStyle} p-2 rounded-full`}>
                <VideoAdd />
              </div>
              <div className={`${styles.btnCommonStyle} p-2 rounded-full`}>
                <Notification />
              </div>
              {/* <div className={`${styles.btnCommonStyle} p-2 rounded-full`}>p</div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
