import React, { useState } from "react";
import "react-input-range/lib/css/index.css"; // Import default styles for react-input-range
import InputRange from "react-input-range";

const SliderComponent = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  // Custom function to return an empty string for the labels
  const formatLabel = () => "";

  return (
    <div className="w-full border-b-[1px] border-gray-300 pb-10">
      <h2 className="text-[19px] mb-[12px] mt-[6px]  font-medium tracking-[0.5px]">
        Price
      </h2>
      <label htmlFor="priceRange" className="pb-[10px] text-[18px]">
        ${priceRange.min} - ${priceRange.max}
      </label>

      <InputRange
        maxValue={100}
        minValue={0}
        value={priceRange}
        onChange={handlePriceChange}
        formatLabel={formatLabel}
        className="blur-3xl" // Use the custom function to hide labels
      />
    </div>
  );
};

export default SliderComponent;
