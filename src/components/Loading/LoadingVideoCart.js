import React from "react";

const LoadingVideoCart = ({ className }) => {
  return (
    <div className={`animate-pulse mx-auto w-full`}>
      <div className={`${className}`}>
        <div className="bg-gray-900 w-full max-w-[300px] h-[200px] rounded-lg"></div>
        <div className="flex gap-3 mt-4 w-full">
          <div className="rounded-full min-h-[45px] min-w-[45px] max-h-[45px] max-w-[45px] bg-gray-900"></div>
          <div className="flex flex-col gap-2 w-full">
            <div className="rounded-lg bg-gray-900 w-[90%] h-4"></div>
            <div className="rounded-lg bg-gray-900 w-[30%] h-3"></div>
            <div className="rounded-lg bg-gray-900 w-[45%] h-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingVideoCart;
