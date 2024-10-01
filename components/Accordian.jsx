import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordian = () => {
  return (
    <div className="bg-[#f6f6f6] py-16 flex justify-center items-center text-center flex-col">
      <h2 className="text-center text-5xl leading-[60px] font-normal pb-3">
        {" "}
        Doubts, <span className="font-bold">Get Cleared!</span>
      </h2>
      <div className="w-[800px] bg-white shadow-md rounded-xl p-10">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
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
