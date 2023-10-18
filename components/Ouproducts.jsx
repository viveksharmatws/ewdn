import React from "react";

const Ouproducts = () => {
  return (
    <section className="mx-auto max-w-[1400px] pt-[90px] ">
      <div className="flex justify-between">
        <div className="text-[45px] font-normal leading-[47px]">
          <h1>Our Products</h1>
        </div>
        <div className="flex gap-5">
          <button className="bg-[#F0F0F0]  px-[39px] py-2 text-[17px] leading-[26px] ">
            Featured
          </button>
          <button className=" border border-[#F0F0F0] px-[39px] py-2 text-[17px] leading-[26px] hover:bg-[#F0F0F0] ">
            New Arrivals
          </button>
          <button className=" border border-[#F0F0F0] px-[39px] py-2 text-[17px] leading-[26px] hover:bg-[#F0F0F0] ">
            Best Sellers
          </button>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Ouproducts;
