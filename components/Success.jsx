import mackbook from "@/public/MacBook.png";
import Image from "next/image";
const Success = () => {
  return (
    <div className="container mx-auto py-20 mt-10">
      <h1 className="heading-text !text-[36px]">
        AI-Driven Platform for Hiring & Job Seekers' Success
      </h1>
      <div className="flex flex-row justify-between gap-x-10">
        <div className="flex flex-col flex-1">
          <div className="bg-custom-gradient relative z-0 before:bg-upground-color before:z-[-1] bg-b-color rounded-lg w-full h-[300px] flex justify-center items-end my-5">
            <Image
              className="h-[260px] w-[470px] ml-10"
              src={mackbook}
              alt=""
            />
          </div>
          <div className="flex flex-col p-4 space-y-4 w-[80%]">
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
        <div className="flex flex-col flex-1">
          <div className="bg-upground-color rounded-xl z-0 relative bg-b-color before:z-10 before:bg-custom-gradient w-full h-[300px] my-5"></div>
          <div className="flex flex-col p-4 space-y-4 w-[80%]">
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
