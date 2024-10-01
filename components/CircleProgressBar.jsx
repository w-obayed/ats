"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "@/node_modules/react-circular-progressbar/dist/styles.css";

const CircleProgressBar = () => {
  const percentage = 95;
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-xl py-1 px-2 w-[125px] h-[140px]">
      <span className="font-bold text-[14px] text-gray-900 mb-2">
        Match Rate
      </span>
      <div className="w-[94px] h-[94px]">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}`}
          className="my-custom-progressbar"
          styles={buildStyles({
            pathColor: "#1FC76A",
            textColor: "#000",
            trailColor: "#D9F1EC",
            textSize: "30px",
          })}
        />
      </div>
    </div>
  );
};

export default CircleProgressBar;
