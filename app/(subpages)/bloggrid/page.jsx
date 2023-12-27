import Breadcrumb from "@/components/Breadcrumb";
import Image from "@/node_modules/next/image";
import React from "react";
import discountgirlbanner from "/public/images/discountleft.jpg";
import HorizontalProductCard from "@/elements/Horizontalproductcard";
import Categoryfilter from "@/elements/Categoryfilter";

import Link from "@/node_modules/next/link";
import { BsSearch } from "react-icons/bs";
// import { FaLink } from "./FaLink";
import { FaLink } from "react-icons/fa";
const page = () => {
  return (
    <>
      <div className="flex-col ">
        <div
          className="bg-cover min-h-[200px] bg-no-repeat bg-center mb-[40px]  flex items-center justify-center"
          style={{ backgroundImage: "url(/images/breadcrumb_img.jpg)" }}
        >
          <Breadcrumb Title="Blogs" />
        </div>
        <div className="max-w-[1430px]  w-full mx-auto ">
          <div className="flex  wblock-full sm:px-[10px] mx-auto sm:pt-[5px] ">
            <div className=" lg:  lg:px-[15px]">
              <div className="mb-10 pr-[15px] max-w-[250px] pl-[2px] pb-[20px] hidden md:block">
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
                        className=" text-[18px] leading-[26px] px-2 tracking-[0.5px] font-medium capitalize underline"
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
            <div className="flex-col  px-[10px] sm:px-[15px]  w-full mb-10">
              <div className="  pb-5  max-w-[1200px] w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className=" flex flex-col  pb-[1px] group ">
                  <div className="w-full">
                    <div className="group relative overflow-hidden ">
                      <div className="relative">
                        <Image
                          src="/images/blueman.jpg"
                          alt="Image of person"
                          width={340}
                          height={300}
                          className="transition duration-1000  group-hover:scale-125 group-hover:opacity-90 w-full "
                        />
                        <div className="absolute inset-0 transition duration-1000   bg-black group-hover:opacity-40  opacity-0 w-full "></div>
                      </div>
                      <div className=" absolute  top-[40%] left-[35%] right-[50%] bottom-[50%] z-10 flex gap-2 opacity-0 duration-150 transition ease-out group-hover:opacity-100">
                        <Link
                          href="#"
                          className=" duration-[10000ms] flex h-[45px] min-w-[45px] items-center justify-center  border  cursor-pointer  hover:bg-[#ff0000]  hover:border-none "
                        >
                          <BsSearch color="#ffffff" className="" size={15} />
                        </Link>
                        <Link
                          href="productdetailblog"
                          className="  duration-[10000ms] flex h-[45px] min-w-[45px] items-center justify-center  border p-3 cursor-pointer  hover:bg-[#ff0000]  hover:border-none"
                        >
                          <FaLink color="white" size={15} stroke={0.1} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="w-full ">
                    <h4 className="text-[15px] font-medium leading-[50px] text-[#FF0000] w-full">
                      <a href="">September 3,2023</a>
                    </h4>
                    <div className="mb-2">
                      <Link
                        href="/productdetailblog"
                        className="text-[22px] font-normal leading-[23px]"
                      >
                        Turpis at eleifend Aenean porta
                      </Link>
                    </div>
                    <p className="mb-[11px] text-[18px] font-normal leading-[24px] text-[#666666]">
                      Turpis at eleifend ps mi elit Aenean porta ac sed
                      faucibus. Nunc urna Morbi...
                    </p>
                    <Link
                      href="/productdetailblog"
                      className="text-[17px] font-medium capitalize tracking-[0.5px] underline"
                    >
                      read more
                    </Link>
                  </div>
                </div>

                <div className=" flex flex-col  pb-[1px] group ">
                  <div className="w-full">
                    <div className="group relative overflow-hidden ">
                      <div className="relative">
                        <Image
                          src="/images/brownboy.jpg"
                          alt="Image of person"
                          width={340}
                          height={300}
                          className="transition duration-1000  group-hover:scale-125 group-hover:opacity-90 w-full "
                        />
                        <div className="absolute inset-0 transition duration-1000   bg-black group-hover:opacity-40  opacity-0 w-full "></div>
                      </div>
                      <div className=" absolute  top-[40%] left-[35%] right-[50%] bottom-[50%] z-10 flex gap-2 opacity-0 duration-150 transition ease-out group-hover:opacity-100">
                        <Link
                          href="#"
                          className=" duration-[10000ms] flex h-[45px] min-w-[45px] items-center justify-center  border  cursor-pointer  hover:bg-[#ff0000]  hover:border-none "
                        >
                          <BsSearch color="#ffffff" className="" size={15} />
                        </Link>
                        <Link
                          href="#"
                          className="  duration-[10000ms] flex h-[45px] min-w-[45px] items-center justify-center  border p-3 cursor-pointer  hover:bg-[#ff0000]  hover:border-none"
                        >
                          <FaLink color="white" size={15} stroke={0.1} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="w-full ">
                    <h4 className="text-[15px] font-medium leading-[50px] text-[#FF0000] w-full">
                      <a href="">September 3,2023</a>
                    </h4>
                    <div className="mb-2">
                      <Link
                        href="/productdetailblog"
                        className="text-[22px] font-normal leading-[23px]"
                      >
                        Turpis at eleifend Aenean porta
                      </Link>
                    </div>
                    <p className="mb-[11px] text-[18px] font-normal leading-[24px] text-[#666666]">
                      Turpis at eleifend ps mi elit Aenean porta ac sed
                      faucibus. Nunc urna Morbi...
                    </p>
                    <Link
                      href="/productdetailblog"
                      className="text-[17px] font-medium capitalize tracking-[0.5px] underline"
                    >
                      read more
                    </Link>
                  </div>
                </div>
                <div className=" flex flex-col  pb-[1px] group ">
                  <div className="w-full">
                    <div className="group relative overflow-hidden ">
                      <div className="relative">
                        <Image
                          src="/images/capri.jpg"
                          alt="Image of person"
                          width={340}
                          height={300}
                          className="transition duration-1000  group-hover:scale-125 group-hover:opacity-90 w-full "
                        />
                        <div className="absolute inset-0 transition duration-1000   bg-black group-hover:opacity-40  opacity-0 w-full "></div>
                      </div>
                      <div className=" absolute  top-[40%] left-[35%] right-[50%] bottom-[50%] z-10 flex gap-2 opacity-0 duration-150 transition ease-out group-hover:opacity-100">
                        <Link
                          href="/bloggrid"
                          className=" duration-[10000ms] flex h-[45px] min-w-[45px] items-center justify-center  border  cursor-pointer  hover:bg-[#ff0000]  hover:border-none "
                        >
                          <BsSearch color="#ffffff" className="" size={15} />
                        </Link>
                        <Link
                          href="#"
                          className="  duration-[10000ms] flex h-[45px] min-w-[45px] items-center justify-center  border p-3 cursor-pointer  hover:bg-[#ff0000]  hover:border-none"
                        >
                          <FaLink color="white" size={15} stroke={0.1} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="w-full ">
                    <h4 className="text-[15px] font-medium leading-[50px] text-[#FF0000] w-full">
                      <a href="">September 3,2023</a>
                    </h4>
                    <div className="mb-2">
                      <Link
                        href="/productdetailblog"
                        className="text-[22px] font-normal leading-[23px]"
                      >
                        Turpis at eleifend Aenean porta
                      </Link>
                    </div>
                    <p className="mb-[11px] text-[18px] font-normal leading-[24px] text-[#666666]">
                      Turpis at eleifend ps mi elit Aenean porta ac sed
                      faucibus. Nunc urna Morbi...
                    </p>
                    <Link
                      href="/productdetailblog"
                      className="text-[17px] font-medium capitalize tracking-[0.5px] underline"
                    >
                      read more
                    </Link>
                  </div>
                </div>
                <div className=" flex flex-col  pb-[1px] group ">
                  <div className="w-full">
                    <div className="group relative overflow-hidden ">
                      <div className="relative">
                        <Image
                          src="/images/coats.jpg"
                          alt="Image of person"
                          width={340}
                          height={300}
                          className="transition duration-1000  group-hover:scale-125 group-hover:opacity-90 w-full "
                        />
                        <div className="absolute inset-0 transition duration-1000   bg-black group-hover:opacity-40  opacity-0 w-full "></div>
                      </div>
                      <div className=" absolute  top-[40%] left-[35%] right-[50%] bottom-[50%] z-10 flex gap-2 opacity-0 duration-150 transition ease-out group-hover:opacity-100">
                        <Link
                          href="#"
                          className=" duration-[10000ms] flex h-[45px] min-w-[45px] items-center justify-center  border  cursor-pointer  hover:bg-[#ff0000]  hover:border-none "
                        >
                          <BsSearch color="#ffffff" className="" size={15} />
                        </Link>
                        <Link
                          href="#"
                          className="  duration-[10000ms] flex h-[45px] min-w-[45px] items-center justify-center  border p-3 cursor-pointer  hover:bg-[#ff0000]  hover:border-none"
                        >
                          <FaLink color="white" size={15} stroke={0.1} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="w-full ">
                    <h4 className="text-[15px] font-medium leading-[50px] text-[#FF0000] w-full">
                      <a href="">September 3,2023</a>
                    </h4>
                    <div className="mb-2">
                      <Link
                        href="/productdetailblog"
                        className="text-[22px] font-normal leading-[23px]"
                      >
                        Turpis at eleifend Aenean porta
                      </Link>
                    </div>
                    <p className="mb-[11px] text-[18px] font-normal leading-[24px] text-[#666666]">
                      Turpis at eleifend ps mi elit Aenean porta ac sed
                      faucibus. Nunc urna Morbi...
                    </p>
                    <Link
                      href="/productdetailblog"
                      className="text-[17px] font-medium capitalize tracking-[0.5px] underline"
                    >
                      read more
                    </Link>
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
