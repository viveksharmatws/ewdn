import React from "react";
import { Button } from "./ui/button";

const PinkBanner = () => {
  return (
    <div
      className="flex flex-col items-center justify-center  bg-[#E3E6EB] bg-[url('/images/pinkbanner.jpg')]
    bg-center   bg-no-repeat py-[50px] sm:py-[80px] xl:py-[215px] lg:h-screen bg-fixed  bg-cover"
    >
      <p className="items-center justify-center  sm:text-[22px] font-normal leading-[26px] tracking-[0.3px]">
        New Clostich Collection
      </p>
      <div className="parallax-container ">
        <h2 className="mb-[40px] sm:mt-[25px] items-center parallax-image  justify-center  text-center sm:text-[68px] text-[32px] font-normal sm:leading-[80px]">
          Holiday Deals On <br /> Fashion Clothes
        </h2>
      </div>

      <Button className="  max-w-[200px] rounded-none  bg-black sm:px-[34px]  sm:py-[25px]   font-medium leading-[22px] tracking-[0.5px]  text-white  hover:bg-white hover:text-black xl:text-[17px]">
        View Collection
      </Button>
    </div>
  );
};

export default PinkBanner;
