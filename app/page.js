"use client";

import { cn } from "@/lib/utils";
import circleImage from "@/public/man.png";
import Headset from "@/public/Headset.svg";
import Dashboard from "@/public/MacBook.png";
import person from "@/public/person.png";
import Skill from "@/public/Accurate Skill Matching.svg";
import Ai from "@/public/AI-Powered Efficiency.svg";
import Ats from "@/public/ATS Compatibility.svg";
import Hirring from "@/public/Effortless Hiring.svg";
import Keyword from "@/public/Keyword Optimization.svg";
import Template from "@/public/Multiple Template.svg";
import Time from "@/public/Save Screening Time.svg";
import { BsStars } from "react-icons/bs";
import resumeOne from "@/public/reactangle-resume.png";
import resumeTwo from "@/public/Rectangle-resume-1.png";
import imageBgRemove from "@/public/image-removebg.png";
import linkedin from "@/public/linkedin.png";
import sampleImage from "@/public/Thumbnail.png";
import { GrLinkUp } from "react-icons/gr";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import CircleProgressBar from "@/components/CircleProgressBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home({ className, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
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

  // post data
  const articles = [
    {
      type: "Report",
      title: "The Rise of AI in Business Analytics: What You Need to Know",
      image: sampleImage,
      link: "#",
    },
    {
      type: "News",
      title: "Customizing Your DataWise Dashboard: A Step-by-Step Guide",
      image: sampleImage,
      link: "#",
    },
    {
      type: "News",
      title: "Customizing Your DataWise Dashboard: A Step-by-Step Guide",
      image: sampleImage,
      link: "#",
    },
    {
      type: "Report",
      title: "Customizing Your DataWise Dashboard: A Step-by-Step Guide",
      image: sampleImage,
      link: "#",
    },
  ];
  return (
    <>
      <div className="z-0  bg-gradient-to-b from-[#093042] to-[rgb(9,109,115)] flex flex-wrap md:flex-nowrap">
        <div className="flex justify-center space-y-5 flex-col w-full md:w-1/2 md:ml-10 md:space-y-10 px-4 md:px-0 mt-4">
          <h1 className="text-3xl lg:text-3xl md:font-bold text-white">
            <span className="text-[#01db2f]">Get Hired Faster</span> <br />
            with Smart ATS Matching!
          </h1>
          <p className="text-[16px] md:text-[18px] font-normal text-white w-[75%]">
            ATS helps you tailor your resume for any job, showcasing the
            essential skills and experience recruiters are looking for
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
              <span className="font-bold text-[14px]">
                24x7 Customer Support
              </span>
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
                Boost your chances of landing interviews by optimizing your
                resume with the right keywords and format.
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

      <div className="container mx-auto md:py-20 px-4 md:px-6 lg:px-8">
        <div className="flex md:flex-row flex-col justify-between flex-wrap md:flex-nowrap gap-x-10 gap-y-10">
          <div className="flex flex-col flex-1 mt-10">
            <div className="flex flex-col space-y-5 lg:w-[80%] md:w-[100%]">
              <h2 className="text-[#141513] text-[25px] lg:text-[39px] font-bold leading-7 lg:leading-[45px] w-[85%]">
                Boost Your Resume{" "}
                <span className="font-normal">to the Top of the Pile</span>
              </h2>
              <p className="text-[#51564E] text-[15px] font-normal leading-6">
                Are you struggling to pass the initial resume screening process?
                Our Resume ATS Checker helps you create an ATS-friendly resume
                that’s optimized for today’s digital hiring tools. We ensure
                your resume contains the right keywords and structure to get you
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

      <div className="container mx-auto py-20 px-4 md:px-6 lg:px-8">
        <div className="flex md:flex-row flex-col md:justify-between gap-x-10 gap-y-10">
          <div className="flex flex-col flex-1">
            <Image className="w-full rounded-lg" src={person} alt="" />
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <div className="flex flex-col space-y-5 w-[100%]">
              <h2 className="text-[#141513] lg:text-[39px] text-[25px] font-bold leading-7 lg:leading-[45px]">
                Simplify Hiring <br className="hidden lg:block" />
                <span className="font-normal">with Smarter Tools</span>
              </h2>
              <p className="text-[#51564E] text-[15px] font-normal leading-6">
                Finding the perfect candidate doesn’t have to be time-consuming.
                Our tool helps HR professionals optimize their candidate search
                by matching the most relevant resumes with their job openings.
                Say goodbye to manual sorting and tedious keyword searches.
              </p>
              <a className="c-btn" href="#">
                CHECK ATS SCORE
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden  min-h-screen lg:flex items-center justify-center bg-gradient-to-b from-[#012F46] to-[#005260] mt-28">
        <div className="relative w-96 h-96 lg:w-[700px] lg:h-[600px] flex items-center justify-center">
          <div className="border-[5px] border-t-0 border-l-0 border-r-0 border-solid rounded-full p-8 border-green-400 relative before:content-[''] before:w-8 before:h-8 before:bg-white before:rounded-full before:absolute before:bottom-[65px] before:left-3/2">
            <div className="w-[380px] h-[380px] py-10 px-4 bg-white rounded-full flex flex-col justify-center items-center text-center shadow-lg relative z-10">
              <h2 className="text-[38px] text-[#009743]  font-bold leading-[45px] text-center">
                Custom <br /> Tailoring
              </h2>
              <p className="text-lg font-normal text-center text-gray-700 mt-2 px-4">
                Personalized resume writing, tailored to your experience,
                skills, and the specific job you’re targeting, rather than using
                generic templates.
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
                <h4 className="text-black text-2xl font-normal">
                  George Nelson
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-28 px-4 md:px-6 lg:px-8 lg:ml-20">
        <h1 className="text-[#141513] text-[25px] lg:text-[39px] font-bold leading-7 lg:leading-[45px] pb-5 lg:text-center text-left">
          In the spotlight
        </h1>

        <p className="text-gray-500 w-full text-lg mb-6 lg:w-[65%] lg:text-center mx-auto text-left">
          Stay updated with the latest trends, tips, and insights in business
          analytics. Explore our curated articles designed to empower your
          data-driven journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
          {articles.map((article, index) => (
            <div key={index} className="relative group">
              <div className="rounded-lg overflow-hidden mb-4 relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={250}
                  objectFit="cover"
                  className="w-full"
                />
                <Link
                  href={article.link}
                  className="absolute h-12 w-12 rounded-full top-[10px] right-[20px]  bg-[#fff] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <GrLinkUp className="h-6 w-6 rotate-45 text-gray-700" />
                </Link>
              </div>
              <p className="text-sm text-gray-500">{article.type}</p>
              <h3 className="text-lg font-semibold mt-2 group-hover:text-green-900">
                {article.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="md:bg-[#f6f6f6] py-0 md:py-16 flex justify-center items-center text-center flex-col">
        <h2 className="md:heading-text text-[2rem] pb-3 px-4">
          {" "}
          Doubts, <span className="font-bold">Get Cleared!</span>
        </h2>
        <div className="md:w-[70%] w-full bg-white md:shadow-md md:rounded-xl p-0  md:p-10 mt-5">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger
                className="gap-5"
                onClick={() => setIsOpen(!isOpen)}
              >
                What is Webflow and why is it the best website builder?
                {isOpen ? (
                  <Minus className="h-8 w-8 lg:h-5 lg:w-5" />
                ) : (
                  <Plus className="h-8 w-8 lg:h-5 lg:w-5" />
                )}
              </AccordionTrigger>
              <AccordionContent>
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices. Cursus sit amet dictum sit amet justo donec
                enim diam porttitor lacus luctus accumsan tortor posuere.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger
                className="gap-5"
                onClick={() => setIsOpen(!isOpen)}
              >
                What is your favorite template from BRIX Templates?
                {isOpen ? (
                  <Minus className="h-8 w-8 lg:h-5 lg:w-5" />
                ) : (
                  <Plus className="h-8 w-8 lg:h-5 lg:w-5" />
                )}
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger
                className="gap-5"
                onClick={() => setIsOpen(!isOpen)}
              >
                How do you clone a template from the Showcase?
                {isOpen ? (
                  <Minus className="h-8 w-8 lg:h-5 lg:w-5" />
                ) : (
                  <Plus className="h-8 w-8 lg:h-5 lg:w-5" />
                )}
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger
                className="gap-5"
                onClick={() => setIsOpen(!isOpen)}
              >
                Why is BRIX Templates the best Webflow agency?
                {isOpen ? (
                  <Minus className="h-8 w-8 lg:h-5 lg:w-5" />
                ) : (
                  <Plus className="h-8 w-8 lg:h-5 lg:w-5" />
                )}
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger
                className="gap-5"
                onClick={() => setIsOpen(!isOpen)}
              >
                When was Webflow officially launched?
                {isOpen ? (
                  <Minus className="h-8 w-8 lg:h-5 lg:w-5" />
                ) : (
                  <Plus className="h-8 w-8 lg:h-5 lg:w-5" />
                )}
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger
                className="gap-5"
                onClick={() => setIsOpen(!isOpen)}
              >
                How do you integrate Jetboost with Webflow?
                {isOpen ? (
                  <Minus className="h-8 w-8 lg:h-5 lg:w-5" />
                ) : (
                  <Plus className="h-8 w-8 lg:h-5 lg:w-5" />
                )}
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
