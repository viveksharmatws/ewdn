import Image from "@/node_modules/next/image";
import React from "react";

const Loading = () => {
  return (
    <div className=" max-w-[1400px] mx-auto  flex items-center justify-center py-[100px] ">
      <Image alt="loader" width={100} height={100} src="/images/Ghost.gif" />
    </div>
  );
};

export default Loading;
