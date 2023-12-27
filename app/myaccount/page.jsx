import HorizontalProductCard from "@/elements/Horizontalproductcard";
import Image from "@/node_modules/next/image";
import React from "react";
import discountgirlbanner from "/public/images/discountleft.jpg";
import Breadcrumb from "@/components/Breadcrumb";
import Categoryfilter from "@/elements/Categoryfilter";

import { MapPin } from "lucide-react";
import { CalendarDaysIcon } from "lucide-react";
import { ReceiptIcon } from "lucide-react";
import { TagsIcon } from "lucide-react";
import { Heart } from "lucide-react";
import { Megaphone } from "lucide-react";
import { Contact } from "lucide-react";
import { BadgeInfo } from "lucide-react";
import Link from "@/node_modules/next/link";

const page = () => {
  return (
    <div className="flex-col ">
      <div
        className="bg-cover min-h-[200px] bg-no-repeat bg-center mb-[40px]  flex items-center justify-center"
        style={{ backgroundImage: "url(/images/breadcrumb_img.jpg)" }}
      >
        <Breadcrumb Title="Login In To Your Account " />
      </div>
      <div className="flex max-sm:flex-col  w-full max-w-[1430px] sm:px-[10px] mx-auto sm:pt-[5px]">
        <div className=" max-sm:order-last lg:block   px-[10px] mb-20">
          <div className="  pr-[15px] max-w-[250px] pl-[2px] pb-[20px] ">
            <div className="flex-col gap-[10px] items-start">
              <div className="min-w-[250px] ">
                <Image
                  src={discountgirlbanner}
                  alt="image discount "
                  width={460}
                  height={300}
                  className="w-full  "
                />
              </div>
              <div className="sm:mt-[25px] min-w-[258px] px-2 ">
                <HorizontalProductCard heading="New Products" />
                <HorizontalProductCard heading="New Products" />
                <HorizontalProductCard heading="New Products" />
              </div>
            </div>
            <div>
              <Categoryfilter />
            </div>
          </div>
        </div>

        <div className="flex-col  sm:px-[15px] px-[10px] w-full">
          <div className="  gap-10 pb-5 flex-col sm:items-start   md:max-w-[1200px] w-full space-y-6">
            <div className="2xl:min-w-[1100px] lg:min-w-[700px] border-[#e5e5e5] border py-[17px] px-[20px] mb-[10px] hover:border-[#222222]">
              <div className="flex gap-2">
                <Link href="/login">
                  <BadgeInfo />
                </Link>
                <p className="text-[18px] font-normal leading-[26px] tracking-[0.5px] capitalize ">
                  Information
                </p>
              </div>
            </div>
            <div className="2xl:min-w-[1100px] lg:min-w-[700px] border-[#e5e5e5] border py-[17px] px-[20px] mb-[10px] hover:border-[#222222]">
              <div className="flex gap-2 cursor-pointer">
                <div>
                  <MapPin />
                </div>
                <p className="text-[18px] font-normal leading-[26px] tracking-[0.5px] capitalize ">
                  Address
                </p>
              </div>
            </div>
            <div className="2xl:min-w-[1100px] lg:min-w-[700px] border-[#e5e5e5] border py-[17px] px-[20px] mb-[10px] hover:border-[#222222]">
              <div className="flex gap-2 cursor-pointer">
                <div>
                  <CalendarDaysIcon />
                </div>
                <p className="text-[18px] font-normal leading-[26px] tracking-[0.5px] capitalize ">
                  order history and details
                </p>
              </div>
            </div>
            <div className="2xl:min-w-[1100px] lg:min-w-[700px] border-[#e5e5e5] border py-[17px] px-[20px] mb-[10px] hover:border-[#222222]">
              <div className="flex gap-2 cursor-pointer">
                <div>
                  <ReceiptIcon />
                </div>
                <p className="text-[18px] font-normal leading-[26px] tracking-[0.5px] capitalize ">
                  Credit slips
                </p>
              </div>
            </div>
            <div className="2xl:min-w-[1100px] lg:min-w-[700px] border-[#e5e5e5] border py-[17px] px-[20px] mb-[10px] hover:border-[#222222]">
              <div className="flex gap-2 cursor-pointer">
                <div>
                  <TagsIcon />
                </div>
                <p className="text-[18px] font-normal leading-[26px] tracking-[0.5px] capitalize ">
                  vouchers
                </p>
              </div>
            </div>
            <div className="2xl:min-w-[1100px] lg:min-w-[700px] border-[#e5e5e5] border py-[17px] px-[20px] mb-[10px] hover:border-[#222222]">
              <div className="flex gap-2 cursor-pointer">
                <div>
                  <Megaphone />
                </div>
                <p className="text-[18px] font-normal leading-[26px] tracking-[0.5px] capitalize ">
                  my alerts
                </p>
              </div>
            </div>
            <div className="2xl:min-w-[1100px] lg:min-w-[700px] border-[#e5e5e5] border py-[17px] px-[20px] mb-[10px] hover:border-[#222222]">
              <div className="flex gap-2 cursor-pointer">
                <div>
                  <Contact />
                </div>
                <p className="text-[18px] font-normal leading-[26px] tracking-[0.5px] capitalize ">
                  GDPR - Personal data
                </p>
              </div>
            </div>
            <div className="2xl:min-w-[1100px] lg:min-w-[700px] border-[#e5e5e5] border py-[17px] px-[20px] mb-[10px] hover:border-[#222222]">
              <div className="flex gap-2 cursor-pointer">
                <div>
                  <Heart />
                </div>
                <p className="text-[18px] font-normal leading-[26px] tracking-[0.5px] capitalize ">
                  My Wishlist
                </p>
              </div>
            </div>
            <div className="2xl:min-w-[1100px] lg:min-w-[700px]  py-[17px] mb-[10px]">
              <div className="flex gap-2">
                <button className=" min-h-[50px]   bg-[#222222] text-centers text-white px-[34px] text-[15px] sm:text-[17px] py-[18px ] sm:py-[14px] ">
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
