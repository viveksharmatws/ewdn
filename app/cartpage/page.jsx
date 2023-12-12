import Breadcrumb from "@/components/Breadcrumb";
import Image from "@/node_modules/next/image";
import React from "react";
import { ChevronLeftCircle } from "lucide-react";

import { Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import Security from "@/elements/securty";
import Link from "@/node_modules/next/link";
const page = () => {
  return (
    <>
      <div className="flex-col pt-[10px] pb-[20px]">
        <div
          className="bg-cover min-h-[200px] bg-no-repeat bg-center mb-[40px]  flex items-center justify-center"
          style={{ backgroundImage: "url(/images/breadcrumb_img.jpg)" }}
        >
          <Breadcrumb Title="Shopping Cart " />
        </div>
        <div className="flex max-lg:flex-col   max-w-[1430px] mx-auto gap-[30px] w-full px-[15px]">
          <div className="flex-col max-w-[920px] w-full  ">
            <div className=" border border-gray-200 mb-[12px]   ">
              <div className="  rounded-sm min-h-[32px] w-full border-gray-100 border-b p-[16px]"></div>
              <div className="p-[5px] sm:p-[16px]">
                <div className="  grid sm:grid-cols-4   grid-cols-2 py-[10px] max-sm:space-y-10 max-sm:py-[16px]  items-start ">
                  <div className=" px-[15px] max-sm:px-[0px] shrink-0 max-sm:justify-self-center">
                    <Image
                      src="/images/b1.jpg"
                      width={90}
                      height={110}
                      className=""
                    />
                  </div>
                  <div className=" flex-col px-[5px] sm:px-[15px] max-sm:mt-0">
                    <h2 className="text-[18px] tracking-[0.5px] leading-[26px] font-normal max-sm:place-items-start">
                      Koton Polo T-shirt Gray
                    </h2>
                    <div className="space-x-2">
                      <span className="text-[15px]  leading-[24px] line-through text-[#ccc]">
                        $58
                      </span>
                      <span className="text-[16px] font-semibold leading-[24px]  text-[#ff0000]">
                        $86.00
                      </span>
                    </div>
                    <div className="space-x-[4px] mb-[3px]">
                      <span className="text-[18px]  leading-[24px]  text-[#222]">
                        Size:
                      </span>
                      <span className="text-[18px] leading-[24px] text-[#666666] ">
                        Small
                      </span>
                    </div>
                    <div className="space-x-[4px] mb-[3px]">
                      <span className="text-[18px]  leading-[24px]  text-[#222]">
                        Color:
                      </span>
                      <span className="text-[18px] leading-[24px] text-[#666666] ">
                        Orange
                      </span>
                    </div>
                  </div>
                  <div className=" px-[10px] sm:px-[15px] flex max-sm:justify-self-center items-center justify-center ">
                    <span className="pr-2 hidden max-sm:block text-[18px]">
                      Items
                    </span>
                    <Input
                      type="number"
                      placeholder="1"
                      className=" max-w-[78px]  appearance-none  text-[20px] outline-none text-black  min-h-[40px]"
                    />
                  </div>

                  <div className="flex justify-between">
                    <div className=" px-[5px] sm:px-[15px] float-left text-[18px] font-semibold text-[#ff0000]">
                      $89.00
                    </div>
                    <div
                      href=""
                      className=" px-[5px] sm:px-[15px] float-left cursor-pointer max-sm:pr-[25px] "
                    >
                      <Trash className="fill-black shrink-0" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/" className="flex gap-2 text-[18px] font-normal">
              <ChevronLeftCircle />
              Continue shopping
            </Link>
          </div>

          {/* second price checkout section */}
          <div className="flex-col">
            <div className=" md:min-w-[440px] border flex-col border-gray-200 mb-[25px] ">
              <div className="border-gray-100 border-b">
                <div className="p-[20px]  ">
                  <div className="flex  justify-between mt-1">
                    <div>
                      <p className="text-[18px] tracking-[0.5px] leading-[26px] font-normal">
                        4items
                      </p>
                    </div>
                    <div>
                      <p className="text-[18px] font-semibold text-[#ff0000]">
                        $344.00
                      </p>
                    </div>
                  </div>
                  <div className="flex  justify-between mt-1">
                    <div>
                      <p className="text-[18px] tracking-[0.5px] leading-[26px] font-normal">
                        Shipping
                      </p>
                    </div>
                    <div>
                      <p className="text-[18px] font-semibold text-[#ff0000]">
                        $7.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-[20px]  ">
                  <div className="flex  justify-between mt-1">
                    <div>
                      <p className="text-[18px] tracking-[0.5px] leading-[26px] font-normal">
                        Total (tax excl.)
                      </p>
                    </div>
                    <div>
                      <p className="text-[18px] font-semibold text-[#ff0000]">
                        $351.00
                      </p>
                    </div>
                  </div>
                  <div className="flex  justify-between mt-1">
                    <div>
                      <p className="text-[18px] tracking-[0.5px] leading-[26px] font-normal">
                        Total (tax incl.)
                      </p>
                    </div>
                    <div>
                      <p className="text-[18px] font-semibold text-[#ff0000]">
                        $351.00
                      </p>
                    </div>
                  </div>
                  <div className="flex  justify-between mt-1">
                    <div>
                      <p className="text-[18px] tracking-[0.5px] leading-[26px] font-normal">
                        Taxes
                      </p>
                    </div>
                    <div>
                      <p className="text-[18px] font-semibold text-[#ff0000]">
                        0.00
                      </p>
                    </div>
                  </div>
                  <p className="text-[18px] tracking-[0.5px] leading-[26px] font-normal mt-3 underline cursor-pointer ">
                    Have a promo code?
                  </p>
                </div>
                <div>
                  <div className="p-[20px] flex-col gap-2 items-center justify-start ">
                    <div className="flex gap-2">
                      <div className="">
                        <Input
                          placeholder="Enter Promo Code"
                          className=" max-w-[270px] outline-none appearance-none border-b border-neutral-900 min-h-[36px] md:w-[600px] max-sm:w-full  max-md:flex-1"
                        />
                      </div>
                      <div className="  flex   items-center justify-center  px-[15px] py-[8px] sm:px-[25px] sm:py-[5px] text-white bg-black hover:text-white min-h-[32px]">
                        <Link href="#" className="cursor-pointer">
                          Add
                        </Link>
                      </div>
                    </div>
                    <div className="mt-2 ">
                      <button className="text-[20px]">Close</button>
                    </div>
                    <div className="text-[18px]">
                      <p>Take advantage of our exclusive offers:</p>
                    </div>
                    <div className="pt-[5px]">
                      <button className="text-[18px] tracking-[0.5px] leading-[26px] font-normal mt-3 underline uppercase">
                        promo
                      </button>
                      <span className="ml-[5px] text-[#FF9852] text-[18px] font-normal">
                        - Promo Code
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-[20px] text-center">
                    <button
                      href="/checkout"
                      className="px-[34px] text-[18px] py-[14px] text-white bg-black mx-auto"
                    >
                      Proceed to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Security
                  Title="Security policy"
                  Para="(edit with the Customer Reassurance module)"
                  icon="Security"
                />
              </div>
              <div>
                <Security
                  Title="Delivery policy"
                  Para="(edit with the Customer Reassurance module)"
                  icon="Return"
                />
              </div>{" "}
              <div>
                <Security
                  Title="Return policy"
                  Para="(edit with the Customer Reassurance module)"
                  icon="Delivery"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
