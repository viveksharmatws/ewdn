import React from "react";
import { Button } from "./ui/button";

const PinkBanner = () => {
  return (
    <div
      className="flex flex-col items-center justify-center  bg-[#E3E6EB] bg-[url('/images/pinkbanner.jpg')]
    bg-center   bg-no-repeat py-[115px]"
    >
      <p className="items-center justify-center  text-[18px] font-normal leading-[26px] tracking-[0.3px]">
        New Clostich Collection
      </p>
      <h2 className="mb-[40px] mt-[25px] items-center justify-center  text-center text-[68px] font-normal leading-[80px]">
        Holiday Deals On <br /> Fashion Clothes
      </h2>
      <Button className="  max-w-[200px] rounded-none  bg-black px-[34px]  py-[25px]   font-medium leading-[22px] tracking-[0.5px]  text-white  hover:bg-white hover:text-black xl:text-[17px]">
        View Collection
      </Button>
    </div>
  );
};

export default PinkBanner;
