import React, { useState } from "react";
import { formatNumber, fromNow } from "../../Utils/functions";

const Description = ({ videoDetails }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div
      className={`${
        seeMore ? "overflow-auto" : "overflow-hidden max-h-[150px]"
      } description cursor-pointer mt-10 hover:bg-btn_hover p-4 rounded-xl text-sm bg-[#272727] text-white`}
      onClick={(e) => {
        e.stopPropagation();

        setSeeMore(true);
      }}
    >
      <p className="mb-4 font-semibold text-white text-base">
        <span>{formatNumber(videoDetails?.stats?.views)} views</span>{" "}
        <span>{fromNow(videoDetails?.publishedDate)}</span>
      </p>
      <pre className="font-['Roboto'_,sans-serif]">
        {videoDetails?.description}
      </pre>

      <button
        type="button"
        className="text-lg text-blue-500 hover:underline"
        onClick={(e) => {
          e.stopPropagation();

          setSeeMore(false);
        }}
      >
        See less
      </button>
    </div>
  );
};

export default Description;
