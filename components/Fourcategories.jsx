"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bagwoman from "../public/images/womanwithbag.jpg";
import shoeswoman from "../public/images/womanwithshoes.jpg";
import tshirtwoman from "../public/images/womanwithtshirt.jpg";
import menglasses from "../public/images/meninglasses.jpg";
import yellowman from "../public/images/yellowmen.jpg";
import { Button } from "./ui/button";

const Fourcategories = () => {
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
    <div>
      <Carousel
        responsive={responsive}
        showDots={true}
        keyBoardControl={true}
        className="mx-auto max-w-[1440px] 
        "
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        <div className="relative mx-4 max-w-[330px] ">
          <Image src={bagwoman} alt="images on the 4 categoires carousal" />
          <Button className=" absolute  inset-x-[15%]  bottom-[10%] rounded-none  bg-white px-[20px] py-[15px] text-center text-[22px] font-medium leading-[26px] tracking-[0.3px] text-black hover:bg-black hover:text-white">
            Sneaker Shoes
          </Button>
        </div>
        <div className=" relative mx-4 max-w-[330px]">
          <Image src={shoeswoman} alt="images on the 4 categoires carousal" />
          <Button className=" absolute  inset-x-[15%]  bottom-[10%] rounded-none  bg-white px-[20px] py-[15px] text-center text-[22px] font-medium leading-[26px] tracking-[0.3px] text-black hover:bg-black hover:text-white">
            Woman Clothes
          </Button>
        </div>
        <div className=" relative mx-4 max-w-[330px]">
          <Image src={tshirtwoman} alt="images on the 4 categoires carousal" />
          <Button className=" absolute  inset-x-[15%]  bottom-[10%] rounded-none  bg-white px-[20px] py-[15px] text-center text-[22px] font-medium leading-[26px] tracking-[0.3px] text-black hover:bg-black hover:text-white">
            Men Sunglasses
          </Button>
        </div>
        <div className=" relative mx-4 max-w-[330px]">
          <Image src={menglasses} alt="images on the 4 categoires carousal" />
          <Button className=" absolute  inset-x-[15%]  bottom-[10%] rounded-none  bg-white px-[20px] py-[15px] text-center text-[22px] font-medium leading-[26px] tracking-[0.3px] text-black hover:bg-black hover:text-white">
            Men Black Watch
          </Button>
        </div>
        <div className=" relative mx-4 max-w-[330px]">
          <Image src={yellowman} alt="images on the 4 categoires carousal" />
          <Button className=" absolute  inset-x-[15%]  bottom-[10%] rounded-none  bg-white px-[20px] py-[15px] text-center text-[22px] font-medium leading-[26px] tracking-[0.3px] text-black hover:bg-black hover:text-white">
            Sneaker Shoes
          </Button>
        </div>
      </Carousel>
    </div>
  );
};

export default Fourcategories;
