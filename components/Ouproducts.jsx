import Link from "@/node_modules/next/link";
import React from "react";

const Ouproducts = () => {
  return (
    <section className="mx-auto max-w-[1430px] pt-[60px] sm:pt-[90px] px-[15px]">
      <div className="  flex-row  justify-between flex items-center max-lg:flex-col ">
        <div className="text-[45px] font-normal leading-[47px]">
          <h1 className=" sm:text-[45px] text-[30px] sm:pb-5 pb-3">
            Our Products
          </h1>
        </div>
        <div className="max-md:flex-row flex  gap-5 ">
          <Link
            href="/products"
            className=" font-medium bg-[#F0F0F0]  sm:px-[39px]  py-[10px] px-[10px] sm:py-2 sm:text-[17px]   leading-[15px] sm:leading-[26px] "
          >
            Featured
          </Link>
          <Link
            href="/products"
            className=" font-medium  border border-[#F0F0F0] sm:px-[39px]  py-[10px] px-[10px] sm:py-2 sm:text-[17px]   sm:leading-[26px] leading-[15px] hover:bg-[#F0F0F0] "
          >
            New Arrivals
          </Link>
          <Link
            href="/products"
            className=" font-medium  border border-[#F0F0F0] sm:px-[39px] py-[10px] px-[10px]  sm:py-2 sm:text-[17px]  leading-[15px] sm:leading-[26px] hover:bg-[#F0F0F0] "
          >
            Best Sellers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ouproducts;
