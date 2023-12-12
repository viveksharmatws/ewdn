import Link from "@/node_modules/next/link";
import React from "react";

const Categoryfilter = () => {
  return (
    <div className="w-full">
      <h2 className="text-[22px] text-bold leading-[25px] tracking-[0.5px] py-[10px]">
        Blog Categories
      </h2>
      <Link href="#" className="text-[18px] font-normal hover:opacity-50">
        Ecommerce Trends
      </Link>

      <div className="flex leading-[30px] tracking-[0.5px] pl-4 gap-3">
        <span>-</span>
        <Link href="#" className="text-[18px] font-normal">
          Shopping
        </Link>
      </div>
      <div className="flex leading-[30px] tracking-[0.5px] pl-4 gap-3">
        <span>-</span>
        <Link href="#" className="text-[18px] font-normal">
          Digital Market
        </Link>
      </div>
    </div>
  );
};

export default Categoryfilter;
