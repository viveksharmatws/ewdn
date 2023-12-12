import Breadcrumb from "@/components/Breadcrumb";
import React from "react";
import drop from "/public/images/droplocation.svg";
import Image from "@/node_modules/next/image";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
const page = () => {
  return (
    <>
      <div className="flex-col ">
        <div
          className="bg-cover min-h-[200px] bg-no-repeat bg-center mb-[40px]  flex items-center justify-center"
          style={{ backgroundImage: "url(/images/breadcrumb_img.jpg)" }}
        >
          <Breadcrumb Title="Contact Us" />
        </div>
        <div className="lg:flex max-lg:flex-col pb-[20px] gap-5 w-full max-w-[1430px] sm:px-[10px] mx-auto sm:pt-[5px]">
          <div className="xl:max-w-[250px] px-[15px] flex-col shrink-0">
            <h1 className=" pb-[10px] text-[22px] font-medium">
              Store Information
            </h1>

            <div className="pt-2 pb-4   w-full">
              <li className="mb-[3px]  leading-[33px]  border-b flex items-start ">
                <Image
                  src={drop}
                  width={20}
                  height={20}
                  alt=""
                  className="mt-[8px] stroke-black"
                />

                <a href="#" className="text-[18px] ml-[10px] text-black">
                  Clostich - Apparel & Clothing Store
                  <p>507-Union Trade Centre </p>
                  <p>123456 France</p>
                </a>
              </li>
            </div>
            <div className="pt-2 pb-4 border-b ">
              <li className="mb-[3px]  leading-[33px]   items-start flex ">
                <Phone className="mt-1" />
                <div className="ml-[10px]">
                  <a
                    href="#"
                    className="text-[18px] leading-[26px] tracking-[0.5px]  text-black"
                  >
                    Call us:
                  </a>
                  <p className="leading-[26px] tracking-[0.5px]">
                    (+91) 9876-543-210
                  </p>
                </div>
              </li>
            </div>
            <div className="pt-2 pb-4  ">
              <li className="mb-[3px]  leading-[33px]   items-start flex ">
                <Mail className="mt-1" />
                <div className="ml-[10px]">
                  <a
                    href="#"
                    className="text-[18px] leading-[26px] tracking-[0.5px]  text-black"
                  >
                    Email us:
                  </a>
                  <p className="leading-[26px] tracking-[0.5px]">
                    sales@yourcompany.com
                  </p>
                </div>
              </li>
            </div>
          </div>
          <div className="   xl:max-w-[1000px] w-full lg:p-5   border mb-10">
            <div className="md:p-4 p-2">
              <div className="flex-col ">
                <div className="flex mb-4 max-sm:flex-col">
                  <div className="2xl:w-[260px] shrink-0 max-sm:pt-5 ">
                    <p
                      htmlFor=""
                      className="  w-full max-2xl:w-[116px] text-left px-[15px] pt-1 lg:px-4 mb-2 text-[18px] font-normal"
                    >
                      Subject
                    </p>
                  </div>
                  <div className=" px-4 w-full 2xl:min-w-[450px] ">
                    <Input className="w-full pt-2 pr-8  pb-2  pl-3 " />
                  </div>
                </div>
                <div className="flex mb-4 max-sm:flex-col">
                  <div className="2xl:w-[260px] shrink-0 max-sm:pt-3 ">
                    <p
                      htmlFor=""
                      className="  w-full max-2xl:w-[116px] text-left px-[15px] pt-1 lg:px-4 mb-2 text-[18px] font-normal"
                    >
                      Email address
                    </p>
                  </div>
                  <div className=" px-4 w-full 2xl:min-w-[450px] ">
                    <Input className="w-full pt-2 pr-8  pb-2  pl-3 " />
                  </div>
                </div>
                <div className="flex   max-sm:flex-col mb-4 flex-1 ">
                  <div className="2xl:w-[260px] flex  shrink-0">
                    <p
                      htmlFor=""
                      className="    w-full max-2xl:w-[116px] text-left px-[15px] pt-1 lg:px-4 mb-2 text-[18px] font-normal "
                    >
                      Message
                    </p>
                  </div>
                  <div className=" w-full px-4">
                    <Textarea
                      className="w-full placeholder:text-[#666] placeholder:text-[18px]"
                      placeholder="How can I help you ? "
                    />
                  </div>
                </div>
                <div className="sm:flex max-sm:flex-col items-start mb-4">
                  <div className="2xl:w-[260px] flex  shrink-0">
                    <p
                      htmlFor=""
                      className="  w-full max-2xl:w-[116px] text-left px-[15px] pt-1 lg:px-4 mb-2 text-[18px] font-normal "
                    >
                      Attachment
                    </p>
                  </div>
                  <div className=" flex min-h-[50px] items-start md:justify-start max-sm max-sm:flex-col  flex-1  max-sm:space-y-1">
                    <div className=" px-4 w-full 2xl:min-w-[450px] ">
                      <Input className="w-full pt-2 pr-8  pb-2  pl-3 " />
                    </div>
                  </div>
                </div>
                <div className=" 2xl:ml-[260px] lg:ml-[20px] w-full  flex items-start mb-4 px-[16px]">
                  <div className=" items-start justify-center gap-2 mb-2 flex px-[16px]">
                    <Checkbox
                      id="receive"
                      className="appearance-none border border-[#666666] mt-[2px] rounded-md w-4 h-4 checked:bg-black checked:border-none"
                    />
                    <label
                      htmlFor="receive   "
                      className="text-[18px] font-normal leading-[26px] tracking-[0.5px]"
                    >
                      I agree to the terms and conditions and the privacy policy
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-end shrink-0 mb-[10px] p-4">
                  <Button className=" max-sm:px-[16px]  bg-black text-white px-[34px] max-sm:min-w-[116px] 2xl:min-h-[50px] text-[17px] py-[14px] ">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
