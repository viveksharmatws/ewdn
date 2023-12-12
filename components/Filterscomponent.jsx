import React from "react";
import CheckboxFilter from "./CheckboxFilter";

const Filterscomponent = ({ TitleofFilter, ColorFilter, values }) => {
  return (
    <div className="w-full border-b-[1px] pb-[10px] min-w-[250px] mb-[20px] border-gray-300">
      <h2 className="text-[19px] mb-[12px] mt-[6px] font-medium tracking-[0.5px]">
        {TitleofFilter}
      </h2>

      <CheckboxFilter value={values} ColorFilter={ColorFilter} />
    </div>
  );
};

export default Filterscomponent;
