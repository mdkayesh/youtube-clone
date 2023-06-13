import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../../Utils/functions";
import { Checked } from "../../Assets/Icons";
import { useContextValues } from "../../Context/ContextApI";

const RelatedVideoCart = ({ video, playlist }) => {
  const { isLoading } = useContextValues();

  return (
    !isLoading && (
      <div className="video-cart flex flex-col relative sm:gap-3 sm:flex-row">
        <Link
          to={`/watch/${video?.videoId || playlist?.playlistId}`}
          className="bg-transparent absolute top-0 left-0 w-full h-full opacity-0"
        />
        <div className="img sm:min-w-[180px] sm:max-w-[180px] lg:min-w-[168px] lg:max-w-[168px] sm:max-h-[110px] sm:min-h-[94px] overflow-hidden rounded-md">
          <img
            src={
              video?.thumbnails[2]?.url ||
              video?.thumbnails[1]?.url ||
              video?.thumbnails[0]?.url ||
              playlist?.thumbnails[1]?.url
            }
            alt="thumbnails"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="content mt-2.5 flex gap-3 items-start sm:mt-0">
          <div className="flex flex-col gap-1">
            <h3 className="text-overflow-line-2 w-full font-semibold lg:text-sm">
              {video?.title || playlist?.title}
            </h3>
            <div className="flex items-center text-sm gap-1 text-subTitle">
              <Link className="text-sm relative z-10 text-overflow-line-1 hover:text-title_color">
                {video?.author?.title || playlist?.author?.title}
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
    )
  );
};

export default RelatedVideoCart;
