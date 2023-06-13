import React from "react";
import { formatNumber, fromNow } from "../../Utils/functions";

const Description = ({ videoDetails }) => {
  return (
    <div className="description mt-10 hover:bg-btn_hover overflow-auto p-4 rounded-xl text-sm bg-[#272727] text-white">
      <p className="mb-4 font-semibold text-white text-base">
        <span>{formatNumber(videoDetails?.stats?.views)} views</span>{" "}
        <span>{fromNow(videoDetails?.publishedDate)}</span>
      </p>
      <pre className="font-['Roboto'_,sans-serif]">
        {videoDetails?.description}
      </pre>
    </div>
  );
};

export default Description;
