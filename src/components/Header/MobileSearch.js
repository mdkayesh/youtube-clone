import React from "react";
import { LeftArrowBig } from "../../Assets/Icons";
import SearchBar from "./SearchBar";
import { clickToClose } from "../../Utils/functions";

const MobileSearch = ({ show, setShow, containerRef }) => {
  return (
    show && (
      <div className="absolute top-0 left-0 w-full h-full bg-bg_primary flex justify-between items-center gap-2 md:hidden">
        <button
          className="searchBtn text-2xl"
          onClick={() =>
            clickToClose(show, setShow, containerRef, ".header", ".searchBtn")
          }
        >
          <LeftArrowBig />
        </button>

        <div className="flex-[1]">
          <SearchBar />
        </div>
      </div>
    )
  );
};

export default MobileSearch;
