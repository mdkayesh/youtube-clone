import React, { useEffect, useState } from "react";
import styles from "../../Utils/styles";
import { Link, useParams } from "react-router-dom";
import { fetchApiFromUrl } from "../../Api/Api";
import {
  Checked,
  Like,
  Notification,
  Share,
  MenuDotted,
} from "../../Assets/Icons";
import { formatNumber } from "../../Utils/functions";
import Description from "./Description";
import RelatedVideoCart from "./RelatedVideoCart";

const VideoDetails = () => {
  const { videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [relatedVideos, setrelatedVideos] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const details = await fetchApiFromUrl(`video/details/?id=${videoId}`);
        setVideoDetails(details);
        const { contents } = await fetchApiFromUrl(
          `video/related-contents/?id=${videoId}`
        );
        setrelatedVideos(contents);
      } catch (err) {
        console.log(err);
      }
    })();

    return () => null;
  }, [videoId]);

  // console.log(relatedVideos);

  return (
    <section className={`mt-[70px] w-full ${styles.sectionPX}`}>
      <div className="flex gap-6 flex-wrap lg:flex-nowrap">
        {/* left col */}

        <div className="left-col w-full lg:w-[65%]">
          <div className="video">
            <iframe
              width="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={videoDetails}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-[300px] sm:h-[360px] container"
            />
          </div>
          <div className="content mt-4">
            <h2 className="text-lg">{videoDetails?.title}</h2>

            <div className="flex justify-between items-center gap-y-7 flex-wrap md:flex-nowrap mt-5 text-sm">
              {/* left */}
              <div className="flex gap-3 items-center justify-between w-full md:justify-normal md:w-fit">
                <div className="flex gap-3 items-center">
                  <div className="img rounded-full overflow-hidden">
                    <img
                      src={videoDetails?.author?.avatar[0]?.url}
                      alt="author"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <Link className="relative z-10 hover:text-title_color text-lg">
                        {videoDetails?.author?.title}
                      </Link>
                      {videoDetails?.author?.badges.map((badge) =>
                        badge?.text === "Verified" ? (
                          <Checked key={badge?.text} />
                        ) : null
                      )}
                    </div>
                    <p className="text-sm text-subTitle">
                      {videoDetails?.author?.stats?.subscribersText}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className={`${styles.btnBasic} bg-slate-100 text-black hover:text-text_color`}
                >
                  <Notification className="text-xl" />
                  <span>Subscribe</span>
                </button>
              </div>

              {/* right */}
              <div className="flex gap-2 items-center">
                <div className="like-Unlike flex">
                  <button
                    type="button"
                    className={`px-2 py-2 bg-btn_bg hover:bg-btn_hover rounded-l-[99px] flex items-center`}
                  >
                    <Like className="text-2xl" />{" "}
                    {formatNumber(videoDetails?.stats?.likes)}
                  </button>

                  <button
                    type="button"
                    className={`px-2 py-2 bg-btn_bg hover:bg-btn_hover rounded-r-[99px]`}
                  >
                    <Like className="rotate-180 text-2xl" />
                  </button>
                </div>

                <button
                  type="button"
                  className={`${styles.btnBasic} flex gap-1`}
                >
                  <Share className="text-2xl" />
                  <span>Share</span>
                </button>
                <button
                  type="button"
                  className={`${styles.btnBasic} flex gap-1`}
                >
                  <MenuDotted className="text-2xl" />
                </button>
              </div>
            </div>

            {/* description */}

            <Description videoDetails={videoDetails} />
          </div>
        </div>

        {/* right col */}

        <div className="w-full lg:w-[35%]">
          <ul className="">
            {relatedVideos?.map((video, index) => (
              <li key={index} className="mt-3 w-full">
                <RelatedVideoCart {...video} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VideoDetails;
