"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bagwoman from "../public/images/womanwithbag.jpg";
import shoeswoman from "../public/images/womanwithshoes.jpg";
import tshirtwoman from "../public/images/womanwithtshirt.jpg";
import menglasses from "../public/images/meninglasses.jpg";
import yellowman from "../public/images/yellowmen.jpg";
import { button } from "./ui/button";

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
        showDots={false}
        keyBoardControl={true}
        className=" outer-block mx-auto max-w-[1430px] px-[15px]  flex gap-10 
        "
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        <div className="relative max-w-[330px] space-x-1 flex items-start mr-[10px] overflow-hidden ">
          <Image
            src={bagwoman}
            alt="images on the 4 categoires carousal"
            className="hover:scale-125 transition duration-1000"
          />
          <button className=" absolute  inset-x-[15%]  bottom-[10%] rounded-none  bg-white px-[15px] py-[7px] lg:px-[20px] lg:py-[15px] text-center xl:text-[22px]  font-medium leading-[26px] tracking-[0.3px] text-black hover:bg-black  transition duration-1000 hover:text-white ">
            <h3 className="line-clamp-1">Sneaker Shoes</h3>
          </button>
        </div>
        <div className=" relative max-w-[330px] space-x-1 flex items-start mr-[10px] overflow-hidden gap-10 ">
          <Image
            src={shoeswoman}
            alt="images on the 4 categoires carousal"
            className="hover:scale-125 transition duration-1000"
          />
          <button className=" absolute  inset-x-[15%]  bottom-[10%] rounded-none  bg-white px-[15px] py-[7px] lg:px-[20px] lg:py-[15px] text-center xl:text-[22px]  font-medium leading-[26px] tracking-[0.3px] text-black hover:bg-black hover:text-white  transition duration-1000">
            <h3 className="line-clamp-1">Woman Clothes</h3>
          </button>
        </div>
        <div className=" relative max-w-[330px] space-x-1 flex items-start mr-[10px] overflow-hidden gap-10">
          <Image
            src={tshirtwoman}
            alt="images on the 4 categoires carousal"
            className="hover:scale-125 transition duration-1000"
          />
          <button className=" absolute  inset-x-[15%]  bottom-[10%] rounded-none  bg-white px-[15px] py-[7px] lg:px-[20px] lg:py-[15px] text-center xl:text-[22px]  font-medium leading-[26px] tracking-[0.3px] text-black hover:bg-black hover:text-white transition duration-1000 ">
            <h3 className="line-clamp-1">Men Sunglasses</h3>
          </button>
        </div>
        <div className=" relative max-w-[330px] space-x-1 flex items-start mr-[10px] overflow-hidden gap-10">
          <Image
            src={menglasses}
            alt="images on the 4 categoires carousal"
            className="hover:scale-125 transition duration-1000"
          />
          <button className=" absolute  inset-x-[15%]  bottom-[10%] rounded-none  bg-white px-[15px] py-[7px] lg:px-[20px] lg:py-[15px] text-center xl:text-[22px]  font-medium leading-[26px] tracking-[0.3px] text-black hover:bg-black hover:text-white transition duration-1000 ">
            <h3 className="line-clamp-1">Men Black Watch</h3>
          </button>
        </div>
        <div className=" relative max-w-[330px] space-x-1 flex items-start mr-[10px] overflow-hidden gap-10">
          <Image
            src={yellowman}
            alt="images on the 4 categoires carousal max-sm:space-x-1 flex items-start "
            className="hover:scale-125 transition duration-1000"
          />
          <button className=" absolute  inset-x-[15%]  bottom-[10%] rounded-none  bg-white px-[15px] py-[7px] lg:px-[20px] lg:py-[15px] text-center xl:text-[22px]  font-medium leading-[26px] tracking-[0.3px] text-black hover:bg-black hover:text-white transition duration-1000 ">
            <h3 className="line-clamp-1">Sneaker Shoes</h3>
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default Fourcategories;
