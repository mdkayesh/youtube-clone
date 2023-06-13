import React from "react";
import styles from "../../Utils/styles";
import { useContextValues } from "../../Context/ContextApI";
import SearchVideoCart from "./SearchVideoCart";
import LoadingVideoCart from "../Loading/LoadingVideoCart";

const SearchResult = () => {
  const { searchResults, isLoading } = useContextValues();

  return (
    <section
      className={`search-results ${styles.sectionMt_ml} ${styles.paddingX} w-full`}
    >
      <div className="container">
        {!isLoading ? (
          searchResults?.contents?.map((result) => (
            <div
              className="mt-5"
              key={result?.video?.videoId || result?.channel?.channelId}
            >
              <SearchVideoCart {...result} />
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-3">
            <LoadingVideoCart
              className={
                "flex gap-3 flex-col max-w-xs mx-auto sm:flex-row sm:max-w-full"
              }
            />
            <LoadingVideoCart
              className={
                "flex gap-3 flex-col max-w-xs mx-auto sm:flex-row sm:max-w-full"
              }
            />
            <LoadingVideoCart
              className={
                "flex gap-3 flex-col max-w-xs mx-auto sm:flex-row sm:max-w-full"
              }
            />
            <LoadingVideoCart
              className={
                "flex gap-3 flex-col max-w-xs mx-auto sm:flex-row sm:max-w-full"
              }
            />
            <LoadingVideoCart
              className={
                "flex gap-3 flex-col max-w-xs mx-auto sm:flex-row sm:max-w-full"
              }
            />
            <LoadingVideoCart
              className={
                "flex gap-3 flex-col max-w-xs mx-auto sm:flex-row sm:max-w-full"
              }
            />
            <LoadingVideoCart
              className={
                "flex gap-3 flex-col max-w-xs mx-auto sm:flex-row sm:max-w-full"
              }
            />
            <LoadingVideoCart
              className={
                "flex gap-3 flex-col max-w-xs mx-auto sm:flex-row sm:max-w-full"
              }
            />
            <LoadingVideoCart
              className={
                "flex gap-3 flex-col max-w-xs mx-auto sm:flex-row sm:max-w-full"
              }
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchResult;
