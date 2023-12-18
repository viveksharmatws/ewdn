"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const page = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);

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
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex-col">
        <div
          className="bg-cover min-h-[200px] bg-no-repeat bg-center mb-[40px]  flex items-center justify-center"
          style={{ backgroundImage: "url(/images/breadcrumb_img.jpg)" }}
        >
          <Breadcrumb Title="Create An Account " />
        </div>

        <div className="flex-col  w-full max-w-[1430px]  p-[15px] mx-auto  mb-20">
          <div className="sm:p-5 lg:p-[20px] p-[10px] border ">
            <div className="px-[10px] pt-[10px] pb-[20px]">
              <span className="text-[#666] sm:text-[18px] text-[16px]  leading-[26px] tracking-[0.5px]">
                Already have an account?
              </span>
              <span className="pl-1 capitalize underline text-black hover:underline-none hover:text-[#666] sm:text-[18px] text-[16px]  leading-[26px] tracking-[0.5px]">
                Log in instead!
              </span>
            </div>

            <div className=" max-md:flex-col flex  items-start mb-4">
              <p className=" w-full sm:w-1/4 sm:text-[18px] text-[16px]  sm:text-left md:text-right  font-normal pt-1 px-[16px] md:px-[5px] lg:px-4 mb-2 ">
                Social title
              </p>
              <div className="flex gap-4 lg:w-1/2 w-full  ">
                <div className="px-4 pt-2 flex gap-2 items-center w-full">
                  <label
                    html="1"
                    className="flex items-center gap-[10px] relative mb-2 mr-[10px] sm:text-[18px] text-[16px]  font-normal"
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
                    className="flex items-center gap-[10px] relative mb-2 mr-[10px] sm:text-[18px] text-[16px]  font-normal"
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
            <div className=" md:flex max-sm:flex-col items-start mb-4">
              <p className="  w-full sm:w-1/4 sm:text-[18px] text-[16px]  sm:text-left md:text-right  font-normal pt-1 px-[16px] md:px-[5px] lg:px-4 mb-2">
                First name
              </p>
              <div className="flex-col w-full lg:w-1/2 px-[15px]  ">
                <Input className="w-full max-sm:mb-4" />
                <p className="text-[#666666] sm:text-[18px] text-[16px]  leading-[26px] tracking-[0.5px]">
                  Only letters and the dot (.) character, followed by a space,
                  are allowed.
                </p>
              </div>
            </div>
            <div className=" md:flex max-sm:flex-col items-start mb-4">
              <p className=" w-full sm:w-1/4 sm:text-[18px] text-[16px]  sm:text-left md:text-right  font-normal pt-1 px-[16px] md:px-[5px] lg:px-4 mb-2 ">
                Last name
              </p>
              <div className="flex-col w-full lg:w-1/2 px-[15px] ">
                <Input className="w-full max-sm:mb-4" />
                <p className="text-[#666666]  sm:text-[18px] text-[16px]  leading-[26px] tracking-[0.5px]">
                  Only letters and the dot (.) character, followed by a space,
                  are allowed.
                </p>
              </div>
            </div>
            <div className="md:flex max-sm:flex-col items-start mb-4">
              <p className="w-full sm:w-1/4 sm:text-[18px] text-[16px]  sm:text-left md:text-right  font-normal pt-1 px-[16px] md:px-[5px] lg:px-4 mb-2  ">
                Email
              </p>
              <div className=" w-full lg:w-1/2 px-[15px] ">
                <Input className="w-full max-sm:mb-4" />
              </div>
            </div>

            <div className="md:flex max-sm:flex-col items-start mb-4 md:ml-[16px] lg:ml-0">
              <label
                htmlFor="pwd"
                className="w-full sm:w-1/4 sm:text-[18px] text-[16px]  sm:text-left md:text-right  font-normal pt-1 px-[16px] md:px-[5px] lg:px-4 mb-2  "
              >
                Password
              </label>
              <div className=" password_btn_hide flex lg:w-1/2 w-full px-[15px] ">
                <Input
                  className="w-full sm:text-[18px] text-[16px]  "
                  type={showPassword ? "text" : "password"}
                  id="pwd"
                />
                <Button
                  className="  lg:min-w-[120px] bg-black text-white sm:px-[34px] text-[16px] sm:text-[17px] py-[14px] "
                  onClick={handleTogglePassword}
                >
                  {showPassword ? "Hide " : "Show "}
                </Button>
              </div>
              <div className="pt-2">
                <span className=" sm:text-[18px] text-[16px]   capitalize text-[#666] max-md:pl-[15px] lg:md:pl-2  font-normal">
                  optional
                </span>
              </div>
            </div>
            <div className="md:flex max-sm:flex-col items-start mb-4 md:ml-[16px] lg:ml-0">
              <p className="w-full sm:w-1/4 sm:text-[18px] text-[16px]  sm:text-left md:text-right  font-normal pt-1 px-[16px] md:px-[5px] lg:px-4 mb-2">
                Birthdate
              </p>
              <div className=" flex-col w-full lg:w-1/2 px-[15px] ">
                <Input
                  className="w-full placeholder:text-[#666666] sm:text-[18px]   placeholder:sm:text-[18px] text-[16px]  placeholder:font-normal placeholder:uppercase  "
                  placeholder="DD/MM/YY"
                  type="Date"
                />
                <p className="sm:text-[18px] text-[16px]  text-[#666666]  font-normal ">
                  (E.g.: 05/31/1970)
                </p>
              </div>
              <div className="pt-2">
                <span className=" sm:text-[18px] text-[16px]   capitalize text-[#666] pl-[15px] max-md:pl-[15px] lg:md:pl-2  font-normal">
                  optional
                </span>
              </div>
            </div>
            <div className="lg:pl-[25%] ">
              <div className=" w-full lg:w-[800px] flex items-start mb-4 px-[16px] ">
                <div className="flex items-start  justify-center gap-2 mb-2">
                  <Checkbox
                    id="receive"
                    className="appearance-none  mt-[2px] border border-[#666666] rounded-md w-4 h-4 checked:bg-black checked:border-none"
                  />
                  <label
                    htmlFor="receive "
                    className=" sm:text-[18px] text-[16px]  leading-[26px] tracking-[0.5px]"
                  >
                    Receive offers from our partners
                  </label>
                </div>
              </div>
              <div className=" w-full lg:w-[800px] flex items-start mb-4 px-[16px]">
                <div className="flex-col items-start justify-center gap-2 mb-2">
                  <div className="flex gap-2">
                    <Checkbox
                      id="receive"
                      className="appearance-none border border-[#666666] rounded-md w-4 h-4 checked:bg-black checked:border-none mt-[2px]"
                    />
                    <label
                      htmlFor="receive  "
                      className="sm:text-[18px] text-[16px] "
                    >
                      Sign up for our newsletter
                    </label>
                  </div>
                  <p className=" italic sm:text-[18px] text-[16px]  text-[#222222]  leading-[26px] tracking-[0.5px]   font-normal pr-[15px]">
                    You may unsubscribe at any moment. For that purpose, please
                    find our contact info in the legal notice.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[800px] flex items-start mb-4 px-[16px]">
                <div className="flex-col items-start justify-center gap-2 mb-2">
                  <div className="flex gap-2">
                    <Checkbox
                      id="receive"
                      className="appearance-none border border-[#666666] rounded-md w-4 h-4 checked:bg-black checked:border-none mt-[2px]"
                    />
                    <label
                      htmlFor="receive  "
                      className="sm:text-[18px] text-[16px] "
                    >
                      Customer data privacy
                    </label>
                  </div>
                  <p className=" italic sm:text-[18px] text-[16px]   text-[#222222]  leading-[26px] tracking-[0.5px] font-normal pr-[15px]">
                    The personal data you provide is used to answer queries,
                    process orders or allow access to specific information. You
                    have the right to modify and delete all the personal
                    information found in the "My Account" page.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[800px] flex items-start mb-4 px-[16px]">
                <div className="flex items-start justify-center gap-2 mb-2">
                  <Checkbox
                    id="receive"
                    className="appearance-none border border-[#666666] mt-[2px] rounded-md w-4 h-4 checked:bg-black checked:border-none"
                  />
                  <label
                    htmlFor="receive   "
                    className="sm:text-[18px] text-[16px]  font-normal leading-[26px] tracking-[0.5px]"
                  >
                    I agree to the terms and conditions and the privacy policy
                  </label>
                </div>
              </div>
              <div className="lg:justify-end flex max-lg:justify-center max-lg:items-center mb-[10px]">
                <Button className=" sm:min-h-[50px] bg-[#222] text-white  px-[38px] sm:px-[34px] text-[17px] sm:py-[14px] ">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
