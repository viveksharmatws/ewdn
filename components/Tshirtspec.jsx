import Image from "next/image";
import React from "react";

import tshirtspec from "../public/images/tshirtspec.jpg";
import { Button } from "./ui/button";

const Tshirtspec = () => {
  return (
    <div className="relative mx-auto mt-2 w-full max-w-[1430px]  hidden md:block pt-[75px]   px-[10px]">
      <div className="relative leading-2 ">
        <div className="">
          <Image
            src={tshirtspec}
            alt="home banner girl"
            className="max-lg:blur-sm"
          />
        </div>

        <div className="absolute md:top-[7%]  lg:top-[20%] xl:top-[25%] left-[5%] text-left  ">
          <h4 className=" xl:top-[143px]  xl:text-[18px]  font-normal sm:text-[20px]  xl:mb-[2px] mb-[5px]   tracking-[0.3px] ">
            100% Original Products
          </h4>
          <h1 className=" max-w-full  sm:max-w-[400px] xl:max-w-[450px] xl:max-w-[600px] xl:top-[203px]  lg:text-[40px] sm:mb-[10px] font-normal sm:leading-[40px] xl:text-[40px]  leading-[20px]   sm:text-[25px]   xl:leading-[50px] xl:mb-[20px] text-[25px] mb-[10px] ">
            Madame Women Black Full Sleeve Women
          </h1>
          <h3 className="  sm:block hidden text-[12px] text-[#222]  sm:text-[22px] xl:text-[25px] font-normal leading-[26px] tracking-[0.5px] sm:pb-[5px] xl:mb-[20px] ">
            This Month From
            <span className=" text-[27px] font-semibold leading-[26px] tracking-[0.5px] text-[#ff0000]">
              $69.00
            </span>
          </h3>
          <button className="rounded-none bg-[#222]  max-sm:bg-transparent max-sm:underline leading-1 px-[10px] py-[10px] xl:px-[10px] xl:py-[10px] xl:py-[14px] xl:px-[34px] text-[12px] sm:text-[17px] font-medium leading-[10px] sm:leading-[22px]  sm:tracking-[0.5px] sm:text-white hover:text-black   max-sm:p-0 hover:bg-white xl:mt-0  xl:text-[17px] sm:mt-[2px]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tshirtspec;
