import React from "react";

const Table = () => {
  return (
    <>
      <div className="max-w-[1400px] flex-col space-y-1">
        <h3 className="pb-[12px] text-[18px] font-normal pt-2">Data Sheet </h3>

        <div className=" w-full flex gap-1">
          <div className="flex-1 py-[10px] px-[20px] bg-[#EBEBEB] text-[18px] font-normal">
            Composition
          </div>
          <div className="flex-1 py-[10px] px-[20px] bg-[#EBEBEB] text-[18px] font-normal">
            Matt paper
          </div>
        </div>
        <div className=" w-full flex gap-1">
          <div className="flex-1 py-[10px] px-[20px] bg-[#F6F6F6] text-[18px] font-normal">
            Property
          </div>
          <div className="flex-1 py-[10px] px-[20px] bg-[#F6F6F6] text-[18px] font-normal">
            120 pages
          </div>
        </div>
        <div className=" w-full flex gap-1">
          <div className="flex-1 py-[10px] px-[20px] bg-[#EBEBEB] text-[18px] font-normal">
            Style
          </div>
          <div className="flex-1 py-[10px] px-[20px] bg-[#EBEBEB] text-[18px] font-normal">
            Classic
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
