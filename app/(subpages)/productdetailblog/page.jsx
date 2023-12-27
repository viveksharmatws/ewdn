import Breadcrumb from "@/components/Breadcrumb";
import Image from "@/node_modules/next/image";
import React from "react";
import discountgirlbanner from "/public/images/discountleft.jpg";
import HorizontalProductCard from "@/elements/Horizontalproductcard";
import Categoryfilter from "@/elements/Categoryfilter";
import blogguy from "@/public/images/blogguy.jpg";
import { List } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { MessagesSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "@/node_modules/next/link";
const page = () => {
  return (
    <>
      <div className="flex-col ">
        <div
          className="bg-cover min-h-[200px] bg-no-repeat bg-center mb-[40px]  flex items-center justify-center"
          style={{ backgroundImage: "url(/images/breadcrumb_img.jpg)" }}
        >
          <Breadcrumb Title="Home" />
        </div>
        <div className="max-w-[1430px]  w-full mx-auto ">
          <div className="flex  w-full sm:px-[10px] mx-auto sm:pt-[5px] ">
            <div className=" lg:block  lg:px-[15px]">
              <div className="pr-[15px] max-w-[250px] pl-[2px] pb-[20px] hidden md:block">
                <div className="min-w-[250px] ">
                  <Image
                    src={discountgirlbanner}
                    alt="image discount "
                    width={460}
                    height={300}
                    className="w-full  "
                  />
                </div>
                <div className="mt-[25px] min-w-[258px] border-b ">
                  <h2 className="mb-[20px] text-[22px] font-medium leading-[22px] tracking-[0.5px] capitalize">
                    new products
                  </h2>
                  <div className="mb-10">
                    <HorizontalProductCard heading="New Products" />
                    <HorizontalProductCard heading="New Products" />
                    <HorizontalProductCard heading="New Products" />
                    <div className="flex justify-end">
                      <Link
                        href="/latestproducts"
                        className=" text-[18px] leading-[26px] tracking-[0.5px] font-medium capitalize underline"
                      >
                        All new products
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <Categoryfilter />
                </div>
              </div>
            </div>
            <div className="flex-col  px-[10px] sm:px-[15px]  w-full">
              <div>
                <h1 className="text-[26px] capitalize font-medium text-black ">
                  Nullam ullamcorper ornare molestie
                </h1>
              </div>
              <div className=" mt-[10px] pb-5  max-w-[1200px] w-full relative">
                <Image
                  src={blogguy}
                  className="w-full z-0"
                  width={500}
                  height={500}
                  alt="buy bag"
                />
                <div className="bg-black opacity-60 sm:min-h-[32px] absolute bottom-5 px-[10px]  sm:py-[10px] sm:px-[20px] w-full  text-white ">
                  <div className="sm:min-h-[32px]  max-lg:flex-col lg:flex z-20 ">
                    <div className="xl:flex">
                      <div className="flex xl:items-center col-span-1 xl:justify-center pr-4 ">
                        <p className="sm:text-[18px] text-[14px] leading-[32px] traking-[0.5px] capitalize text-white pr-4">
                          posted by:
                        </p>
                        <p className="sm:text-[18px] text-[14px] leading-[32px] tracking-[0.5px] capitalize text-white pr-4">
                          admin admin
                        </p>
                      </div>
                      <div className="flex xl:items-center col-span-1 xl:justify-center md:pr-4 gap-2 ">
                        <List />
                        <p className="sm:text-[18px] text-[14px] leading-[32px] tracking-[0.5px] capitalize text-white pr-4">
                          in shopping
                        </p>
                      </div>
                    </div>
                    <div className="xl:flex">
                      <div className="flex xl:items-center xl:justify-center pr-4 gap-2 ">
                        <CalendarDays />
                        <p className="sm:text-[18px] text-[14px] leading-[32px] tracking-[0.5px] capitalize text-white ">
                          on:
                        </p>
                        <span className="sm:text-[18px] text-[14px] leading-[32px] tracking-[0.5px] capitalize text-white pr-4">
                          September Tuesday, 5, 2023
                        </span>
                      </div>
                      <div className="flex items-center xl:justify-center pr-4 gap-2">
                        <MessagesSquare />
                        <p className="sm:text-[18px] text-[14px] leading-[32px] tracking-[0.5px] capitalize text-white ">
                          comment:
                        </p>
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[60px] text-justify">
                <p className="text-[18px]  leading-[26px] tracking-[0.5px]  text-[#666] mb-[10px] ">
                  Suspendisse posuere, diam in bibendum lobortis, turpis ipsum
                  aliquam risus, sit amet dictum ligula lorem non nisl Urna
                  pretium elit mauris cursus Curabitur at elit Vestibulum
                </p>
                <p className="text-[18px]  leading-[26px] tracking-[0.5px]  text-[#666] mb-[10px] ">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quas.
                </p>
                <p className="text-[18px]  leading-[26px] tracking-[0.5px]  text-[#666] mb-[10px] ">
                  Suspendisse posuere, diam in bibendum lobortis, turpis ipsum
                  aliquam risus, sit amet dictum ligula lorem non nisl. Ut vitae
                  nibh id massa vulputate euismod ut quis justo. Ut bibendum sem
                  at massa lacinia, eget elementum ante consectetur. Nulla id
                  pharetra dui, at rhoncus urna. Maecenas non porttitor purus.
                  Nullam ullamcorper nisl quis ornare molestie.
                </p>
                <p className="text-[18px]  leading-[26px] tracking-[0.5px]  text-[#666] mb-[10px] ">
                  Etiam eget erat est. Phasellus elit justo, mattis non lorem
                  non, aliquam aliquam ps. Sed fermentum consectetur magna, eget
                  semper ante. Aliquam scelerisque justo velit. Fusce cursus
                  blandit dolor, in sodales urna vulputate lobortis. Nulla ut
                  tellus turpis. Nullam lacus sem, volutpat id odio sed, cursus
                  tristique eros. Duis at pellentesque magna. Donec magna nisi,
                  vulputate ac nulla eu, ultricies tincidunt tellus. Nunc
                  tincidunt sem urna, nec venenatis libero vehicula ut.
                </p>
                <p className="text-[18px]  leading-[26px] tracking-[0.5px]  text-[#666] mb-[10px] ">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Curabitur faucibus aliquam
                  pulvinar. Vivamus mattis volutpat erat, et congue nisi semper
                  quis. Cras vehicula dignissim libero in elementum. Mauris sit
                  amet dolor justo. Morbi consequat velit vel est fermentum
                  euismod. Curabitur in magna augue.
                </p>
              </div>
              <div className="flex justify-between mb-10">
                <div className="mb-[10px]">
                  <h2 className="text-[20px]  font-medium leading-[26px] tracking-[0.5px] capitalize ">
                    like this
                  </h2>
                </div>
                <div className="flex items-center justify-center gap-5 mb-[10px]">
                  <h2 className="text-[20px]  font-medium leading-[26px] capitalize tracking-[0.5px]">
                    tags:
                  </h2>
                  <p className="text-[18px]  font-normal leading-[26px] tracking-[0.5px]">
                    opencart theme
                  </p>
                </div>
              </div>
              <div className="max-lg:flex-col flex    max-sm:space-y-5  w-full  mb-[30px]">
                <div className="w-full mb-5">
                  <h2 className="mb-[20px] text-[20px] font-medium leading-[22px] tracking-[0.5px]">
                    In Same Category
                  </h2>
                  <ul className="text-[18px] list-inside   font-normal leading-[26px] tracking-[0.5px] text-[#222] list-disc ">
                    <li className="w-full py-[3px]">
                      Turpis at eleifend Aenean porta
                    </li>
                    <li className="w-full py-[3px]">
                      Morbi condimentum molestie Nam
                    </li>
                    <li className="w-full py-[3px]">
                      Curabitur at elit Vestibulum
                    </li>
                    <li className="w-full py-[3px]">
                      Urna pretium elit mauris cursus
                    </li>
                    <li className="w-full py-[3px]">
                      Ipsum cursus vestibulum Vivamus
                    </li>
                  </ul>
                </div>

                <div className="w-full py-[3px] ">
                  <h2 className="mb-[20px] text-[20px] font-medium leading-[22px] tracking-[0.5px]">
                    Related by Category
                  </h2>

                  <ul className="text-[18px] list-inside   font-normal leading-[26px] tracking-[0.5px] text-[#222] list-disc ">
                    <li className="w-full py-[3px] ">
                      Nullam ullamcorper ornare molestie
                    </li>
                    <li className="w-full py-[3px] ">
                      Turpis at eleifend Aenean porta
                    </li>
                    <li className="w-full py-[3px] ">
                      Morbi condimentum molestie Nam
                    </li>
                    <li className="w-full py-[3px] ">
                      Curabitur at elit Vestibulum
                    </li>
                    <li className="w-full py-[3px] ">
                      Ipsum cursus vestibulum Vivamus
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-col">
                <div className="mb-[15px]">
                  <h2 className="pb-[15px] text-[20px] font-medium  leading-[22px] tracking-[0.5px] text-black capitalize mb-[15px]">
                    comments
                  </h2>
                  <h2 className="pb-[15px] text-[20px] font-medium  leading-[22px] tracking-[0.5px] text-black capitalize mb-[15px]">
                    Leave your comment
                  </h2>
                </div>
                <div>
                  <div className="   xl:max-w-[1000px] w-full    mb-10">
                    <div>
                      <div className="flex-col ">
                        <div className="flex mb-4 max-sm:flex-col mt-5">
                          <div className="2xl:w-[260px] shrink-0 max-sm:pt-5">
                            <p
                              htmlFor=""
                              className="  w-full max-2xl:min-w-[116px] xl:text-right text-left px-[15px] pt-1 lg:px-4 mb-2 text-[18px] font-normal capitalize text-[#222222]"
                            >
                              Full name
                            </p>
                          </div>
                          <div className=" px-4 w-full 2xl:min-w-[450px] focus:outline-none ">
                            <Input
                              className="w-full pt-2 pr-8  pb-2   focus:outline-none  pl-3 placeholder:text-[#666] placeholder:text-[18px] "
                              placeholder="Enter your full name "
                            />
                          </div>
                        </div>
                        <div className="flex mb-4 max-sm:flex-col">
                          <div className="2xl:w-[260px] shrink-0 max-sm:pt-5 ">
                            <p
                              htmlFor=""
                              className="  w-full max-2xl:w-[116px] xl:text-right text-left px-[15px] pt-1 lg:px-4 mb-2 text-[18px] font-normal text-[#222222]"
                            >
                              Email
                            </p>
                          </div>
                          <div className=" px-4 w-full 2xl:min-w-[450px] ">
                            <Input
                              className="w-full pt-2 pr-8  pb-2  pl-3  placeholder:text-[#666] placeholder:text-[18px]"
                              placeholder="Enter your Email "
                            />
                          </div>
                        </div>

                        <div className="flex   max-sm:flex-col mb-4 flex-1 ">
                          <div className="2xl:w-[260px] flex  shrink-0">
                            <p
                              htmlFor=""
                              className="    w-full max-2xl:w-[116px] xl:text-right text-left px-[15px] pt-1 lg:px-4 mb-2 text-[18px] font-normal text-[#222222] "
                            >
                              Comment
                            </p>
                          </div>
                          <div className=" w-full px-4 ">
                            <Textarea
                              className="w-full placeholder:text-[#666] placeholder:text-[18px] min-h-[200px]"
                              placeholder="Enter your comment "
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-start shrink-0 mb-[10px] sm:pl-[130px] px-[15px] py-4 2xl:pl-[275px]">
                          <Button className=" max-sm:px-[16px]  bg-[#222222] text-white px-[34px] max-sm:min-w-[116px] 2xl:min-h-[50px] text-[17px] py-[14px] ">
                            Submit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
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
