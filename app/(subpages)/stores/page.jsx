import HorizontalProductCard from "@/elements/Horizontalproductcard";
import Image from "@/node_modules/next/image";
import React from "react";
import discountgirlbanner from "/public/images/discountleft.jpg";
import Breadcrumb from "@/components/Breadcrumb";
import storepic from "/public/images/store1.jpg";
import storepic2 from "/public/images/store2.jpg";
import storepic3 from "/public/images/store3.jpg";
import storepic4 from "/public/images/store4.jpg";
import storepic5 from "/public/images/store5.jpg";
import Categoryfilter from "@/elements/Categoryfilter";
import Table from "@/components/Table";

const Aboutus = () => {
  return (
    <div className="flex-col ">
      <div
        className="bg-cover min-h-[200px] bg-no-repeat bg-center mb-[40px]  flex items-center justify-center"
        style={{ backgroundImage: "url(/images/breadcrumb_img.jpg)" }}
      >
        <Breadcrumb Title=" Our Stores " />
      </div>
      <div className="flex max-md:flex-col  w-full max-w-[1430px] sm:px-[15px] mx-auto sm:pt-[5px]">
        <div className=" md:block  px-[10px] hidden">
          <div className="pr-[15px] max-w-[250px] pl-[2px] pb-[20px] ">
            <div className="2xl:min-w-[250px] ">
              <Image
                src={discountgirlbanner}
                alt="image discount "
                width={460}
                height={300}
                className="w-full  "
              />
            </div>
            <div className="mt-[25px] min-w-[258px] ">
              <HorizontalProductCard heading="New Products" />
              <HorizontalProductCard heading="New Products" />
              <HorizontalProductCard heading="New Products" />
            </div>
            <div>
              <Categoryfilter />
            </div>
          </div>
        </div>
        <div className="flex  sm:px-[15px] px-[10px] w-full">
          <div className="2xl:max-w-[1180px] w-full flex-col">
            <div className="w-full  border 2xl:max-h-[250px] px-3 mb-3 ">
              <div>
                <div className="py-[30px] sm:flex max-sm:flex-col 2xl:items-center 2xl:justify-center   sm:divide-x-[1px]">
                  <div className=" max-lg:flex-col sm:items-center sm:justify-center flex gap-5 sm:pr-20 md:pr-5">
                    <div className="md:px-4 2xl:min-w-[280px]  shrink-0 pt-5">
                      <Image
                        src={storepic}
                        width={170}
                        height={150}
                        priority
                        className=" max-sm:w-[200px] "
                      />
                    </div>
                    <div className="flex-col max-sm:pt-4 md:px-4 sm:px-2 2xl:min-w-[450px] w-full">
                      <h2 className=" text-[#222] font-medium text-[18px] mb-2 ">
                        Dade country
                      </h2>
                      <p className="text-[#666666] text-[18px]">
                        3030 SW 8th St Miami
                      </p>
                      <p className="text-[#666666] text-[18px]">
                        Miami, Florida 33135
                      </p>
                      <p className="text-[#666666] text-[18px]">
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="sm:px-2 2xl:px-4 flex-col 2xl:min-w-[360px] pt-5">
                    <div className="2xl:flex gap-[3px] items-center 2xl:text-right text-left justify-center min-h-[30px] sm:pl-20 max-sm:[5px] md:pl-2 xl:pl-[50px]">
                      <table>
                        <tbody>
                          <tr>
                            <th className="text-[18px] text-[#666666]">Mon.</th>
                            <td>
                              <ul>
                                <li className="pl-1">09:00AM - 07:00PM</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th className="text-[18px] text-[#666666]">Tue.</th>
                            <td>
                              <ul>
                                <li className="pl-1">09:00AM - 07:00PM</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th className="text-[18px] text-[#666666]">Wed.</th>
                            <td>
                              <ul>
                                <li className="pl-1">09:00AM - 07:00PM</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th className="text-[18px] text-[#666666]">Thu.</th>
                            <td>
                              <ul>
                                <li className="pl-1">09:00AM - 07:00PM</li>
                              </ul>
                            </td>
                          </tr>{" "}
                          <tr>
                            <th className="text-[18px] text-[#666666]">Fri.</th>
                            <td>
                              <ul>
                                <li className="pl-1">09:00AM - 07:00PM</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th className="text-[18px] text-[#666666]">Sat.</th>
                            <td>
                              <ul>
                                <li className="pl-1">09:00AM - 07:00PM</li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
