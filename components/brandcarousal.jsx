"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import the Carousel component
import prada from "../public/images/prada.jpg";
import kenzo from "../public/images/kenzo.jpg";
import celine from "../public/images/celine.jpg";
import versace from "../public/images/versace.jpg";
import fendi from "../public/images/fendi.jpg";
import mui from "../public/images/miu.jpg";

const BrandCarousal = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 8000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 640, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="mx-auto max-w-[1400px] hidden md:block mt-[90px] border-t-2 px-[15px] pt-[75px]">
      <Carousel
        infinite={true}
        ssr={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        responsive={responsive}
        showDots={false}
        keyBoardControl={true}
        className="mx-auto max-w-[1430px] justify-center"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} // Pass an array here
      >
        <div>
          <Image src={prada} alt="image of brand" />
        </div>
        <div>
          <Image src={versace} alt="image of brand" />
        </div>
        <div>
          <Image src={celine} alt="image of brand" />
        </div>
        <div>
          <Image src={kenzo} alt="image of brand" />
        </div>
        <div>
          <Image src={fendi} alt="image of brand" />
        </div>
        <div>
          <Image src={mui} alt="image of brand" />
        </div>
        <div>
          <Image src={prada} alt="image of brand" />
        </div>
        <div>
          <Image src={versace} alt="image of brand" />
        </div>
      </Carousel>
    </div>
  );
};

export default BrandCarousal;
