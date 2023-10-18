import Image from "next/image";
import React from "react";

import tshirtspec from "../public/images/tshirtspec.jpg";
import { Button } from "./ui/button";

const Tshirtspec = () => {
  return (
    <div className="relative mx-auto mt-2 max-w-[1400px]  pt-[75px]">
      <div className="overflow-hidden">
        <Image
          src={tshirtspec}
          alt="tshirt spec"
          className="transition duration-1000 hover:scale-110"
        />
      </div>
      <div className=" absolute  left-[100px] top-[25%]">
        <h4 className="text-[16px] font-normal leading-[26px] tracking-[0.3px]">
          100% Original Products
        </h4>
        <h2 className="pt-[17px] text-[58px] font-normal leading-[76px] tracking-[0.3px]">
          The All New Fashion <br /> Collection Items
        </h2>
        <div className="flex items-baseline gap-2 pb-[11px] pt-[9px]">
          <h3 className="pt-[30px] text-[25px] font-normal leading-[26px] tracking-[0.5px]">
            This Month From
          </h3>
          <span className="text-[28px] font-medium leading-[26px] tracking-[0.3px] text-red">
            $59.00
          </span>
        </div>
        <Button className="  mt-[40px] rounded-none  bg-black  px-[28px] py-[22px]  font-medium  leading-[22px] tracking-[0.5px] text-white hover:bg-white  hover:text-black  xl:text-[17px] ">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Tshirtspec;
