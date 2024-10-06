"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "@/node_modules/react-circular-progressbar/dist/styles.css";

const CircleProgressBar = () => {
  const percentage = 95;
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-xl py-1 px-2 md:w-[125px] w-[105px] md:h-[140px] h-[120px]">
      <span className="font-bold lg:text-[14px] text-[12px] text-gray-900 mb-2">
        Match Rate
      </span>
      <div className="md:w-[94px] w-[74px] md:h-[94px] h-[74px]">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}`}
          className="my-custom-progressbar"
          styles={buildStyles({
            pathColor: "#1FC76A",
            textColor: "#000",
            trailColor: "#D9F1EC",
            textSize: "25px",
          })}
        />
      </div>
    </div>
  );
};

export default CircleProgressBar;
