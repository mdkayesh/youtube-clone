import React from "react";
import styles from "../../Utils/styles";
import { useContextValues } from "../../Context/ContextApI";
import VideoCart from "../videoCart/VideoCart";
import LoadingVideoCart from "../Loading/LoadingVideoCart";

const Feed = () => {
  const { homeContents, isLoading, errorMessage } = useContextValues();

  return (
    <section
      className={`${styles.sectionMt_ml} ${styles.sectionPX} w-full`}
      id="feed"
    >
      <div className="container grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!isLoading ? (
          homeContents?.map((content) => (
            <VideoCart key={content?.video?.videoId} {...content} />
          ))
        ) : (
          <>
            <LoadingVideoCart />
            <LoadingVideoCart />
            <LoadingVideoCart />
            <LoadingVideoCart />
            <LoadingVideoCart />
            <LoadingVideoCart />
            <LoadingVideoCart />
            <LoadingVideoCart />
          </>
        )}
      </div>

      {errorMessage && (
        <div className="flex justify-center items-center h-[calc(100vh-200px)] w-full">
          <h1 className="text-2xl">{errorMessage}</h1>
        </div>
      )}
    </section>
  );
};

export default Feed;
