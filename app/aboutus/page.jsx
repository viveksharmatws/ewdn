import Breadcrumbcomponent from "@/components/Breadcrumbcomponent";
import HorizontalProductCard from "@/elements/Horizontalproductcard";
import Image from "@/node_modules/next/image";
import React from "react";
import discountgirlbanner from "/public/images/discountleft.jpg";
import Breadcrumb from "@/components/Breadcrumb";
import Categoryfilter from "@/elements/Categoryfilter";

const Aboutus = () => {
  return (
    <div className="flex-col ">
      <div
        className="bg-cover min-h-[200px] bg-no-repeat bg-center mb-[40px]  flex items-center justify-center"
        style={{ backgroundImage: "url(/images/breadcrumb_img.jpg)" }}
      >
        <Breadcrumb Title="About  Us " />
      </div>
      <div className="   sm:flex  max-sm:flex-col w-full max-w-[1430px] sm:px-[10px] mx-auto sm:pt-[5px] mb-[60px]">
        <div className="  max-sm:order-2 px-[15px]">
          <div className="pr-[15px] sm:max-w-[250px] pl-[2px] pb-[20px] ">
            <div className="sm:min-w-[250px] ">
              <Image
                src={discountgirlbanner}
                alt="image discount "
                width={460}
                height={300}
                className="w-full  "
              />
            </div>
            <div className="mt-[25px] min-w-[258px] ">
              <HorizontalProductCard heading="New Products" />
              <HorizontalProductCard heading="New Products" />
              <HorizontalProductCard heading="New Products" />
            </div>
            <div>
              <Categoryfilter />
            </div>
          </div>
        </div>
        <div className=" max-sm:order-1  flex-col  sm:px-[15px] px-[10px]">
          <h1 className="text-[22px] capitalize font-semibold text-[#666666]">
            about Us
          </h1>
          <div className="grid mt-[10px] gap-10 pb-5   sm:items-start max-sm:pl-10 sm:place-items-center xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 max-w-[1200px] w-full">
            <div className="sm:max-w-[350px]">
              <div className="flex-col">
                <h2 className="pb-2 text-[18px] font-semibold  text-[#666666]">
                  Our company
                </h2>
                <h3 className="text-[18px] font-medium leading-[26px] tracking-[0.5px] pb-[10px]">
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididun
                </h3>
                <p className="leading-[26px] tracking-[0.5px ] text-[18px] font-normal mb-[10px]">
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse
                  ctetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="sm:max-w-[350px]">
              <div className="flex-col">
                <h2 className="pb-2 text-[18px] font-semibold  text-[#666666]">
                  Our team
                </h2>
                <h3 className="text-[18px] font-medium leading-[26px] tracking-[0.5px] pb-[10px]">
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididun
                </h3>
                <p className="leading-[26px] tracking-[0.5px ] text-[18px] font-normal mb-[10px]">
                  Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo.
                </p>
              </div>
            </div>
            <div className="sm:max-w-[350px]">
              <div className="flex-col">
                <h2 className="pb-2 text-[18px] font-semibold  text-[#666666]">
                  Testimonials
                </h2>
                <p className="leading-[26px] tracking-[0.5px ] text-[18px] font-normal mb-[10px]">
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididun
                </p>
                <p className="leading-[26px] tracking-[0.5px ] text-[18px] font-medium mb-[10px] text-black">
                  Lorem ipsum dolor sit
                </p>
                <p className="leading-[26px] tracking-[0.5px ] text-[18px] font-normal mb-[10px]">
                  “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Lorem ipsum
                  dolor sit amet conse ctetur adipisicing elit. Lorem ipsum
                  dolor sit amet conse ctetur adipisicing elit, sed do eiusmod.”
                </p>
                <p className="leading-[26px] tracking-[0.5px ] text-[18px] font-medium mb-[10px] text-black">
                  Lorem dolor sit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
