"use client";

import Breadcrumbcomponent from "@/components/Breadcrumbcomponent";
import Filterscomponent from "@/components/Filterscomponent";

import jsonData from "../../data.json";
import Image from "next/image";
import { LayoutList } from "lucide-react";
import discountgirlbanner from "/public/images/discountleft.jpg";

import { LayoutGrid } from "lucide-react";
import { IoStar } from "react-icons/io5";
import SliderComponent from "@/components/SliderComponent";
import HorizontalProductCard from "@/elements/Horizontalproductcard";
import Categoryfilter from "@/elements/Categoryfilter";
import LayoutGridfullwidth from "@/components/LayoutGridfullwidth";
import { useState } from "react";

import filters from "/filter.json";
import Link from "@/node_modules/next/link";

const page = () => {
  const [isGrid, setIsGrid] = useState(false);

  const handleLayoutChange = (isGridView) => {
    setIsGrid(isGridView);
  };
  const filter = filters.filters;

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
      <div className="flex-col ">
        <Breadcrumbcomponent />
        <div className="flex w-full max-w-[1430px] px-[10px] mx-auto pt-10">
          <div className=" lg:block hidden px-[15px] pb-[60px]">
            <div className="pr-[15px] max-w-[250px] pt-[5px] pl-[2px]">
              <h1 className="py-2 text-[22px] font-medium sm:block hidden">
                Filter By
              </h1>
              {filter.map((filter) => (
                <Filterscomponent
                  key={filter.filterType}
                  TitleofFilter={filter.filterType}
                  values={filter.data}
                  ColorFilter={filter.filterType === "Color"}
                />
              ))}
              <div className="py-5">
                <SliderComponent />
              </div>
              <div className="mt-10 min-w-[258px]">
                <HorizontalProductCard heading="New Products" />
                <HorizontalProductCard heading="New Products" />
                <HorizontalProductCard heading="New Products" />
              </div>

              <div className="pt-10 min-w-[250px] ">
                <Image
                  src={discountgirlbanner}
                  alt="image discount "
                  width={460}
                  height={300}
                  className="w-full"
                />
              </div>
              <div className="min-w-[258px]">
                <Categoryfilter />
              </div>
            </div>
          </div>
          <div className="flex-col  sm:px-[15px] px-[7px]">
            <div className="w-full max-w-[1100px] text-[18px] font-normal leading-[26px] tracking-[0.5px] mb-5">
              <p className="pb-[10px] border-b-[1px] border-[#e5e5e5] ">
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable that.
              </p>
            </div>
            <div className="md:justify-between  sm:items-center flex max-md:flex-col pb-5">
              <div className=" space-x-1 max-md:pb-[10px] flex items-center ">
                {isGrid ? (
                  <LayoutGrid
                    strokeWidth={1}
                    size={30}
                    color="#000000"
                    onClick={() => handleLayoutChange(true)}
                  />
                ) : (
                  <LayoutGrid
                    strokeWidth={1}
                    size={30}
                    color="#cac6c6"
                    onClick={() => handleLayoutChange(true)}
                    className="hover:stroke-black"
                  />
                )}
                {!isGrid ? (
                  <LayoutList
                    strokeWidth={1}
                    size={30}
                    color="#000000"
                    onClick={() => handleLayoutChange(false)}
                  />
                ) : (
                  <LayoutList
                    strokeWidth={1}
                    size={30}
                    color="#cac6c6"
                    onClick={() => handleLayoutChange(false)}
                    className="hover:stroke-black"
                  />
                )}

                <span className=" pl-2 text-[18px] font-normal leading-[26px] tracking-[0.5px]">
                  There are 18 products
                </span>
              </div>
              <div className="max-sm:pb-5 flex justify-center items-center">
                <span className="pr-[10px] inline-block whitespace-nowrap text-[18px]  font-normal leading-[26px] tracking-[0.5px] max-md:hidden">
                  Sort By:
                </span>
                <div className="flex gap-2 md:gap-5 w-full relative">
                  <select
                    className="bg-white py-2 px-3 flex-1 text-[18px] font-normal leading-[26px] tracking-[0.5px] border border-1  border-[#e5e5e5] focus:gray-500 outline-none  max-sm:max-w-[300px] max-sm:w-full w-[300px]  
                  min-h-[40px] cursor-pointer appearance-none"
                  >
                    <option className="w-full " value="">
                      Relevance
                    </option>
                    <option className="w-full" value="option1">
                      Option 1
                    </option>
                    <option className="w-full" value="option2">
                      Option 2
                    </option>
                    <option className="w-full text-red" value="option3">
                      165
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 ">
                    <svg
                      width="12"
                      height="6"
                      viewBox="0 0 121 67"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M60.2966 66.722C59.5767 66.7229 58.8636 66.5815 58.1984 66.306C57.5333 66.0304 56.9291 65.6262 56.4207 65.1164L1.60559 10.3014C1.09657 9.79245 0.692789 9.18818 0.417302 8.52314C0.141815 7.8581 1.59078e-05 7.1453 1.3402e-09 6.42546C-3.21231e-05 4.97167 0.577453 3.57741 1.60541 2.5494C2.63338 1.52139 4.02761 0.943849 5.4814 0.943817C6.93519 0.943785 8.32945 1.52127 9.35746 2.54923L60.2966 53.4882L111.236 2.54923C112.264 1.52127 113.658 0.943784 115.112 0.943817C116.566 0.943851 117.96 1.5214 118.988 2.54941C120.016 3.57742 120.593 4.97168 120.593 6.42547C120.593 7.87926 120.016 9.27349 118.988 10.3015L64.1726 65.1164C63.6641 65.6262 63.06 66.0304 62.3948 66.306C61.7297 66.5815 61.0166 66.7229 60.2966 66.722Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <button className="text-[17px] bg-black text-white font-medium leading-[22px] tracking-[0.5px] p-2 min-w-[140px] hidden max-md:block">
                    Filter
                  </button>
                </div>
              </div>
            </div>
            {isGrid ? (
              <div className="flex-col">
                <div className="grid mt-[10px] gap-[10px] sm:gap-[15px] md:gap-[30px] pb-5 grid-cols-2 items-start   md:grid-cols-3  xl:grid-cols-4 max-w-[1200px] w-full">
                  {jsonData.map((product) => (
                    <div key={product.index} className="w-full">
                      <div className="group relative duration-1000 overflow-hidden">
                        <Image
                          src={`/images${product.all_images[0]}`}
                          alt="Image of person"
                          width={286}
                          height={300}
                          className=" opacity-100 w-full 2xl:min-w-[286px] 2xl:min-h-[300px] "
                        />
                        <Image
                          src={`/images${product.all_images[1]}`}
                          alt="Image of person"
                          width={286}
                          height={300}
                          className=" opacity-0 w-full duration-1000 group-hover:opacity-100 absolute left-0 top-0  2xl:min-w-[286px] 2xl:min-h-[300px]"
                        />

                        <div className=" absolute right-[10px] top-[-25px] flex flex-col gap-2 opacity-0 duration-500 group-hover:right-[10px] group-hover:translate-y-[35px]  group-hover:opacity-100 group-hover:transition">
                          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black  hover:bg-red-600 group-hover:items-center group-hover:justify-center  ">
                            <Image
                              src="../images/heart.svg"
                              alt="heart"
                              width={17}
                              height={17}
                              className="brightness-0 invert "
                            />
                          </div>
                          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black  hover:bg-red-600 group-hover:items-center group-hover:justify-center  ">
                            <Image
                              src="../images/compare.svg"
                              alt="compare"
                              width={17}
                              height={17}
                              className="brightness-0 invert"
                            />
                          </div>

                          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full  bg-black hover:bg-red-600 group-hover:items-center  group-hover:justify-center ">
                            <Image
                              src="../images/wide.svg"
                              alt="wide"
                              width={17}
                              height={17}
                              className="brightness-0 invert"
                            />
                          </div>

                          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full  bg-black hover:bg-red-600 group-hover:items-center  group-hover:justify-center ">
                            <Image
                              src="../images/addtoviewpage.svg"
                              alt="addtoview"
                              width={17}
                              height={17}
                              className="brightness-0  max-w-[17px] w-full invert"
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
                        <Link
                          href={`/products/${product.id}`}
                          className="cursor-pointer"
                        >
                          <h3 className=" text-[16px] font-normal leading-[26px] tracking-[0.3px] text-[#666666]">
                            {product.subheading}
                          </h3>
                          <h2 className="max-w-[200px] text-[20px] font-normal capitalize leading-[22px] cursor-pointer tracking-[0.3px]">
                            {product.heading}
                          </h2>
                        </Link>
                        <div className="flex ">
                          <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                          <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                          <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                          <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                          <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                        </div>
                        <h3 className=" text-[20px] font-medium leading-[20px] mt-2 text-[#ff0000]  ">
                          ${product.price}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="pb-[80px]">
                <LayoutGridfullwidth />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
