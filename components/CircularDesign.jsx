"use client";
import Skill from "@/public/Accurate Skill Matching.svg";
import Ai from "@/public/AI-Powered Efficiency.svg";
import Ats from "@/public/ATS Compatibility.svg";
import Hirring from "@/public/Effortless Hiring.svg";
import Keyword from "@/public/Keyword Optimization.svg";
import Template from "@/public/Multiple Template.svg";
import Time from "@/public/Save Screening Time.svg";
import Image from "next/image";

const CircularDesign = () => {
  return (
    <div className="hidden  min-h-screen lg:flex items-center justify-center bg-gradient-to-b from-[#012F46] to-[#005260]">
      <div className="relative w-96 h-96 lg:w-[700px] lg:h-[600px] flex items-center justify-center">
        <div className="border-[5px] border-t-0 border-l-0 border-r-0 border-solid rounded-full p-8 border-green-400 relative before:content-[''] before:w-8 before:h-8 before:bg-white before:rounded-full before:absolute before:bottom-[65px] before:left-3/2">
          <div className="w-[380px] h-[380px] py-10 px-4 bg-white rounded-full flex flex-col justify-center items-center text-center shadow-lg relative z-10">
            <h2 className="text-[38px] text-[#009743]  font-bold leading-[45px] text-center">
              Custom <br /> Tailoring
            </h2>
            <p className="text-lg font-normal text-center text-gray-700 mt-2 px-4">
              Personalized resume writing, tailored to your experience, skills,
              and the specific job you’re targeting, rather than using generic
              templates.
            </p>
            <button className="text-[#009743] text-[20px] leading-5 text-center font-medium px-4 py-2 border-2 border-solid border-green-500 mt-4">
              Learn more
            </button>
          </div>
        </div>

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative w-full h-full">
            <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 flex flex-col items-center w-32">
              <Image src={Ai} className="w-20 h-20"></Image>
              <p className="text-xl text-white mt-2 text-center font-bold">
                AI-Powered Efficiency
              </p>
            </div>

            <div className="absolute top-[-10%] right-[25%] flex flex-col items-center w-32">
              <Image src={Skill} className="w-20 h-20"></Image>
              <p className="text-xl text-white mt-2 text-center font-bold">
                Effortless Hiring
              </p>
            </div>

            <div className="absolute top-[25%] right-[0px] transform -translate-y-1/2 flex flex-col items-center w-32">
              <Image src={Ats} className="w-20 h-20"></Image>
              <p className="text-xl text-white mt-2 text-center font-bold">
                Save Screening Time
              </p>
            </div>

            <div className="absolute bottom-[30%] right-[-3%] flex flex-col items-center w-32">
              <Image src={Hirring} className="w-20 h-20"></Image>
              <p className="text-xl text-white mt-2 text-center font-bold">
                ATS Compatibility
              </p>
            </div>

            <div className="absolute bottom-0 right-[5%] transform -translate-x-1/2 flex flex-col items-center w-32">
              <Image src={Keyword} className="w-20 h-20"></Image>
              <p className="text-xl text-white mt-2 text-center font-bold">
                Accurate Skill Matching
              </p>
            </div>

            <div className="absolute bottom-[0px] left-[10%] flex flex-col items-center w-32">
              <Image src={Template} className="w-20 h-20"></Image>
              <p className="text-xl text-white mt-2 text-center font-bold">
                Custom Tailoring
              </p>
            </div>

            <div className="absolute top-[53%] left-[-7%] transform -translate-y-1/2 flex flex-col items-center w-32">
              <Image src={Time} className="w-20 h-20"></Image>
              <p className="text-xl text-white mt-2 text-center font-bold">
                Faster Hiring Process
              </p>
            </div>

            <div className="absolute top-[-10%] left-[25%] flex flex-col items-center w-32">
              <Image src={Ats} className="w-20 h-20"></Image>
              <p className="text-xl text-white mt-2 text-center font-bold">
                Multiple Template
              </p>
            </div>
            <div className="absolute top-[10%] left-[-20px] flex flex-col items-center w-32">
              <Image src={Ats} className="w-20 h-20"></Image>
              <p className="text-xl text-white mt-2 text-center font-bold">
                Keyword Optimization
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularDesign;
