"use client";
import React from "react";
import jsonData from "../data.json";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

import Image from "next/image";

const DealofDay = () => {
  return (
    <section className="mx-auto max-w-[1400px] pt-[90px]">
      <h2 className="text-[45px] font-normal capitalize">Deal of the Day</h2>
      <div className="grid mt-[40px] grid-cols-1 items-start gap-10 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 ">
        {jsonData.slice(0, 5).map((product) => (
          <div key={product.index} className="">
            <div className="group  relative">
              <Image
                src={product.image}
                alt="Image of person"
                width={256}
                height={300}
                className="opacity-100"
              />
              <div className=" absolute right-[10px] top-[-25px] flex flex-col gap-2 opacity-0 duration-500 group-hover:right-[10px] group-hover:translate-y-[35px]  group-hover:opacity-100 group-hover:transition">
                <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black  hover:bg-red-600 group-hover:items-center group-hover:justify-center  ">
                  <Image
                    src="../images/heart.svg"
                    alt=""
                    width={17}
                    height={17}
                    className="brightness-0 invert "
                    onClick={() => {
                      alert("Added to wishlist");
                    }}
                  />
                </div>
                <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black  hover:bg-red-600 group-hover:items-center group-hover:justify-center  ">
                  <Image
                    src="../images/compare.svg"
                    alt=""
                    width={17}
                    height={17}
                    className="brightness-0 invert"
                  />
                </div>
                <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black  hover:bg-red-600 group-hover:items-center group-hover:justify-center  ">
                  <Image
                    src="../images/wide.svg"
                    alt=""
                    width={17}
                    height={17}
                    className="brightness-0 invert"
                  />
                </div>

                <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black  hover:bg-red-600 group-hover:items-center group-hover:justify-center  ">
                  <Image
                    src="../images/addtoviewpage.svg"
                    alt=""
                    width={17}
                    height={17}
                    className="brightness-0 invert"
                  />
                </div>
              </div>
              <div className="absolute left-[-2px] top-[8px] flex flex-col gap-[2px] opacity-0 duration-500 group-hover:opacity-100">
                <span className="bg-green-500 px-[7px] py-[3px] text-[11px] font-medium capitalize leading-[15px] tracking-[0.5px] text-white duration-300 group-hover:translate-x-3 ">
                  new
                </span>
                <span className="bg-[#E22D2D] px-[7px] py-[3px] text-[11px] font-medium capitalize leading-[15px] tracking-[0.5px] text-white duration-300 group-hover:translate-x-3 ">
                  -12%
                </span>
              </div>
            </div>

            <div>
              <h3 className=" text-[16px] font-normal leading-[26px] tracking-[0.3px] text-[#666666]">
                {product.subheading}
              </h3>
              <h2 className="max-w-[200px] text-[18px] font-normal capitalize leading-[22px] tracking-[0.3px]">
                {product.heading}
              </h2>
              <div>
                <StarIcon
                  color="yellow"
                  fontSize="large"
                  className="h-[23px] w-[17px]"
                />
                <StarIcon
                  color="yellow"
                  fontSize="large"
                  className="h-[23px] w-[17px]"
                />
                <StarIcon
                  color="yellow"
                  fontSize="large"
                  className="h-[23px] w-[17px]"
                />
                <StarIcon
                  color="yellow"
                  fontSize="large"
                  className="h-[23px] w-[17px]"
                />

                <StarHalfIcon
                  color="#FFD700"
                  fontSize="large"
                  className="h-[23px] w-[17px]"
                />
              </div>
              <h3 className="mt-[4px] text-[20px] font-medium leading-[20px] text-[#ff0000]  ">
                {product.price}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealofDay;
