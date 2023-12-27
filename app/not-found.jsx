import Image from "@/node_modules/next/image";
import React from "react";

const Notfound = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src="/images/404.jpg" alt=" 404" width={600} height={600} />
    </div>
  );
};

export default Notfound;
