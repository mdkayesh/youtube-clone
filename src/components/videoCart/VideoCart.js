import React from "react";
import { Link } from "react-router-dom";
import { Checked } from "../../Assets/Icons";
import { formatNumber } from "../../Utils/functions";

const VideoCart = ({
  type,
  video: {
    title,
    videoId,
    thumbnails,
    stats,
    author,
    lengthSeconds,
    publishedTimeText,
  },
}) => {
  return (
    <div className="video-cart max-w-sm mx-auto relative">
      <Link
        to={`/watch/${videoId}`}
        className="bg-transparent absolute top-0 left-0 w-full h-full opacity-0"
      />
      <div className="img">
        <img
          src={thumbnails[3]?.url || thumbnails[2]?.url || thumbnails[0]?.url}
          alt="thumbnails"
          className="w-full h-full rounded-xl"
        />
      </div>

      <div className="content mt-2.5 px-2 flex gap-3 items-start">
        {author && (
          <img
            src={author?.avatar[0]?.url}
            alt="author"
            className="rounded-full h-9 w-9"
          />
        )}

        <div className="flex flex-col">
          <h3 className="text-overflow-line-2 w-full">{title}</h3>
          <div className="flex items-center text-sm gap-1 text-subTitle">
            <Link className="text-sm relative z-10 hover:text-title_color">
              {author?.title}
            </Link>
            {author?.badges.map((badge) =>
              badge?.text === "Verified" ? <Checked key={badge?.text} /> : null
            )}
          </div>
          <div className="text-sm text-[#A8A8A8]">
            <span>{formatNumber(stats.views)} views</span>
            <span className="w-1 h-1 inline-block rounded-full bg-subTitle align-middle mx-1"></span>
            <span>{publishedTimeText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
