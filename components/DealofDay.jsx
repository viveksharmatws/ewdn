"use client";
import React from "react";
import jsonData from "../data.json";
import { IoStar } from "react-icons/io5";

import Image from "next/image";
import Link from "@/node_modules/next/link";

const DealofDay = () => {
  return (
    <section className="mx-auto max-w-[1430px] pt-[40px] sm:pt-[90px] px-[15px]">
      <h2 className="sm:text-[45px]  text-[30px] font-normal capitalize">
        Deal of the Day
      </h2>
      <div className="grid mt-[40px] grid-cols-2 place-content-start gap-[10px] sm:gap-[30px]  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5  ">
        {jsonData.slice(0, 5).map((product) => (
          <div key={product.index} className="">
            <div className="group relative duration-1000">
              <Image
                src={`/images${product.all_images[0]}`}
                alt="Image of person"
                width={256}
                height={300}
                className=" opacity-100 w-full"
              />
              {product.all_images.length > 1 && (
                <Image
                  src={`/images${product.all_images[1]}`}
                  alt="Image of person"
                  width={256}
                  height={300}
                  className="opacity-0 w-full duration-1000 group-hover:opacity-100 absolute left-0 top-0"
                />
              )}
              <div className=" absolute right-[10px] top-[-25px] flex flex-col gap-2 opacity-0 duration-500 group-hover:right-[10px] group-hover:translate-y-[35px]  group-hover:opacity-100 group-hover:transition">
                <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black  hover:bg-red-600 group-hover:items-center group-hover:justify-center  ">
                  <Image
                    src="../images/heart.svg"
                    alt=""
                    width={17}
                    height={17}
                    className="brightness-0 invert "
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
                <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full  bg-black hover:bg-red-600 group-hover:items-center  group-hover:justify-center ">
                  <Image
                    src="../images/addtoviewpage.svg"
                    alt=""
                    width={17}
                    height={17}
                    className="brightness-0 invert max-w-[17px] w-full"
                  />
                </div>
              </div>
              <div className="absolute left-[-2px] top-[8px] flex flex-col gap-[2px] ">
                <div className="opacity-0 duration-500 group-hover:opacity-100">
                  <div>
                    <span className="bg-green-500 px-[7px] py-[3px] text-[11px] font-medium capitalize leading-[15px] tracking-[0.5px] text-white duration-300 group-hover:translate-x-3  shadow-sm shadow-slate-950">
                      new
                    </span>
                  </div>
                </div>

                <div className="opacity-100">
                  <span className="bg-[#E22D2D] px-[7px] py-[3px] text-[11px] font-medium capitalize leading-[15px] tracking-[0.5px] text-white  duration-300 group-hover:translate-x-3 shadow-sm shadow-slate-500 ">
                    -12%
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-[10px]">
              <h3 className=" text-[16px] font-normal leading-[26px] tracking-[0.3px] text-[#666666]">
                {product.subheading}
              </h3>
              <Link
                href="/productdetailblog"
                className=" text-[18px] font-normal capitalize leading-[22px] tracking-[0.3px] line-clamp-1"
              >
                {product.heading}
              </Link>
              <div className="flex py-1">
                <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
              </div>
              <h3 className="mt-[4px] text-[20px] font-medium leading-[20px] text-[#ff0000]  ">
                ${product.price}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealofDay;
