"use client";
import HorizontalProductCard from "@/elements/Horizontalproductcard";
import Image from "@/node_modules/next/image";
import React, { useState } from "react";
import discountgirlbanner from "/public/images/discountleft.jpg";
import Breadcrumb from "@/components/Breadcrumb";
import Categoryfilter from "@/elements/Categoryfilter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "@/node_modules/next/link";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex-col ">
      <div
        className="bg-cover min-h-[200px] bg-no-repeat bg-center mb-[40px]  flex items-center justify-center"
        style={{ backgroundImage: "url(/images/breadcrumb_img.jpg)" }}
      >
        <Breadcrumb Title="Login In To Your Account " />
      </div>
      <div className="flex max-sm:flex-col items-start justify-center w-full max-w-[1430px] sm:px-[10px] mx-auto sm:pt-[5px] pb-10">
        <div className=" max-lg:order-2 lg:block  hidden px-[15px]">
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
          <div className="  gap-10   sm:items-start  sm:place-items-center md:max-w-[1200px] w-full pb-[60px]">
            {/* here comes the form */}

            <div className="2xl:min-w-[1100px] lg:min-w-[700px] border-[#e5e5e5] border p-[15px] sm:p-[30px]">
              <div className="sm:flex max-sm:flex-col items-center mb-4">
                <p className=" w-full sm:w-1/4 text-[18px] text-left sm:text-right font-normal pt-1 px-[16px] sm:px-[5px] xl:px-4  ">
                  Email
                </p>
                <div className=" w-full xl:w-1/2 px-[15px] ">
                  <Input className="w-full max-sm:mb-4" />
                </div>
              </div>
              <div className="sm:flex max-sm:flex-col  items-center mb-4">
                <label
                  htmlFor="pwd"
                  className="w-full sm:w-1/4 text-[18px] text-right  font-normal pt-1 px-[16px] sm:px-[5px] xl:px-4  "
                >
                  Password
                </label>
                <div className=" flex xl:w-1/2 w-full px-[15px] ">
                  <Input
                    className="w-full text-[18px] "
                    type={showPassword ? "text" : "password"}
                    id="pwd"
                  />
                  <Button
                    className="  uppercase bg-[#222222] text-white sm:px-[12px] text-[11px] font-normal sm:text-[11px] py-[9px] "
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? "Hide " : "Show "}
                  </Button>
                </div>
              </div>
              <div className="sm:flex max-sm:flex-col items-center   ">
                <p className=" w-full  text-[18px]  font-normal  text-center pt-1 px-[16px] sm:px-[5px] xl:px-4 mb-4 ">
                  Forgot your password ?
                </p>
              </div>
              <div className="border-b p-1 ">
                <div className="flex items-center  justify-center mb-4   ">
                  <Button className=" sm:min-h-[50px]   bg-[#222222] text-centers text-white px-[34px] text-[15px] sm:text-[17px] py-[8px ] sm:py-[14px] ">
                    Sign-In
                  </Button>
                </div>
              </div>
              <Link
                href="register"
                className="flex items-center justify-center pt-[30px] gap-2 capitalize "
              >
                <p className="  text-[18px]  font-normal  text-center  ">
                  No account?
                </p>
                <p className="text-[18px]  font-normal  text-center ">
                  Create one here
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
