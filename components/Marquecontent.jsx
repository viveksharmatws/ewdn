import React from "react";
import { SunDim } from "lucide-react";

const Marquecontent = () => {
  return (
    <div className="relative flex overflow-x-hidden border-b-2 ">
      <div className="animate-marquee whitespace-nowrap py-[22px]  flex  gap-10 text-[20px] font-normal leading-[30px] tracking-[0.5px]">
        <span className="mx-12 ">20% OFF EVERYTHING FOR WOMAN</span>
        <div className="rounded-full min-h-[1px] bg-black min-w-[1px]"></div>
        <span className="mx-12 ">FIRST TIME FREE DELEVERY IN USA</span>
        <div className="rounded-full min-h-[1px] bg-black min-w-[1px]"></div>
        <span className="mx-12 ">FIRST TIME FREE DELEVERY IN US</span>
        <div className="rounded-full min-h-[1px] bg-black min-w-[1px]"></div>
        <span className="mx-12 ">SUMMER LOOKBOK FLASH SALE 70% OFF</span>
        <div className="rounded-full min-h-[1px] bg-black min-w-[1px]"></div>
        <span className="mx-12 ">20% OFF EVERYTHING FOR WOMAN</span>
      </div>
    </div>
  );
};

export default Marquecontent;
