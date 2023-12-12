import React from "react";
import { Lock, Truck, PackageOpen } from "lucide-react"; // Assuming both Lock and Truck icons are imported from lucide-react

const Security = ({ Title, Para, icon }) => {
  const size = "30";
  const renderIcon = (iconType) => {
    switch (iconType) {
      case "Security":
        return <Lock size={size} />;
      case "Return":
        return <Truck size={size} />;

      case "Delivery":
        return <PackageOpen size={size} />;
      default:
        return null; // If no valid icon type is specified, you can return null or add a default behavior
    }
  };

  return (
    <div className="bg-[#cccccc26] border border-[#cccccc26] max-sm:px-[20px] px-[15px] py-[10px] w-full mb-[5px] flex items-center gap-5">
      <div>{renderIcon(icon)}</div>
      <div>
        <h2 className="text-[18px] font-medium">{Title}</h2>
        <p className="text-[15px] sm:text-[18px] font-normal w-full">{Para}</p>
      </div>
    </div>
  );
};

export default Security;
