"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Link from "@/node_modules/next/link";
import { Check } from "lucide-react";
import { Trash } from "lucide-react";
import van from "@/public/images/van.jpg";
import Image from "@/node_modules/next/image";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import { Trigger } from "@/node_modules/@radix-ui/react-accordion/dist/index";

const PersonalAccordian = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);
  const [savedForm1, setSavedform1] = useState(false);
  const [savedForm2, setSavedform2] = useState(false);
  const [savedForm3, setSavedform3] = useState(false);
  const [savedForm4, setSavedform4] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };
  const handleCheckboxChange3 = () => {
    setIsChecked3(!isChecked3);
  };

  const handleCheckboxChange5 = () => {
    setIsChecked5(!isChecked5);
  };
  const handleCheckboxChange6 = () => {
    setIsChecked6(!isChecked6);
  };

  const handleCheckboxChange7 = () => {
    setIsChecked7(!isChecked7);
  };
  const handleCheckboxChange8 = () => {
    setIsChecked8(!isChecked8);
  };

  const formhandle1 = (event) => {
    event.preventDefault();
    setSavedform1(true);
  };

  const formhandle2 = (event) => {
    event.preventDefault();
    setSavedform2(true);
  };

  const formhandle3 = (event) => {
    event.preventDefault();
    setSavedform3(true);
  };

  const formhandle4 = (event) => {
    event.preventDefault();
    setSavedform4(true);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  return (
    <>
      <Accordion collapsible>
        <div className="flex-col max-w-[920px]  lg:min-w-[500px] lg:w-full xl:min-w-[750px] 2xl:min-w-[920px] w-full  ">
          <div className=" border-[1px] border-gray-200 mb-[12px]   ">
            <AccordionItem value="item-1">
              <div className="flex-col p-[15px]  border-gray-100 border-[1px]">
                <AccordionTrigger>
                  <div className=" text-black rounded-sm min-h-[32px] w-full   flex items-center justify-between ">
                    <div className="flex">
                      <span className=" text-[17px] flex items-center   font-medium min-h-[40px]  tracking-[0.5px] leading-[18.7px]  p-[10px]">
                        {savedForm1 ? <Check color="#4CBB6C" /> : " 1"}
                      </span>
                      <h2 className=" text-[17px] flex items-center  font-medium min-h-[40px]  tracking-[0.5px] leading-[18.7px] text- ml-1">
                        Personal information
                      </h2>
                    </div>
                    <div>
                      {savedForm1 && (
                        <div className="flex gap-2 items-center">
                          <Pencil size={15} />
                          <button>Edit</button>
                        </div>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent
                  className={savedForm1 ? "data-[state=closed]" : ""}
                >
                  <div className="lg:pt-[10px] lg:px-[37px]  px-[10px] py-[10px] flex-col ">
                    <Tabs defaultValue="Order as guest">
                      <div className=" flex my-7 items-center justify-center ">
                        <TabsList>
                          <TabsTrigger value="Order as guest">
                            <p className="text-[#666666] sm:ml-[16px] text-[18px] font-semibold tracking-[0.5px]">
                              Order As A Guest
                            </p>
                          </TabsTrigger>
                          <span className="text-[#666666] sm:ml-[16px] text-[18px] font-semibold tracking-[0.5px]">
                            |
                          </span>
                          <TabsTrigger value="Sign In">
                            <span className="text-[#666666]  sm:ml-[16px] text-[18px] font-semibold tracking-[0.5px]">
                              Sign In
                            </span>
                          </TabsTrigger>
                        </TabsList>
                      </div>
                      <TabsContent value="Order as guest">
                        <div className="sm:flex max-sm:flex-col  items-center mb-4">
                          <p className="  w-full sm:w-1/4 text-[18px]  font-normal pt-1 px-[16px] sm:px-[5px] xl:px-4 mb-2">
                            Social title
                          </p>
                          <div className="flex gap-4 xl:w-1/2 w-full  ">
                            <div className="px-4 pt-2 flex gap-2 items-center w-full">
                              <label
                                html="1"
                                className="flex items-center gap-[10px] relative mb-2 mr-[10px] text-[18px] font-normal"
                              >
                                <input
                                  type="checkbox"
                                  id="1"
                                  className="hidden"
                                  checked={isChecked}
                                  onChange={handleCheckboxChange}
                                />
                                <div
                                  className={`rounded-full w-5 h-5 border border-gray-500 flex items-center justify-center cursor-pointer ${
                                    isChecked ? "bg-white" : ""
                                  }`}
                                >
                                  {isChecked && (
                                    <div className="rounded-full w-3 h-3 bg-black"></div>
                                  )}
                                </div>
                                Mr.
                              </label>
                              <label
                                htmlFor="2"
                                className="flex items-center gap-[10px] relative mb-2 mr-[10px] text-[18px] font-normal"
                              >
                                <input
                                  type="checkbox"
                                  id="2"
                                  className="hidden"
                                  checked={isChecked2}
                                  onChange={handleCheckboxChange2}
                                />
                                <div
                                  className={`rounded-full w-5 h-5 border border-gray-500 flex items-center justify-center cursor-pointer ${
                                    isChecked2 ? "bg-white" : ""
                                  }`}
                                >
                                  {isChecked2 && (
                                    <div className="rounded-full w-3 h-3 bg-black"></div>
                                  )}
                                </div>
                                Mrs.
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className=" sm:flex max-sm:flex-col  items-start mb-4">
                          <p className="  w-full sm:w-1/4 text-[18px]  font-normal pt-1 px-[16px] sm:px-[5px] xl:px-4 mb-2 ">
                            First name
                          </p>
                          <div className="flex-col w-full xl:w-1/2 px-[15px]  ">
                            <Input className="w-full max-sm:mb-4" />
                            <p className="text-[#666666] text-[18px] leading-[26px] tracking-[0.5px]">
                              Only letters and the dot (.) character, followed
                              by a space, are allowed.
                            </p>
                          </div>
                        </div>
                        <div className=" sm:flex max-sm:flex-col items-start mb-4">
                          <p className=" w-full sm:w-1/4 text-[18px]  font-normal pt-1 px-[16px] sm:px-[5px] xl:px-4 mb-2 ">
                            Last name
                          </p>
                          <div className="flex-col w-full xl:w-1/2 px-[15px] ">
                            <Input className="w-full max-sm:mb-4" />
                            <p className="text-[#666666]  text-[18px] leading-[26px] tracking-[0.5px]">
                              Only letters and the dot (.) character, followed
                              by a space, are allowed.
                            </p>
                          </div>
                        </div>
                        <div className="sm:flex max-sm:flex-col items-start mb-4">
                          <p className=" w-full sm:w-1/4 text-[18px]  font-normal pt-1 px-[16px] sm:px-[5px] xl:px-4 mb-2 ">
                            Email
                          </p>
                          <div className=" w-full xl:w-1/2 px-[15px] ">
                            <Input className="w-full max-sm:mb-4" />
                          </div>
                        </div>
                        <div className="flex-col items-start  px-[16px] mb-4">
                          <div className="flex ">
                            <h2 className="text-[18px] font-bold text-[#666666]">
                              Create an account
                            </h2>
                            <span className="italic text-[18px] text-[#666] pl-[15px] sm:pl-2  font-normal">
                              (optional)
                            </span>
                          </div>
                          <p className="text-[18px] text-[#666]  font-normal">
                            And save time on your next order!
                          </p>
                        </div>
                        <div className="md:flex max-sm:flex-col  items-center mb-4">
                          <label
                            htmlFor="pwd"
                            className="w-full sm:w-1/4 text-[18px]  font-normal pt-1 px-[16px] sm:px-[5px] xl:px-4 mb-2 "
                          >
                            Password
                          </label>
                          <div className=" flex xl:w-1/2 w-full px-[15px] ">
                            <Input
                              className="w-full text-[18px] "
                              type="password"
                              id="pwd"
                            />

                            <Button
                              className="   bg-black text-white sm:px-[34px] text-[14px] sm:text-[17px] py-[14px] "
                              onClick={handleTogglePassword}
                            >
                              {showPassword ? "Hide " : "Show "}
                            </Button>
                          </div>
                          <div className="pt-2">
                            <span className=" text-[18px]  capitalize text-[#666] pl-[15px] md:pl-2  font-normal">
                              optional
                            </span>
                          </div>
                        </div>
                        <div className="md:flex max-sm:flex-col  items-center mb-4">
                          <p className="w-full sm:w-1/4 text-[18px]  font-normal pt-1 px-[16px]  mb-2 ">
                            Birthdate
                          </p>
                          <div className=" flex-col w-full xl:w-1/2 px-[15px] ">
                            <Input
                              className="w-full placeholder:text-[#666666] text-[18px] placeholder:text-[18px] placeholder:font-normal "
                              placeholder="DD/MM/YY"
                              type="Date"
                            />
                            <p className="text-[18px] text-[#666666]  font-normal ">
                              (E.g.: 05/31/1970)
                            </p>
                          </div>
                          <div className="self-start pt-2">
                            <span className=" text-[18px] capitalize text-[#666] pl-[15px] sm:pl-2 font-normal">
                              optional
                            </span>
                          </div>
                        </div>
                        <div className="xl:pl-[25%] ">
                          <div className=" w-full xl:w-[500px] flex items-start mb-4 px-[16px] ">
                            <div className="flex items-start  justify-center gap-2 mb-2">
                              <Checkbox
                                id="receive"
                                className="appearance-none  mt-[2px] border border-[#666666] rounded-md w-4 h-4 checked:bg-black checked:border-none"
                              />
                              <label
                                htmlFor="receive "
                                className=" text-[18px] leading-[26px] tracking-[0.5px]"
                              >
                                Receive offers from our partners
                              </label>
                            </div>
                          </div>
                          <div className=" w-full xl:w-[500px] flex items-start mb-4 px-[16px]">
                            <div className="flex-col items-start justify-center gap-2 mb-2">
                              <div className="flex gap-2">
                                <Checkbox
                                  id="receive"
                                  className="appearance-none border border-[#666666] rounded-md w-4 h-4 checked:bg-black checked:border-none mt-[2px]"
                                />
                                <label
                                  htmlFor="receive  "
                                  className="text-[18px]"
                                >
                                  Sign up for our newsletter
                                </label>
                              </div>
                              <p className=" italic text-[18px] text-[#222222]  leading-[26px] tracking-[0.5px]   font-normal pr-[15px]">
                                You may unsubscribe at any moment. For that
                                purpose, please find our contact info in the
                                legal notice.
                              </p>
                            </div>
                          </div>
                          <div className="w-full xl:w-[500px] flex items-start mb-4 px-[16px]">
                            <div className="flex-col items-start justify-center gap-2 mb-2">
                              <div className="flex gap-2">
                                <Checkbox
                                  id="receive"
                                  className="appearance-none border border-[#666666] rounded-md w-4 h-4 checked:bg-black checked:border-none mt-[2px]"
                                />
                                <label
                                  htmlFor="receive  "
                                  className="text-[18px]"
                                >
                                  Customer data privacy
                                </label>
                              </div>
                              <p className=" italic text-[18px] text-[#222222]  leading-[26px] tracking-[0.5px] font-normal pr-[15px]">
                                The personal data you provide is used to answer
                                queries, process orders or allow access to
                                specific information. You have the right to
                                modify and delete all the personal information
                                found in the "My Account" page.
                              </p>
                            </div>
                          </div>
                          <div className="w-full xl:w-[500px] flex items-start mb-4 px-[16px]">
                            <div className="flex items-start justify-center gap-2 mb-2">
                              <Checkbox
                                id="receive"
                                className="appearance-none border border-[#666666] mt-[2px] rounded-md w-4 h-4 checked:bg-black checked:border-none"
                              />
                              <label
                                htmlFor="receive   "
                                className="text-[18px] font-normal leading-[26px] tracking-[0.5px]"
                              >
                                I agree to the terms and conditions and the
                                privacy policy
                              </label>
                            </div>
                          </div>
                          <div className="lg:justify-end flex max-lg:justify-center max-lg:items-center">
                            <Button
                              className=" min-h-[50px] bg-black text-white px-[34px] text-[17px] py-[14px] "
                              onClick={formhandle1}
                            >
                              Continue
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="Sign In">
                        <div className="sm:flex max-sm:flex-col items-start mb-4">
                          <p className=" w-full sm:w-1/4 text-[18px]  font-normal pt-1 px-[16px] sm:px-[5px] xl:px-4 mb-2 ">
                            Email
                          </p>
                          <div className=" w-full xl:w-1/2 px-[15px] ">
                            <Input className="w-full max-sm:mb-4" />
                          </div>
                        </div>
                        <div className="sm:flex max-sm:flex-col items-start mb-4">
                          <label
                            htmlFor="password signin"
                            className=" w-full sm:w-1/4 text-[18px]  font-normal pt-1 px-[16px] sm:px-[5px] xl:px-4 mb-2 "
                          >
                            Password
                          </label>
                          <div className=" flex xl:w-1/2 w-full px-[15px] ">
                            <Input
                              className="w-full appearance-none"
                              id="password signin"
                              type="password"
                            />
                            <Button
                              className="   bg-black text-white sm:px-[34px] text-[14px] sm:text-[17px] py-[14px] "
                              onClick={handleTogglePassword1}
                            >
                              {showPassword1 ? "Hide " : "Show "}
                            </Button>
                          </div>
                        </div>
                        <div className=" w-full xl:w-1/2 max-xl:text-center xl:ml-[25%] ">
                          <Link
                            href="/forget"
                            className="text-[18px] font-normal  underline tracking-[0.5px] leading-[26px]"
                          >
                            Forgot your password?
                          </Link>
                        </div>
                        <div className="sm:justify-end justify-center flex  pt-2 ">
                          <Button
                            className=" min-h-[50px]   bg-black text-white px-[34px] text-[17px] py-[14px] "
                            onClick={formhandle1}
                          >
                            Continue
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>

            <AccordionItem value="2">
              <div className="flex-col w-full  rounded-sm   border-gray-100 border-b px-[15px] py-[10px] ">
                <AccordionTrigger
                  className={` ${!savedForm1 && "cursor-not-allowed"} `}
                >
                  <div className="text-black rounded-sm min-h-[32px] w-full   flex items-center justify-between">
                    <div className="flex">
                      <span className=" text-[17px] flex items-center   font-medium min-h-[40px]  tracking-[0.5px] leading-[18.7px]  p-[10px]">
                        {savedForm2 ? <Check color="#4CBB6C" /> : " 2"}
                      </span>
                      <h2 className=" text-[17px] flex items-center  font-medium min-h-[40px]  tracking-[0.5px] leading-[18.7px]  ml-1">
                        Addresses
                      </h2>
                    </div>
                    <div>
                      {savedForm2 && (
                        <div className="flex gap-2 items-center">
                          <Pencil size={15} />
                          <button>Edit</button>
                        </div>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                {savedForm1 && (
                  <AccordionContent>
                    <div className="flex-col px-[37px] py-[10px]    mb-[8px]">
                      <p className="text-[18px] text-[#666666] tracking-[0.5px] leading-[26px] mb-[15px]">
                        The selected address will be used both as your personal
                        address (for invoice) and as your delivery address
                      </p>
                      <div className="flex-col border-black border max-w-[400px] ">
                        <div className="p-5  border-b ">
                          <label
                            htmlFor="3"
                            className="  flex items-center gap-[10px] relative mb-2 mr-[10px] text-[16px] font-semibold leading-[24px]"
                          >
                            <input
                              type="checkbox"
                              className="hidden"
                              id="3"
                              checked={isChecked3}
                              onChange={handleCheckboxChange3}
                            />
                            <div
                              className={`rounded-full w-5 h-5 border border-gray-500 flex items-center justify-center cursor-pointer ${
                                isChecked3 ? "bg-white" : ""
                              }`}
                            >
                              {isChecked3 && (
                                <div className="rounded-full w-3 h-3 bg-black"></div>
                              )}
                            </div>
                            My Address
                          </label>
                          <div className="flex-col max-w-[180px] pl-[25px]">
                            <p className="w-full text-[16px] font-normal leading-[24px] tracking-[0.5px]">
                              yash rana asdasdasdasd asdasdas, Hawaii 15665
                              United States
                            </p>
                          </div>
                        </div>
                        <div className="px-10 py-5 justify-start items-center gap-10 flex">
                          <div className="flex gap-2 items-center">
                            <Pencil size={15} />
                            <button>Edit</button>
                          </div>
                          <div className="flex gap-2 items-center">
                            <Trash size={15} />
                            <button>Delete</button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-[20px] pb-[10px]">
                        <Link
                          href=""
                          className="hover:text-[#666666] text-[18px] leading-[26px] tracking-[0.5px] "
                        >
                          +add new address
                        </Link>
                      </div>
                      <p className=" text-[#666666] text-[18px] tracking-[0.5px] leading-[26px]">
                        Billing address differs from shipping address
                      </p>
                    </div>

                    <div className="px-[37px] py-[10px]">
                      <div className="lg:justify-end flex max-lg:justify-center max-lg:items-center">
                        <Button
                          className=" min-h-[50px] bg-black text-white px-[34px] text-[17px] py-[14px] "
                          onClick={formhandle2}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                )}
              </div>
            </AccordionItem>

            <AccordionItem value="item-3">
              <div className="  rounded-sm min-h-[32px] w-full border-gray-100 border-b p-[15px] flex-col items-center ">
                <AccordionTrigger
                  className={` ${!savedForm2 && "cursor-not-allowed"} `}
                >
                  <div className="text-black rounded-sm min-h-[32px] w-full   flex items-center justify-between">
                    <div className="flex">
                      <span
                        className=" text-[17px] flex items-center   font-medium min-h-[40px]  tracking-[0.5px] leading-[18.7px]
             text-[#000000] p-[10px]"
                      >
                        {savedForm3 ? <Check color="#4CBB6C" /> : " 3"}
                      </span>
                      <h2
                        className=" text-[17px] flex items-center  font-medium min-h-[40px]  tracking-[0.5px] leading-[18.7px]
              text-[#000000] ml-1"
                      >
                        Shipping Method
                      </h2>
                    </div>
                    <div>
                      {savedForm3 && (
                        <div className="flex gap-2 items-center">
                          <Pencil size={15} />
                          <button>Edit</button>
                        </div>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                {savedForm2 && (
                  <AccordionContent>
                    <div className="flex-col lg:px-[37px] py-[10px]  mb-[8px]">
                      <div className=" border px-[10px]  my-[25px] py-[20px] grid grid-cols-1 md:grid-cols-4 ">
                        <div className="flex md:gap-[50px] max-md:gap-[10px] items-center sm:items-center sm:justify-center max-sm:p-[20px] ">
                          <label
                            html="van"
                            className="flex items-center gap-[10px] relative mb-2 mr-[10px] text-[18px] font-normal"
                          >
                            <input
                              type="checkbox"
                              id="van"
                              className="hidden"
                              checked={isChecked5}
                              onChange={handleCheckboxChange5}
                            />
                            <div
                              className={`rounded-full w-5 h-5 border border-gray-500 flex items-center justify-center cursor-pointer ${
                                isChecked5 ? "bg-white" : ""
                              }`}
                            >
                              {isChecked5 && (
                                <div className="rounded-full w-3 h-3 bg-black"></div>
                              )}
                            </div>
                          </label>
                          <div>
                            <Image alt="van" src={van} />
                          </div>
                        </div>
                        <div className="sm:flex max-sm:flex-col justify-between items-center col-span-2">
                          <p className="text-[15px] font-normal px-[15px]">
                            My carrier
                          </p>
                          <p className="text-[18px]  font-medium leading-[26px]  px-[15px]">
                            Delivery next day!
                          </p>
                          <p className="text-[18px] font-normal leading-[26px]  px-[15px]">
                            $7.00
                          </p>
                        </div>
                      </div>
                      <div className="flex-col mb-2">
                        <p className="mb-2 text-[18px] font-normal leading-[26px] tracking-[0.5px]">
                          If you would like to add a comment about your order,
                          please write it in the field below.
                        </p>
                      </div>
                      <div className="mb-2">
                        <Input className="w-full max-sm:mb-6 p-6" />
                      </div>

                      <div className="lg:justify-end flex max-lg:justify-center max-lg:items-center">
                        <Button
                          className=" min-h-[50px] bg-black text-white px-[34px] text-[17px] py-[14px] "
                          onClick={formhandle3}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                )}
              </div>
            </AccordionItem>

            <AccordionItem value="item-4">
              <div className="  rounded-sm min-h-[32px] w-full border-gray-100 border-b p-[15px] flex-col items-center ">
                <AccordionTrigger
                  className={` ${!savedForm3 && "cursor-not-allowed"} `}
                >
                  <div className=" text-black rounded-sm min-h-[32px] w-full   flex items-center justify-between">
                    <div className="flex">
                      <span
                        className=" text-[17px] flex items-center   font-medium min-h-[40px]  tracking-[0.5px] leading-[18.7px] 
              text-[#000000] p-[10px]"
                      >
                        {savedForm4 ? <Check color="#4CBB6C" /> : " 4"}
                      </span>
                      <h2
                        className=" text-[17px] flex items-center  font-medium min-h-[40px]  tracking-[0.5px] leading-[18.7px] 
                text-[#000000] ml-1"
                      >
                        Payment
                      </h2>
                    </div>
                    <div>
                      {savedForm4 && (
                        <div className="flex gap-2 items-center">
                          <Pencil size={15} />
                          <button>Edit</button>
                        </div>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                {savedForm3 && (
                  <AccordionContent>
                    <div className="flex-col px-[37px] py-[10px]    mb-[8px] pt-4">
                      {/* this is something which is going to encompass the  checkboxes tripartite */}
                      <div className="flex-col ">
                        <div>
                          <label
                            htmlFor="Pay by bank wire"
                            className="flex items-center gap-[10px] relative mb-2 mr-[10px] text-[18px] font-normal"
                          >
                            <input
                              type="checkbox"
                              id="Pay by bank wire"
                              className="hidden"
                              checked={isChecked6}
                              onChange={handleCheckboxChange6}
                            />
                            <div
                              className={`rounded-full w-5 h-5 border border-gray-500 flex items-center justify-center cursor-pointer ${
                                isChecked6 ? "bg-white" : ""
                              }`}
                            >
                              {isChecked6 && (
                                <div className="rounded-full w-3 h-3 bg-black"></div>
                              )}
                            </div>
                            Pay by bank wire
                          </label>
                        </div>
                        <div className="pl-[46px] pt-[20px] text-[#666] mb-[10px] text-[14px] font-normal leading-[26px] tracking-[0.5px]">
                          <p>
                            Please transfer the invoice amount to our bank
                            account. You will receive our order confirmation by
                            email containing bank details and order number.
                          </p>
                        </div>
                        <div className="flex-col">
                          <div>
                            <label
                              htmlFor="Pay by Check"
                              className="flex items-center gap-[10px] relative mb-2 mr-[10px] text-[18px] font-normal"
                            >
                              <input
                                type="checkbox"
                                id="Pay by Check"
                                className="hidden"
                                checked={isChecked7}
                                onChange={handleCheckboxChange7}
                              />
                              <div
                                className={`rounded-full w-5 h-5 border border-gray-500 flex items-center justify-center cursor-pointer ${
                                  isChecked7 ? "bg-white" : ""
                                }`}
                              >
                                {isChecked7 && (
                                  <div className="rounded-full w-3 h-3 bg-black"></div>
                                )}
                              </div>
                              Pay by Check
                            </label>
                          </div>
                          <div className="pl-[46px] pt-[10px] text-[#666] mb-[10px] text-[14px] font-normal leading-[26px] tracking-[0.5px]">
                            <div className="max-w-[1400px] flex-col space-y-1">
                              <h3 className="pb-[12px] text-[18px] font-normal pt-2">
                                Please send us your check including the
                                following details:
                              </h3>

                              <div className=" w-full flex gap-1">
                                <div className="flex-1 py-[10px] px-[20px] bg-[#EBEBEB] text-[18px] font-normal">
                                  Amount
                                </div>
                                <div className="flex-1 py-[10px] px-[20px] bg-[#EBEBEB] text-[18px] font-normal">
                                  $58.04
                                </div>
                              </div>
                              <div className=" w-full flex gap-1">
                                <div className="flex-1 py-[10px] px-[20px] bg-[#F6F6F6] text-[18px] font-normal">
                                  Payee
                                </div>
                                <div className="flex-1 py-[10px] px-[20px] bg-[#F6F6F6] text-[18px] font-normal">
                                  .............
                                </div>
                              </div>
                              <div className=" w-full flex gap-1">
                                <div className="flex-1 py-[10px] px-[20px] bg-[#EBEBEB] text-[18px] font-normal">
                                  Send your check to this address
                                </div>
                                <div className="flex-1 py-[10px] px-[20px] bg-[#EBEBEB] text-[18px] font-normal">
                                  .............
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex-col">
                          <label
                            htmlFor="bank wire"
                            className="flex items-center gap-[10px] relative mb-2 mr-[10px] text-[18px] font-normal"
                          >
                            <input
                              type="checkbox"
                              id="bank wire"
                              className="hidden"
                              checked={isChecked8}
                              onChange={handleCheckboxChange8}
                            />
                            <div
                              className={`rounded-full w-5 h-5 border border-gray-500 flex items-center justify-center cursor-pointer ${
                                isChecked8 ? "bg-white" : ""
                              }`}
                            >
                              {isChecked8 && (
                                <div className="rounded-full w-3 h-3 bg-black"></div>
                              )}
                            </div>
                            Pay by Cash on Delivery
                          </label>
                          <div className="pl-[46px] pt-[10px] text-[#666] mb-[10px] text-[14px] font-normal leading-[26px] tracking-[0.5px]">
                            <p>You pay for the merchandise upon delivery</p>
                          </div>
                        </div>
                      </div>

                      <div className="py-4">
                        <div className="flex gap-2 mt-[10px]">
                          <Checkbox
                            id="receive"
                            className="appearance-none border border-[#666666] rounded-md w-4 h-4 checked:bg-black checked:border-none mt-[2px]"
                          />
                          <label
                            htmlFor="receive  "
                            className="text-[18px] leading-[26px]  tracking-[0.5px]"
                          >
                            I agree to the
                            <Link
                              href="/"
                              className="text-[18px] underline px-2"
                            >
                              terms of service
                            </Link>
                            and will adhere to them unconditionally.
                          </label>
                        </div>
                      </div>
                      <div className=" flex sm:justify-start  justify-center py-[10px]">
                        <Button
                          className=" min-h-[50px]  bg-black text-white px-[34px] text-[17px] py-[14px] "
                          onClick={formhandle4}
                        >
                          Place Order
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                )}
              </div>
            </AccordionItem>
          </div>
        </div>
      </Accordion>
    </>
  );
};

export default PersonalAccordian;
