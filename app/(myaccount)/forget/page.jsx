import HorizontalProductCard from "@/elements/Horizontalproductcard";
import Image from "@/node_modules/next/image";
import React from "react";
import discountgirlbanner from "/public/images/discountleft.jpg";
import Breadcrumb from "@/components/Breadcrumb";
import Categoryfilter from "@/elements/Categoryfilter";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "@/node_modules/next/link";
import { ChevronLeft } from "lucide-react";

const Login = () => {
  return (
    <div className="flex-col ">
      <div
        className="bg-cover min-h-[200px] bg-no-repeat bg-center mb-[40px]  flex items-center justify-center"
        style={{ backgroundImage: "url(/images/breadcrumb_img.jpg)" }}
      >
        <Breadcrumb Title="Forget Your password " />
      </div>
      <div className="flex max-sm:flex-col  w-full max-w-[1430px] sm:px-[10px] mx-auto sm:pt-[5px]">
        <div className=" max-lg:order-2 lg:block hidden  px-[15px]">
          <div className="pr-[15px] max-w-[250px] pl-[2px] pb-[20px] ">
            <div className="min-w-[250px] ">
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

        <div className="flex-col  max-lg:order-1 sm:px-[15px] px-[7px] w-full">
          <div className=" mt-[10px] gap-10 pb-5 flex-col sm:items-start   md:max-w-[1200px] w-full space-y-6">
            <div className="2xl:min-w-[1100px] lg:min-w-[700px] border-[#e5e5e5] border p-[15px] md:p-[30px] mb-[15px] flex-col">
              <p className="text-[16px] max-sm:p-4 sm:text-[18px] md:p-[16px] font-normal leading-[26px] tracking-[0.5px] capitalize text-[#666]">
                Please enter the email address you used to register. You will
                receive a temporary link to reset your password.
              </p>
              <div>
                <div className="sm:p-4 md:flex  justify-start max-sm:flex-col items-start mb-4 pt-10">
                  <p className=" w-full sm:w-1/4  xl:w-1/6 text-[18px] md:text-left   font-normal md:pt-1 px-[16px] sm:px-[5px] xl:px-1 mb-2 ">
                    Email Address
                  </p>
                  <div className=" w-full xl:w-1/2 max-xl:px-[15px] ">
                    <Input className="w-full max-sm:mb-4 " />
                  </div>
                </div>
                <div className="flex justify-end p-[15px]">
                  <Button className=" min-h-[50px] capitalize text-[15px] bg-black text-white px-[20px] sm:px-[34px] sm:text-[17px] py-[14px] mb-[25px] ">
                    Send reset link
                  </Button>
                </div>
              </div>
            </div>
            <Link href="/login" className="flex gap-2">
              <ChevronLeft />
              <p>Back to login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
