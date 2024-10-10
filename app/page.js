import Banner from "@/components/Banner";
import Accordian from "@/components/Accordian";
import Success from "@/components/Success";
import Boost from "@/components/Boost";
import Smart from "@/components/Smart";
import Resume from "@/components/Resume";
import Spotlight from "@/components/Spotlight";
import CircularDesign from "@/components/CircularDesign";

export default function Home() {
  return (
    <>
      <Banner />
      <Success />
      <Boost />
      <Smart />
      <CircularDesign />
      <Resume />
      <Spotlight />
      <Accordian />
    </>
  );
}
