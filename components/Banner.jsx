import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import circleImage from "@/public/man.png";
import Headset from "@/public/Headset.svg";
import Image from "next/image";
import { Badge } from "./ui/badge";
import CircleProgressBar from "./CircleProgressBar";

const Banner = ({ className, ...props }) => {
  return (
    <div className="z-0  bg-gradient-to-b from-[#093042] to-[rgb(9,109,115)] flex">
      <div className="flex justify-center flex-col w-1/2 ml-10 space-y-10">
        <h1 className="text-5xl font-bold text-white">
          <span className="text-[#01db2f]">Get Hired Faster</span> <br />
          with Smart ATS Matching!
        </h1>
        <p className="text-[18px] font-normal text-white">
          ATS helps you tailor your resume for any job, showcasing the essential
          skills and experience recruiters are looking for
        </p>
        <button
          className={cn(
            "w-60 relative inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-[#003643] rounded-full shadow-md  transition-all border-2 border-[#62D84E]",
            "hover:text-white hover:shadow-md",
            className
          )}
          {...props}
        >
          <span className="relative z-10">SCAN YOUR RESUME</span>
        </button>
      </div>
      <div className="flex justify-center items-center w-1/2">
        <div className="bg-bannerBg bg-no-repeat bg-size-100 w-4/5 relative">
          <Image
            className="w-[85%] relative left-20"
            src={circleImage}
            alt="hello"
          />
          <Badge className="flex items-center justify-center flex-row space-x-2 bg-white text-black shadow-md  rounded-xl w-[220px] h-[50px] absolute bottom-[165px] left-[-80px]">
            <Image className="" src={Headset} alt="" />
            <span className="font-bold text-[14px]">24x7 Customer Support</span>
          </Badge>
          <Badge className="flex items-center justify-center flex-row space-x-2 bg-white text-black shadow-md  rounded-xl w-[165px] h-[50px] absolute bottom-[25px] left-[-40px]">
            <Image className="" src={Headset} alt="" />
            <span className="font-bold text-[14px]">Find Best Talents</span>
          </Badge>
          <Badge className="flex items-center justify-center flex-row space-x-2 bg-white text-black shadow-md  rounded-xl w-[220px] h-[50px] absolute bottom-[85px] right-[-50px]">
            <Image className="" src={Headset} alt="" />
            <span className="font-bold text-[14px]">
              ATS Friendly Templates
            </span>
          </Badge>
          <div className="absolute top-[120px] right-16">
            <CircleProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
