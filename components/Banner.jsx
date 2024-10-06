import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import circleImage from "@/public/man.png";
import Headset from "@/public/Headset.svg";
import Image from "next/image";
import { Badge } from "./ui/badge";
import CircleProgressBar from "./CircleProgressBar";

const Banner = ({ className, ...props }) => {
  return (
    <div className="z-0  bg-gradient-to-b from-[#093042] to-[rgb(9,109,115)] flex flex-wrap md:flex-nowrap">
      <div className="flex justify-center space-y-5 flex-col w-full md:w-1/2 md:ml-10 md:space-y-10 px-4 md:px-0 mt-4">
        <h1 className="text-3xl lg:text-3xl md:font-bold text-white">
          <span className="text-[#01db2f]">Get Hired Faster</span> <br />
          with Smart ATS Matching!
        </h1>
        <p className="text-[16px] md:text-[18px] font-normal text-white">
          ATS helps you tailor your resume for any job, showcasing the essential
          skills and experience recruiters are looking for
        </p>
        <button
          className={cn(
            "w-48 md:w-60 relative inline-flex items-center justify-center text-[16px] py-2 lg:px-6 lg:py-3 font-medium text-white bg-[#003643] rounded-full shadow-md  transition-all border-2 border-[#62D84E]",
            "hover:text-white hover:shadow-md",
            className
          )}
          {...props}
        >
          <span className="relative z-10">SCAN YOUR RESUME</span>
        </button>
      </div>
      <div className="flex justify-center shrink-0 items-center md:w-1/2 w-full">
        <div className="bg-bannerBg shrink-0 bg-no-repeat bg-size-m bg-bottom md:bg-size-custom md:w-4/5 w-full relative">
          <Image
            className="w-[85%] relative left-20 shrink-0"
            src={circleImage}
            alt="hello"
          />
          <Badge className="flex items-center justify-center flex-row space-x-2 bg-white text-black shadow-md  rounded-xl w-[220px] h-[50px] absolute bottom-[165px] md:left-[-80px] left-[15px]">
            <Image className="" src={Headset} alt="" />
            <span className="font-bold text-[14px]">24x7 Customer Support</span>
          </Badge>
          <Badge className="flex items-center justify-center flex-row space-x-2 bg-white text-black shadow-md  rounded-xl w-[165px] h-[50px] absolute bottom-[25px] md:left-[-40px] left-[15px]">
            <Image className="" src={Headset} alt="" />
            <span className="font-bold text-[14px]">Find Best Talents</span>
          </Badge>
          <Badge className="flex items-center justify-center flex-row space-x-2 bg-white text-black shadow-md  rounded-xl w-[220px] h-[50px] absolute bottom-[85px] md:right-[-20px] right-[15px]">
            <Image className="" src={Headset} alt="" />
            <span className="font-bold text-[14px]">
              ATS Friendly Templates
            </span>
          </Badge>
          <div className="absolute sm:top-[100px] sm:right-[30px]  md:top-[20px]  md:right-[-10px] lg:top-[70px] lg:right-[-30px] xl:top-[120px]  top-8 right-4">
            <CircleProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
