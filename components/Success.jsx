"use client";
import { useState, useEffect } from "react";
import Dashboard from "@/public/MacBook.png";
import Image from "next/image";
const Success = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageWidth = Math.min(windowWidth * 0.9, 800);

  return (
    <div className="container mx-auto md:py-20 py-0 mt-10 px-4 md:px-6 lg:px-8">
      <h1 className="md:heading-text leading-[30px] text-center !md:text-[36px] text-[26px]">
        AI-Driven Platform for Hiring & Job Seekers' Success
      </h1>
      <div className="flex md:flex-row flex-col justify-between flex-wrap md:flex-nowrap gap-x-10">
        <div className="flex flex-col flex-1 shrink-0">
          <div className="bg-custom-gradient relative z-0 before:bg-upground-color before:z-[-1] bg-b-color rounded-lg w-full h-[300px] flex justify-center items-end my-5">
            <div className="h-64 w-[80%] flex justify-center">
              <Image
                className=" max-w-full h-full ml-10"
                src={Dashboard}
                alt="dashboard"
                style={{ width: `${imageWidth}px` }}
              />
            </div>
          </div>
          <div className="flex flex-col p-4 space-y-4 lg:w-[80%] md:w-[100%]">
            <h2 className="text-[#282B27] text-[24px] font-bold leading-8">
              Build an ATS-Optimized Resume That Gets Noticed
            </h2>
            <p className="text-[#51564E] text-[15px] font-normal leading-6">
              Boost your chances of landing interviews by optimizing your resume
              with the right keywords and format.
            </p>
            <a className="c-btn" href="#">
              Upload Your Resume
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 shrink-0">
          <div className="bg-upground-color rounded-xl z-0 relative bg-b-color before:z-10 before:bg-custom-gradient w-full h-[300px] my-5"></div>
          <div className="flex flex-col p-4 space-y-4 lg:w-[80%] md:w-[100%]">
            <h2 className="text-[#282B27] text-[24px] font-bold leading-8">
              Find the Perfect Candidate Faster
            </h2>
            <p className="text-[#51564E] text-[15px] font-normal leading-6">
              Easily match resumes with job requirements using smart keyword
              analysis and automation.
            </p>
            <a className="c-btn" href="#">
              Login as HR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
