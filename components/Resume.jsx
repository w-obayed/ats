import Image from "next/image";
import { BsStars } from "react-icons/bs";
import resumeOne from "@/public/reactangle-resume.png";
import resumeTwo from "@/public/Rectangle-resume-1.png";
import imageBgRemove from "@/public/image-removebg.png";
import linkedin from "@/public/linkedin.png";

const Resume = () => {
  return (
    <div className="bg-[#f6f6f6] py-16 flex md:justify-between md:flex-row flex-col px-4 md:px-6 lg:px-8 mt-16">
      <div className="md:w-[60%] w-full">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-[#141513] lg:text-[39px] text-[25px] font-bold leading-7 lg:leading-[45px] pb-4">
            Job Winning <br className="hidden lg:block" />
            <span className="font-normal">Resume Templates</span>
          </h1>

          <p className="text-gray-500 text-lg mb-6 w-4/5">
            Get hands-on with our advanced AI-driven features and see the
            difference for yourself. Start your free trial today.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center space-x-2">
              <span className="text-green-500 rotate-[85deg] transform scale-x-[-1] text-xl">
                <BsStars />
              </span>
              <span className="text-gray-800">
                Context-aware natural language search and discovery
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500 rotate-[85deg] transform scale-x-[-1] text-xl">
                <BsStars />
              </span>
              <span className="text-gray-800">
                Embark on a journey of data-driven decision-making
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500 rotate-[85deg] transform scale-x-[-1] text-xl">
                <BsStars />
              </span>
              <span className="text-gray-800">
                Single permission model for data + AI
              </span>
            </li>
          </ul>
          <a className="c-btn lg:ml-[-30px]" href="#">
            CHECK ATS SCORE
          </a>
        </div>
      </div>
      <div className="flex flex-col md:w-[40%] w-full h-[430px] mt-14 md:mt-0">
        <div className="bg-[#f6f6f6] border border-solid border-gray-400  rounded-3xl z-0 relative  before:z-[-1] before:bg-upground-color w-full h-full my-5 before:w-[93%] before:h-[90%] before:content-['']  before:rounded-xl before:absolute before:left-[50%] before:top-[50%] before:translate before:block max-w-[450px] mx-auto">
          <Image
            className=" absolute left-1/2 bottom-[50%] top-[37%] right-1/2 translate"
            src={resumeOne}
            alt=""
          />
          <Image
            className="hidden lg:block absolute top-[50%]  right-[60%] translate"
            src={resumeTwo}
            alt=""
          />
          <div className="flex gap-4 bg-white border border-solid absolute bottom-0 left-0 border-gray-400 py-4 px-6 rounded-3xl w-[50%]">
            <span className="text-green-500 rotate-[85deg] transform scale-x-[-1] text-3xl">
              <BsStars />
            </span>
            <div>
              <div className="bg-[#E0E2DE] h-3 w-[200px] rounded-2xl mb-3"></div>
              <div className="bg-[#E0E2DE] h-2 w-[150px] rounded-2xl"></div>
            </div>
          </div>
          <div className="w-[250px] absolute bottom-[-21px] right-[15%]">
            <Image className="w-full block" src={imageBgRemove} alt="" />
            <div className="flex flex-row gap-3 items-center justify-center bg-white rounded-full px-5 py-2 shadow-lg relative top-[-20px]">
              <Image className="w-8" src={linkedin} alt="" />
              <h4 className="text-black text-2xl font-normal">George Nelson</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
