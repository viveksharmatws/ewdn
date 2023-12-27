import Breadcrumb from "@/components/Breadcrumb";

import { Input } from "@/components/ui/input";
import Security from "@/elements/securty";
import Link from "@/node_modules/next/link";

import PersonalAccordian from "@/components/PersonalAccordian";
const page = () => {
  return (
    <>
      <div className="flex-col pt-[5px] pb-[20px]">
        <div
          className="bg-cover min-h-[200px] bg-no-repeat bg-center mb-[40px]  flex items-center justify-center"
          style={{ backgroundImage: "url(/images/breadcrumb_img.jpg)" }}
        >
          <Breadcrumb Title="Home " />
        </div>
        <div className="flex max-lg:flex-col   max-lg:p-2  max-w-[1430px] mx-auto gap-[30px] w-full lg:px-[15px]">
          <PersonalAccordian />

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
                          className=" xl:w-[220px] w-full outline-none appearance-none border-b border-neutral-900 min-h-[36px]   max-md:flex-1"
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
              </div>
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
