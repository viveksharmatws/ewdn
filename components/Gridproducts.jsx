import React from "react";
import jsonData from "../data.json";
import Image from "next/image";
import Discountsection from "./Discountsection";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Dialogofproduct from "./Dialoguefproduct";
import Link from "@/node_modules/next/link";
import { IoStar } from "react-icons/io5";

const Gridproducts = () => {
  return (
    <div className="mx-auto max-w-[1430px] px-[15px] max-py-[30px]">
      <Dialog>
        <div className="grid mt-[40px] grid-cols-2 items-start gap-[10px] sm:gap-[30px] place-items-center sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5  ">
          {jsonData.map((product) => (
            <div key={product.index} className="w-full">
              <div className="group relative duration-1000 overflow-hidden">
                <Image
                  src={`/images${product.all_images[0]}`}
                  alt="Image of person"
                  width={256}
                  height={300}
                  className=" opacity-100 w-full"
                />
                {product.all_images.length > 1 && (
                  <Image
                    src={`/images${product.all_images[1]}`}
                    alt="Image of person"
                    width={256}
                    height={300}
                    className="opacity-0 w-full duration-1000 group-hover:opacity-100 absolute left-0 top-0"
                  />
                )}
                <div className=" absolute right-[10px] top-[-25px] flex flex-col gap-2 opacity-0 duration-500 group-hover:right-[10px] group-hover:translate-y-[35px]  group-hover:opacity-100 group-hover:transition ">
                  <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black  hover:bg-red-600 group-hover:items-center group-hover:justify-center   ">
                    <Image
                      src="../images/heart.svg"
                      alt=""
                      width={17}
                      height={17}
                      className="brightness-0 invert "
                    />
                  </div>
                  <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black  hover:bg-red-600 group-hover:items-center group-hover:justify-center  ">
                    <Image
                      src="../images/compare.svg"
                      alt=""
                      width={17}
                      height={17}
                      className="brightness-0 invert"
                    />
                  </div>
                  <DialogTrigger className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black  hover:bg-red-600 group-hover:items-center group-hover:justify-center  ">
                    <Image
                      src="../images/wide.svg"
                      alt=""
                      width={17}
                      height={17}
                      className="brightness-0 invert"
                    />
                  </DialogTrigger>
                  <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full  bg-black hover:bg-red-600 group-hover:items-center  group-hover:justify-center ">
                    <Image
                      src="../images/addtoviewpage.svg"
                      alt=""
                      width={17}
                      height={17}
                      className="brightness-0 invert max-w-[17px] w-full"
                    />
                  </div>
                </div>
                <div className="absolute left-[-2px] top-[8px] flex flex-col gap-[2px] ">
                  <div className="opacity-0 duration-500 group-hover:opacity-100">
                    <div>
                      <span className="bg-green-500 px-[7px] py-[3px] text-[11px] font-medium capitalize leading-[15px] tracking-[0.5px] text-white duration-300 group-hover:translate-x-3  shadow-sm shadow-slate-950">
                        new
                      </span>
                    </div>
                  </div>

                  <div className="opacity-100">
                    <span className="bg-[#E22D2D] px-[7px] py-[3px] text-[11px] font-medium capitalize leading-[15px] tracking-[0.5px] text-white  duration-300 group-hover:translate-x-3 shadow-sm shadow-slate-500 ">
                      -12%
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-[15px]">
                <h3 className=" text-[16px] font-normal leading-[26px] tracking-[0.3px] text-[#666666]">
                  {product.subheading}
                </h3>
                <Link
                  href="/products"
                  className=" text-[20px] font-normal capitalize leading-[22px] tracking-[0.3px] line-clamp-1"
                >
                  {product.heading}
                </Link>
                <div className="flex py-1">
                  <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                  <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                  <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                  <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                  <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                </div>
                <h3 className="mt-[4px] text-[20px] mb-5 font-medium leading-[20px] text-[#ff0000]  ">
                  ${product.price}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center shrink-0 mb-[10px] p-4 mt-5">
          <Link
            href="/productgrid"
            className=" max-sm:px-[16px] border-black border hover:bg-[#222]  hover:text-white px-[34px] max-sm:min-w-[116px] 2xl:min-h-[50px] text-[14px] md:text-[17px] py-[14px] font-semibold tracking-[0.5px] transition  duration-3000 text-[#222]"
          >
            All Products
          </Link>
        </div>
        <Discountsection />

        {/* {isRendered && ( */}
        <section className="mx-auto max-w-[1010px] p-[25px]">
          <DialogContent className="flex bg-white">
            <Dialogofproduct />
          </DialogContent>
        </section>
      </Dialog>
    </div>
  );
};

export default Gridproducts;
