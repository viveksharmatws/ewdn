"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import homebanner from "../public/images/homebanner1.jpg";
import blackbanner from "../public/images/blackgirlhomebanner.jpg";
import { Button } from "./ui/button";

const Homebanner = () => {
  return (
    <>
      <Carousel>
        <div className="relative">
          <Image src={homebanner} alt="home banner girl" />

          <h4 className="absolute left-[80px]  top-[143px]  text-[18px] font-normal  tracking-[0.3px] xl:text-[22px]">
            100% Original Products
          </h4>
          <h1 className="absolute left-[80px]  top-[203px] text-left text-[40px] font-normal leading-[75px] xl:text-[68px]">
            Peach Color Up Neck <br /> Blouson Top
          </h1>
          <h3 className="absolute left-[80px]  top-[390px] text-left text-[20px] font-normal leading-[26px] tracking-[0.5px] xl:text-[25px]">
            This Month From{" "}
            <span className="text-[28px] font-semibold leading-[26px] tracking-[0.5px] text-red-600 xl:text-[34px]">
              $59.00
            </span>
          </h3>
          <Button className=" absolute left-[80px]  top-[478px] rounded-none  bg-black px-[34px] py-[25px] text-[14px]  font-medium leading-[22px]  tracking-[0.5px]  text-white hover:bg-white hover:text-black xl:text-[17px]">
            Shop Now
          </Button>
        </div>

        <div className="relative">
          <Image src={blackbanner} alt="home banner girl" />
          <h4 className="absolute left-[80px]  top-[143px]  font-normal tracking-[0.3px] xl:text-[22px]">
            100% Original Products
          </h4>
          <h1 className="absolute left-[80px]  top-[203px] text-left font-normal leading-[75px] xl:text-[68px]">
            Madame Women Black <br />
            Full Sleeve
          </h1>
          <h3 className="absolute left-[80px]  top-[390px] text-left font-normal leading-[26px] tracking-[0.5px] xl:text-[25px]">
            This Month From
            <span className="font-semibold leading-[26px] tracking-[0.5px] text-red-600 xl:text-[34px]">
              $69.00
            </span>
          </h3>
          <Button className=" absolute left-[80px] top-[478px] rounded-none bg-black  px-[34px] py-[25px]  font-medium  leading-[22px] tracking-[0.5px] text-white hover:bg-white  hover:text-black  xl:text-[17px] ">
            Shop Now
          </Button>
        </div>
      </Carousel>
    </>
  );
};

export default Homebanner;
