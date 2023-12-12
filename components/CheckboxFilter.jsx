"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Title } from "@radix-ui/react-dialog";
import React from "react";

const CheckboxFilter = ({ value, ColorFilter }) => {
  return (
    <div>
      {value.map((s, index) => (
        <section
          key={index}
          className="item-baseline justify-between flex w-full py-1"
        >
          <div className="flex items-center">
            {/* <div className=""> */}
            {ColorFilter ? (
              <label
                htmlFor={`check-${s.Title}`}
                className={`w-5 h-5 rounded-full`}
                style={{ background: s.Title }}
              ></label>
            ) : (
              <Checkbox
                id={`check-${s.Title}`}
                className="appearance-none border border-black rounded-md w-5 h-5 checked:bg-black checked:border-none"
              />
            )}
            {/* </div> */}
            <label
              htmlFor={`check-${s.Title}`}
              className="pl-2 text-[18px] leading-[26px] tracking-[0.5px] font-normal"
            >
              {s.Title}
            </label>
          </div>
          <div>
            <span className="text-sm text-gray-900">({s.count})</span>
          </div>
        </section>
      ))}
    </div>
  );
};

export default CheckboxFilter;
