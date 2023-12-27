import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import jsonData from "../data.json";
import Link from "@/node_modules/next/link";
import { IoStar } from "react-icons/io5";

const LayoutGridfullwidth = () => {
  return (
    <>
      {jsonData.map((product) => (
        <div className="flex-col pb-[10px]">
          <div className=" w-full mx-auto  flex max-sm:flex-col p-[2px] pb-[10px]  ">
            <div className=" item-center justify-center flex  max-w-[260px] max-sm:mx-auto sm:min-w-[260px] max-h-[360px] shrink-0">
              <Image
                src={`/images${product.all_images[0]}`}
                alt="prouct "
                width={260}
                height={316}
                className="shrink-0 w-full"
              />
            </div>
            <div className="flex-col px-[25px] pt-[15px] min-h-[316px] max-sm:text-center ">
              <h3 className="text-[17] text-[#666] font-normal  leading-[26px] mb-1  ">
                {product.subheading}
              </h3>

              {product.heading && (
                <Link
                  href="/products"
                  className="text-[20px] text-[#222] leading-[22px] py-[2px] max-sm:text-center"
                >
                  {product.heading}
                </Link>
              )}

              <div className="flex justify-center sm:justify-start  ">
                <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
              </div>
              <span className="text-[20px] font-medium  text-center text-[#ff0000] mb-2 max-sm:text-center">
                ${product.price}
              </span>

              <p className="text-[18px] text-normal text-[#666666] max-sm:text-center leading-[22px] mb-3 line-clamp-2">
                {product.description}
              </p>

              <div className=" flex gap-3 justify-center sm:justify-start pl-0  p-1.5">
                <div className="flex gap-2 items-center justify-center max-sm:hidden">
                  <div className="h-[20px] w-[20px] rounded-full bg-orange-500"></div>
                  <div className="h-[20px] w-[20px] rounded-full bg-[#5d9cec]"></div>
                  <div className="h-[20px] w-[20px] rounded-full bg-yellow-500"></div>
                </div>
                <h2 className="border-[1px] text-[14px]  border-[#4cbb6c] block bg-[#e9f9ee] px-[7px] py-[2px] font-normal capitalize tracking-[0.5px] text-[#4cbb6c] leading-1 text-center">
                  In Stock
                </h2>
              </div>

              <button className=" mt-[10px] p-[10px] bg-black text-white min-w-[170px] max-sm:text-center">
                {product.button}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LayoutGridfullwidth;
