import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApiFromUrl } from "../../../Api/Api";
import VideoCart from "../../videoCart/VideoCart";
import styles from "../../../Utils/styles";

const Home = () => {
  const { channelId } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchApiFromUrl(`channel/videos/?id=${channelId}`)
      .then((res) => {
        const { contents } = res;
        setVideos(contents);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [channelId]);

  return (
    <div className={`${styles.subSectionPY}`}>
      <h2 className="text-2xl font-semibold my-4">Uploaded Videos</h2>

      <div className="grid gap-x-2 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {videos?.map((video) => (
          <VideoCart {...video} key={video?.video?.videoId} />
        ))}
      </div>
    </div>
  );
};

export default Home;
