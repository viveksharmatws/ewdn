import React from "react";
import discount from "../discount.json";
import Image from "next/image";
import { Button } from "./ui/button";

const Discountsection = () => {
  return (
    <div className="mx-auto max-w-[1400px] pt-[40px]  sm:pt-[90px]">
      <div className="mx-auto grid grid-cols-1 xl:place-items-start place-items-center gap-5 w-full  lg:grid-cols-2  xl:grid-cols-3">
        {discount.map((item) => (
          <div key={item.id} className="relative  ">
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt=" discount images"
                width={466}
                height={350}
                className=" w-full  transition duration-1000 hover:scale-125 max-[460px]:blur-sm"
              />
            </div>

            <div className=" absolute left-2 top-[40px] min-[380px]:top-[60px] min-[460px]:top-[100px] max-sm:pl-[10px]  sm:left-5 sm:top-10">
              <h4 className="text-[16px] font-normal sm:leading-[26px] tracking-[0.3px]">
                {item.discountRate}
              </h4>
              <h2 className="max-w-[230px] pt-[17px] sm:text-[30px] font-normal leading-[10px] sm:leading-[46px] tracking-[0.3px]">
                {item.productTitle}
              </h2>
              <div className="flex items-baseline gap-2 pb-[11px] pt-[9px]">
                <h3 className="text-[18px] font-medium leading-[26px] tracking-[0.5px]">
                  {item.start}
                </h3>
                <span className="text-[22px] font-medium leading-[26px] tracking-[0.3px] text-red-600">
                  {item.price}
                </span>
              </div>

              <Button className="pl-0 text-[17px] font-medium leading-[22px] tracking-[0.5px] underline">
                {item.button}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discountsection;
