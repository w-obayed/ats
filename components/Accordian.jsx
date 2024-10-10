"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { useState } from "react";

const Accordian = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
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
              mauris ultrices. Cursus sit amet dictum sit amet justo donec enim
              diam porttitor lacus luctus accumsan tortor posuere.
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
  );
};

export default Accordian;
