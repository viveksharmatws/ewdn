import React from "react";

const List = ({ listitem }) => {
  return (
    <>
      <li className=" text-[#666] list-inside  leading-[26px] text-[18px] font-normal tracking-[0.5px]">
        {listitem}
      </li>
    </>
  );
};

export default List;
