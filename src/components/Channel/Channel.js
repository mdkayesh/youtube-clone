import React, { useEffect, useState } from "react";
import styles from "../../Utils/styles";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchApiFromUrl } from "../../Api/Api";
import ChannelNav from "./ChannelNav";
import { RightArrow } from "../../Assets/Icons";
import { useContextValues } from "../../Context/ContextApI";

const Channel = () => {
  const { channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const { getCurrentChannelDetails } = useContextValues();

  useEffect(() => {
    (async () => {
      try {
        const details = await fetchApiFromUrl(
          `channel/details/?id=${channelId}`
        );
        setChannelDetails(details);
        getCurrentChannelDetails(details);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [channelId]);

  return (
    <section
      className={`${styles.sectionMt_ml} ${styles.paddingX} w-full overflow-x-hidden`}
    >
      <div className="channel-header flex justify-between items-center flex-col gap-4 md:flex-row">
        <div className="left flex gap-3 items-center justify-center text-center flex-col md:text-left md:flex-row">
          <div className="img">
            <img
              src={channelDetails?.avatar[2]?.url}
              alt="channelImage"
              className="rounded-full min-w-[130px] h-[130px]"
            />
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold">{channelDetails?.title}</h1>
            <p className="text-subTitle mt-1">
              <span className="font-semibold">{channelDetails?.username}</span>
              <span className="ml-2">
                {channelDetails?.stats?.subscribersText}
              </span>
              <span className="ml-2">{channelDetails?.stats?.videosText}</span>
            </p>
            <Link
              to={"About"}
              className="mt-3 text-subTitle flex gap-2 items-center"
            >
              {channelDetails?.description ? (
                <p className="text-overflow-line-1">
                  {channelDetails?.description}
                </p>
              ) : (
                "More about this channel"
              )}

              <span>
                <RightArrow className="text-xs" />
              </span>
            </Link>
          </div>
        </div>

        <button
          className={`${styles.btnBasic} bg-white text-black hover:text-white`}
        >
          Subscribe
        </button>
      </div>

      {/* channel nav */}

      <ChannelNav />

      <Outlet />
    </section>
  );
};

export default Channel;
