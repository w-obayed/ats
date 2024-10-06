import Image from "next/image";
import person from "@/public/person.png";

const Smart = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="flex md:flex-row flex-col md:justify-between gap-x-10 gap-y-10">
        <div className="flex flex-col flex-1">
          <Image className="w-full rounded-lg" src={person} alt="" />
        </div>
        <div className="flex flex-col flex-1 justify-center items-center">
          <div className="flex flex-col space-y-5 w-[100%]">
            <h2 className="text-[#141513] text-[39px] font-bold leading-[45px]">
              Simplify Hiring
              <br />
              <span className="font-normal">with Smarter Tools</span>
            </h2>
            <p className="text-[#51564E] text-[15px] font-normal leading-6">
              Finding the perfect candidate doesn’t have to be time-consuming.
              Our tool helps HR professionals optimize their candidate search by
              matching the most relevant resumes with their job openings. Say
              goodbye to manual sorting and tedious keyword searches.
            </p>
            <a className="c-btn" href="#">
              CHECK ATS SCORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smart;
