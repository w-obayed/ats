const Boost = () => {
  return (
    <div className="container mx-auto py-20 ">
      <div className="flex flex-row justify-between gap-x-10">
        <div className="flex flex-col flex-1 mt-10">
          <div className="flex flex-col space-y-5 w-[80%]">
            <h2 className="text-[#141513] text-[39px] font-bold leading-[45px]">
              Boost Your Resume{" "}
              <span className="font-normal">to the Top of the Pile</span>
            </h2>
            <p className="text-[#51564E] text-[15px] font-normal leading-6">
              Are you struggling to pass the initial resume screening process?
              Our Resume ATS Checker helps you create an ATS-friendly resume
              that’s optimized for today’s digital hiring tools. We ensure your
              resume contains the right keywords and structure to get you
              noticed.
            </p>
            <a className="c-btn" href="#">
              CHECK ATS SCORE
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex items-end justify-center bg-upground-color rounded-l-lg rounded-br-lg z-0 relative bg-b-color before:z-[-1] before:bg-topground-color before:w-[90%] before:translate-x-[-44.6%] before:rounded-br-lg bg-a-color after:bg-aboveground-color after:z-[-2] w-full h-[300px] my-5">
            <div className="flex flex-col items-center z-50 mb-3">
              <div className="bg-white border-2 border-green-400 text-center px-4 py-1 text-xl font-semibold leading-[30px] rounded-full text-black">
                Identify Missing Keywords
              </div>
              <div className="border-l-2 border-dashed border-green-400 h-6"></div>

              <div className="bg-white border-2 border-green-400 text-center px-4 py-1 text-xl font-semibold leading-[30px] rounded-full text-black">
                Optimize for Resume
              </div>
              <div className="border-l-2 border-dashed border-green-400 h-6"></div>

              <div className="bg-white border-2 border-green-400 text-center px-4 py-1 leading-[30px] text-xl font-semibold rounded-full text-black">
                Tailored Feedback
              </div>
              <div className="border-l-2 border-dashed border-green-400 h-6"></div>

              <div className="bg-white border-2 border-green-400 text-center px-2 text-xl font-semibold w-[150px] leading-[22px] py-1 rounded-2xl text-black">
                AST Friendly Resume
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boost;
