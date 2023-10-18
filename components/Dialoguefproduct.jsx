"use client";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { MdContentCopy } from "react-icons/md";
import { Input } from "./ui/input";

const Dialogofproduct = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 8000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 640, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <div className="w-1/2 ">
        <div className="p-[15px]">
          <div>
            <Image
              src="/images/dialogueperson.jpg"
              alt="yellow man image"
              width={500}
              height={900}
            />
          </div>

          <Carousel
            responsive={responsive}
            showDots={false}
            keyBoardControl={true}
            className="py-[10px]"
          >
            <div className=" relative mx-1 max-w-[330px]">
              <Image
                src="/images/g3.jpg"
                alt="images on the 4 categoires carousal"
                width={180}
                height={150}
              />
            </div>
            <div className=" relative mx-1 max-w-[330px]">
              <Image
                src="/images/g6.jpg"
                alt="images on the 4 categoires carousal"
                width={180}
                height={150}
              />
            </div>
            <div className=" relative mx-1 max-w-[330px]">
              <Image
                src="/images/b1.jpg"
                alt="images on the 4 categoires carousal"
                width={180}
                height={150}
              />
            </div>
            <div className=" relative mx-1 max-w-[330px]">
              <Image
                src="/images/g3.jpg"
                alt="images on the 4 categoires carousal"
                width={180}
                height={150}
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="w-1/2  overflow-auto p-[15px]">
        <div>
          <div className=" mb-[7px] text-[28px] font-medium tracking-[0.5px]  text-black">
            Cherokee Boys Regular Shirt
          </div>
          <div className="mb-[15px] text-[18px] font-normal leading-[26px] text-[#666]">
            The sublimation textile printing process provides an exceptional
            color rendering and a color, guaranteed overtime praesentium
            voluptatum deleniti atque corrupti quos dolores.
          </div>
        </div>
        <div className="flex items-center justify-between border-t-[1px]  border-gray-300 pt-5">
          <div className="flex-col ">
            <h3 className="mb-[7px] text-[18px] font-normal leading-[26px] tracking-[0.5px]">
              Brand: Catwalk Clothing
            </h3>
            <h3 className="text-[18px] font-normal leading-[26px]  tracking-[0.5px]">
              Condition: Used
            </h3>
          </div>

          <div>
            <Image
              src="/images/prada.jpg"
              width={150}
              height={150}
              alt="prada"
              className="border-[1px] p-2"
            />
          </div>
        </div>
        <div className="mt-[8px] flex-col">
          <h3 className="mb-[7px] text-[18px] font-normal leading-[26px] tracking-[0.5px]">
            Reference: Product2
          </h3>
          <h3 className="mb-[8px] text-[18px] font-normal  leading-[26px] tracking-[0.5px] ">
            Available In Stock:{" "}
            <span className="text-[18px] font-medium leading-[26px] tracking-[0.5px]  text-[#4CBB6C]">
              {" "}
              82 Items
            </span>
          </h3>
          <h3 className="mb-[7px] text-[18px] font-normal leading-[26px] tracking-[0.5px]">
            Size: Small
          </h3>
        </div>

        <div className="flex justify-start">
          <div className="text-[45px] font-normal leading-[47px]"></div>
          <div className="flex gap-3">
            <button className="bg-black  px-[10px] py-[2px] text-[18px] leading-[26px] tracking-[1px] text-white ">
              Small
            </button>
            <button className=" border border-[#F0F0F0] px-[10px] py-[2px] text-[18px] leading-[26px] tracking-[1px] hover:bg-[#F0F0F0] ">
              Medium
            </button>
            <button className=" border border-[#F0F0F0] px-[10px] py-[2px] text-[18px] leading-[26px] tracking-[1px] hover:bg-[#F0F0F0] ">
              Large
            </button>
          </div>
        </div>
        <h3 className="mt-[7px] text-[18px] font-normal leading-[26px] tracking-[0.5px]">
          Color: Orange
        </h3>
        <div className="mt-2 flex gap-2">
          <div className="h-[30px] w-[30px] rounded-full bg-orange-500 outline-offset-2"></div>
          <div className="h-[30px] w-[30px] rounded-full bg-[#5d9cec] outline-offset-2"></div>
          <div className="h-[30px] w-[30px] rounded-full bg-yellow-500 outline-offset-2"></div>
        </div>
        <div className="mt-[10px] flex  items-baseline gap-2  text-[23px]">
          <span className="text-[23px] font-semibold text-[#666] line-through">
            $58.00
          </span>
          <span className="text-[23px] font-semibold text-red-600">$51.04</span>
          <span className="bg-red-600 px-[8px] text-[13px] font-medium text-white">
            SAVE 12%
          </span>
        </div>
        <div>
          <p className=" mt-[1px]  text-[15px] font-normal leading-[26px] text-[#666]">
            Free Shipping (Est. Delivery Time 2-3 Days)
          </p>
        </div>
        <div className="mt-[14px] flex  items-baseline">
          <div>
            <Input
              type="number"
              placeholder="1"
              className=" max-w-[100px] outline-none"
            />
          </div>
          <div className="  flex min-w-[200px] items-center justify-center bg-sky-500 px-[25px] py-[10px] text-white hover:bg-black hover:text-white">
            <h3>Add to Cart</h3>
          </div>
        </div>
        <div className="mt-[15px] flex gap-5">
          <div className="flex items-center justify-center gap-2">
            <Image alt="" src="/images/heart.svg" width={20} height={20} />
            <h3 className="text-[18px] font-normal capitalize leading-[22px] tracking-[0.5px] text-black">
              add to wishlist
            </h3>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <MdContentCopy size={20} />
            <h3 className="text-[18px]  font-normal capitalize leading-[22px] tracking-[0.5px] text-black">
              add to compare
            </h3>
          </div>
        </div>
        <div className="mt-[20px]">
          <span className="border-2 border-[#4cbb6c] bg-[#e9f9ee] px-[7px] py-[3px]  text-[15px] font-medium capitalize leading-[15px] tracking-[0.5px] text-[#4cbb6c] duration-300 group-hover:translate-x-3 ">
            In Stock
          </span>
        </div>
      </div>
    </>
  );
};

export default Dialogofproduct;
