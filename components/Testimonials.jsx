"use client";
import Quote from "../public/images/quote.svg";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../app/styles.css";
const Testimonials = () => {
  return (
    <div className="wrapper">
      <Carousel
        showIndicators="false"
        swipeable="true"
        showStatus="false"
        labels="false"
        infiniteLoop="true"
        autoPlay="true"
        autoPlaySpeed={100}
        wrap={true}
        interval={3000}
        showArrows="true"
        verticalSwipe="natural"
      >
        <div className="mx-auto flex max-w-[1400px] flex-col items-center  select-none px-[10px] sm:px-10  pb-[75px] pt-[40px] sm:pt-[90px]  ">
          <div className=" w-[50px] items-center justify-center ">
            <Image
              src={Quote}
              alt="quotes"
              width={5}
              height={5}
              className="stroke-[#ff0000]"
            />
          </div>
          <div className="select-none">
            <p className="mx-auto max-w-[1000px] py-[37px] text-center text-[18px]  font-normal leading-[26px] tracking-[0.3px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut
            </p>
            <div className="flex flex-col items-center justify-center">
              <a className=" pb-[5px] text-[20px] font-medium" href="">
                Mack Jeckno
              </a>
              <span className="text-[18px] font-normal">(Webdesigner)</span>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1400px] flex-col items-center  select-none px-[10px] sm:px-10  pb-[75px] pt-[40px] sm:pt-[90px]  ">
          <div className=" w-[50px] items-center justify-center ">
            <Image
              src={Quote}
              alt="quotes"
              width={5}
              height={5}
              className="stroke-[#ff0000]"
            />
          </div>
          <div className="select-none">
            <p className="mx-auto max-w-[1000px] py-[37px] text-center text-[18px]  font-normal leading-[26px] tracking-[0.3px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut
            </p>
            <div className="flex flex-col items-center justify-center">
              <a className=" pb-[5px] text-[20px] font-medium" href="">
                Mack Jeckno
              </a>
              <span className="text-[18px] font-normal">(Webdesigner)</span>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1400px] flex-col items-center  select-none px-[10px] sm:px-10  pb-[75px] pt-[40px] sm:pt-[90px]  ">
          <div className=" w-[50px] items-center justify-center ">
            <Image
              src={Quote}
              alt="quotes"
              width={5}
              height={5}
              className="stroke-[#ff0000]"
            />
          </div>
          <div className="select-none">
            <p className="mx-auto max-w-[1000px] py-[37px] text-center text-[18px]  font-normal leading-[26px] tracking-[0.3px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut
            </p>
            <div className="flex flex-col items-center justify-center">
              <a className=" pb-[5px] text-[20px] font-medium" href="">
                Mack Jeckno
              </a>
              <span className="text-[18px] font-normal">(Webdesigner)</span>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
