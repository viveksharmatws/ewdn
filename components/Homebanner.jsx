"use client";
import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import homebanner from "../public/images/homebanner1.jpg";
import blackbanner from "../public/images/blackgirlhomebanner.jpg";
import Link from "@/node_modules/next/link";

const Homebanner = () => {
  return (
    <div>
      <div className="home-carousal z-0  ">
        <Carousel
          showDots={true}
          interval="500"
          showArrows={true}
          showThumbs="false"
        >
          <div className="relative leading-2 ">
            <div>
              <Image src={homebanner} alt="home banner girl" className="z-0" />
            </div>

            <div className="absolute top-[20%] sm:top-[8%] md:top-[12%] xl:top-[25%] left-[5%] text-left  ">
              <h4 className=" xl:top-[143px]  md:text-[22px]  font-normal sm:text-[20px]  md:mb-[12px] mb-[5px]  text-[10px] tracking-[0.3px] ">
                100% Original Products
              </h4>
              <h1 className=" max-[400px]:text-[16px] max-[600px]:text-[20px] max-[400px]:leading-[20px] text-[22px] max-w-[170px] leading-[25px] sm:max-w-[350px] md:max-w-[450px] xl:max-w-[600px] md:top-[203px]  sm:text-[40px] xl:text-[65px] sm:mb-[10px] font-normal sm:leading-[40px]  md:leading-[45px]  xl:leading-[75px] md:mb-[20px] ">
                Peach Color Up Neck Blouson Top
              </h1>
              <h3 className="  sm:block hidden text-[12px] text-[#222] sm:text-[25px] font-normal leading-[26px] tracking-[0.5px] md:pb-[2px] md:mb-[20px] ">
                This Month From
                <span className=" text-[28px] px-2 font-semibold leading-[26px] tracking-[0.5px] text-[#ff0000]">
                  $59.00
                </span>
              </h3>
              <div className="sm:mt-10">
                <Link
                  href="/products"
                  className="rounded-none bg-[#222]  max-sm:bg-transparent max-sm:underline leading-1  py-[14px] px-[34px] text-[12px] sm:text-[17px] font-medium leading-[10px] sm:leading-[22px]  sm:tracking-[0.5px]   max-sm:p-0 hover:bg-white  xl:text-[17px] sm:mt-[20px] sm:text-white hover:text-black cursor-pointer  transition duration-1000"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="relative leading-2 ">
            <div>
              <Image src={blackbanner} alt="home banner girl" />
            </div>

            <div className="absolute top-[30%] sm:top-[5%] md:top-[12%] xl:top-[25%] left-[5%] text-left  ">
              <h4 className=" xl:top-[143px]  md:text-[22px]  font-normal sm:text-[20px]  md:mb-[12px] mb-[5px]  text-[10px] tracking-[0.3px] ">
                100% Original Products
              </h4>
              <h1 className=" max-[400px]:text-[16px] max-[400px]:leading-[20px] text-[22px] max-w-[170px] leading-[25px] sm:max-w-[350px] md:max-w-[450px] xl:max-w-[600px] md:top-[203px]  sm:text-[40px] xl:text-[65px] sm:mb-[10px] font-normal sm:leading-[40px]  md:leading-[45px]  xl:leading-[75px] md:mb-[20px] ">
                Madame Women Black Full Sleeve
              </h1>
              <h3 className="  sm:block hidden text-[12px] text-[#222] sm:text-[25px] font-normal leading-[26px] tracking-[0.5px] md:pb-[2px] md:mb-[20px] ">
                This Month From
                <span className=" text-[28px] font-semibold leading-[26px] tracking-[0.5px] text-[#ff0000]">
                  $69.00
                </span>
              </h3>
              <div className="sm:mt-10">
                <Link
                  href="/products"
                  className="rounded-none bg-[#222]  max-sm:bg-transparent max-sm:underline leading-1  py-[14px] px-[34px] text-[12px] sm:text-[17px] font-medium leading-[10px] sm:leading-[22px]  sm:tracking-[0.5px] sm:text-white hover:text-black   max-sm:p-0 hover:bg-white md:mt-0 cursor-pointer   xl:text-[17px] sm:mt-[20px] transition duration-1000 xl:mt-40"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Homebanner;
