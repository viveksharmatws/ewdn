import Breadcrumb from "@/components/Breadcrumb";
import React from "react";

const Breadcrumbcomponent = () => {
  return (
    <div
      className="bg-cover min-h-[200px] bg-no-repeat bg-center  flex items-center justify-center"
      style={{ backgroundImage: "url(/images/breadcrumb_img.jpg)" }}
    >
      <Breadcrumb Title="Accessories" />
    </div>
  );
};

export default Breadcrumbcomponent;
