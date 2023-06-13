import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../../Utils/functions";
import { Checked } from "../../Assets/Icons";
import styles from "../../Utils/styles";

const SearchVideoCart = ({ video, channel }) => {
  return (
    <>
      {video && (
        <div className="video-cart flex flex-col relative sm:gap-3 sm:flex-row">
          <Link
            to={`/watch/${video?.videoId}`}
            className="bg-transparent absolute top-0 left-0 w-full h-full opacity-0"
          />
          <div className="img sm:min-w-[40%] sm:max-w-[40%] lg:min-w-[40%] lg:max-w-[40%] overflow-hidden rounded-md">
            <img
              src={video?.thumbnails[0]?.url || video?.thumbnails[1]?.url}
              alt="thumbnails"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="content mt-2.5 flex gap-3 items-start sm:mt-0">
            <div className="flex flex-col gap-1">
              <h3 className="text-overflow-line-2 w-full font-semibold lg:text-sm">
                {video?.title}
              </h3>
              <div className="flex items-center text-sm gap-1 text-subTitle">
                <Link className="text-sm relative z-10 text-overflow-line-1 hover:text-title_color">
                  {video?.author?.title}
                </Link>
                {video?.author?.badges.map((badge) =>
                  badge?.text === "Verified" ? (
                    <Checked className="text-xs" key={badge?.text} />
                  ) : null
                )}
              </div>
              {video && (
                <div className="text-xs text-[#A8A8A8] text-overflow-line-1">
                  <span>{formatNumber(video?.stats?.views)} views</span>
                  <span className="w-1 h-1 inline-block rounded-full bg-subTitle align-middle mx-1"></span>
                  <span>{video?.publishedTimeText}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {channel && (
        <div className="channel relative">
          <Link
            to={`/channel/${channel?.channelId}`}
            className="absolute top-0 left-0 w-full h-full bg-black opacity-0"
          />
          <div className="flex gap-4 items-center">
            <div className="img w-[40%]">
              <img
                src={channel?.avatar[1]?.url}
                alt="channel"
                className="rounded-full mx-auto"
              />
            </div>

            <div className="flex justify-between items-center flex-wrap gap-3 w-[60%] sm:flex-nowrap">
              <div className="flex flex-col">
                <h3 className="text-lg text-white">{channel?.title}</h3>
                <div className="text-xs text-[#A8A8A8] text-overflow-line-1 mt-2">
                  <span>{channel?.username}</span>
                  <span className="w-1 h-1 inline-block rounded-full bg-subTitle align-middle mx-1"></span>
                  <span>{channel?.stats?.subscribersText}</span>
                </div>
              </div>

              <button
                type="button"
                className={`${styles.btnBasic} bg-white text-black hover:text-white relative z-10`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchVideoCart;
