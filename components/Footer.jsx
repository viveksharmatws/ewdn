import Image from "next/image";
import { ArrowRight } from "lucide-react";
import React from "react";
import paypal from "../public/images/pypal.png";
import express from "../public/images/express.png";
import mastercard from "../public/images/mastercard.png";
import visa from "../public/images/visa.png";
import ce from "../public/images/ce.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import { AiOutlineMail } from "react-icons/ai";
import drop from "/public/images/droplocation.svg";
import message from "/public/images/message.svg";

import headphone from "../public/images/headphone.svg";
import Link from "@/node_modules/next/link";

const Footer = () => {
  return (
    <>
      <footer className=" w-full bg-[#262626]">
        <div className="pb-[70px] sm:pt-[0px] pt-[10px] px-[15px]">
          <footer className="">
            <div className="mx-auto w-full max-w-[1400px] ">
              <div className="grid grid-cols-1 gap-8  py-6 md:grid-cols-2      lg:grid-cols-4 lg:py-8">
                <div>
                  <h2 className="mb-6  text-[22px] font-medium capitalize text-white ">
                    Store information
                  </h2>
                  <ul className=" font-[22px]  no-underline ">
                    <li className="mb-[3px]  leading-[33px]  flex items-start ">
                      <Image
                        src={drop}
                        width={20}
                        height={20}
                        alt=""
                        className="mr-[5px] invert mt-2"
                      />

                      <Link
                        href="#"
                        className="text-[18px] pl-1 text-[#b2b2b2]"
                      >
                        Clostich - Apparel & Clothing Store 507-Union Trade
                        Centre 123456 France
                      </Link>
                    </li>
                    <li className="mb-[3px]  leading-[33px] flex items-center ">
                      <Image
                        src={message}
                        width={20}
                        height={20}
                        alt=""
                        className="mr-[5px] invert "
                      />
                      <Link
                        href="#"
                        className="text-[18px] pl-1 text-[#b2b2b2]"
                      >
                        sales@yourcompany.com
                      </Link>
                    </li>

                    <li className="mb-[3px]  leading-[33px] flex items-center ">
                      <Image
                        src={headphone}
                        alt="headphone"
                        width={20}
                        height={20}
                        className=" mr-[5px] invert "
                      />
                      <Link
                        href="#"
                        className="text-[18px] pl-1 text-[#b2b2b2]"
                      >
                        (+91) 9876-543-210
                      </Link>
                    </li>
                    <li>
                      <div className=""></div>
                    </li>
                  </ul>
                </div>
                <div className="xl:pl-[60px]">
                  <h2 className="mb-6 text-[22px] font-medium capitalize text-white ">
                    Products
                  </h2>
                  <ul className="font-[18px] no-underline text-[#b2b2b2] ">
                    <li className="mb-[3px]  leading-[33px] flex items-center gap-1 hover:translate-x-3 hover:text-white hover:transition hover:duration-[9000ms] hover:text-white">
                      <ArrowRight size={15} />

                      <Link href="/products" className="text-[18px] pl-1">
                        Prices Drop
                      </Link>
                    </li>
                    <li className="mb-[3px]  leading-[33px] flex items-center gap-1 hover:translate-x-3 hover:transition hover:duration-[9000ms] hover:text-white">
                      <ArrowRight size={15} />

                      <Link
                        href="/products"
                        className="text-[18px] pl-1 text-[#b2b2b2] hover:text-white"
                      >
                        New Products
                      </Link>
                    </li>
                    <li className="mb-[3px]  leading-[33px] flex items-center gap-1 hover:translate-x-3 hover:transition hover:duration-[9000ms] hover:text-white">
                      <ArrowRight size={15} />

                      <Link href="#" className="text-[18px] pl-1">
                        Best Sales
                      </Link>
                    </li>
                    <li className="mb-[3px]  leading-[33px] flex items-center gap-1 hover:translate-x-3 hover:transition hover:duration-[9000ms] hover:text-white">
                      <ArrowRight size={15} />

                      <Link href="/contact" className="text-[18px] pl-1">
                        Contact Us
                      </Link>
                    </li>
                    <li className="mb-[3px]  leading-[33px] flex items-center gap-1 hover:translate-x-3 hover:transition hover:duration-[9000ms] hover:text-white">
                      <ArrowRight size={15} />

                      <Link href="#" className="text-[18px] pl-1">
                        Sitemap
                      </Link>
                    </li>
                    <li className="mb-[3px]  leading-[33px] flex items-center gap-1 hover:translate-x-3 hover:transition hover:duration-[9000ms] hover:text-white">
                      <ArrowRight size={15} />

                      <Link href="/stores" className="text-[18px] pl-1">
                        Stores
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-[22px]  text-white font-medium capitalize  ">
                    Our Company
                  </h2>
                  <ul className="font-[18px] no-underline text-[#b2b2b2] ">
                    <li className="mb-[3px]  leading-[33px] flex items-center gap-1 hover:translate-x-3 hover:transition hover:duration-[9000ms] hover:text-white">
                      <ArrowRight size={15} />

                      <Link href="#" className="text-[18px] pl-1 ">
                        Discord Server
                      </Link>
                    </li>
                    <li className="mb-[3px]  leading-[33px] flex items-center gap-1 hover:translate-x-3 hover:transition hover:duration-[9000ms] hover:text-white">
                      <ArrowRight size={15} />

                      <Link href="#" className="text-[18px] pl-1">
                        Legal Notice
                      </Link>
                    </li>
                    <li className="mb-[3px]  leading-[33px] flex items-center gap-1 hover:translate-x-3 hover:transition hover:duration-[9000ms] hover:text-white">
                      <ArrowRight size={15} />

                      <Link href="#" className="text-[18px] pl-1">
                        Terms and conditions
                      </Link>
                    </li>
                    <li className="mb-[3px]  leading-[33px] flex items-center gap-1 hover:translate-x-3 hover:transition hover:duration-[9000ms] hover:text-white">
                      <ArrowRight size={15} />

                      <Link href="/aboutus" className="text-[18px] pl-1">
                        About Us
                      </Link>
                    </li>
                    <li className="mb-[3px]  leading-[33px] flex items-center gap-1 hover:translate-x-3 hover:transition hover:duration-[9000ms] hover:text-white">
                      <ArrowRight size={15} />

                      <Link href="#" className="text-[18px] pl-1">
                        Secure Payments
                      </Link>
                    </li>
                    <li className="mb-[3px]  leading-[33px] flex items-center gap-1 hover:translate-x-3 hover:transition hover:duration-[9000ms] hover:text-white">
                      <ArrowRight size={15} />

                      <Link href="/myaccount" className="text-[18px] pl-1">
                        My Account
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-[22px] font-medium capitalize text-white   ">
                    Subscribe Our Newsletter
                  </h2>
                  <ul className="font-[18px] no-underline  text-[#b2b2b2] ">
                    <li className="mb-[3px]  leading-[25px] text-[18px] ">
                      Subscribe to our latest newsletter to get news about
                      special discounts.
                    </li>
                    <li className="mt-[15px] mb-[7px] leading-[33px] ">
                      <input
                        placeholder="Your Email Address"
                        className="  bg-[#262626]  min-w-[200px] sm:max-w-[400px] w-full text-[18px] px-[15px] py-[10px] leading-[26px] tracking-[0.5px] border placeholder:text-[#727272] min-h-[50px] focus-none "
                      />
                    </li>
                    <li className="mb-[3px] leading-[33px] ">
                      {/* <Link href="#" className=""> */}

                      <Button
                        variant="outline"
                        className="bg-[#B30D0D] rounded-sm border-none text-[#B3B2B2] px-[34px] py-[10px] leading-[22px] tracking-[0.5px] font-med  text-[18px] mb-3"
                      >
                        Subscribe
                      </Button>
                      {/* </Link> */}
                    </li>
                    <li className="mb-[3px]  leading-[33px] flex gap-2 px-1">
                      {/* <Link href="#" className="text-[18px] pl-1"> */}
                      <Checkbox className="mt-1 text-[18px] text-white" />
                      {/* </Link> */}
                      <p className="text-[18px] leading-[25px] ">
                        I agree to the terms and conditions and the privacy
                        policy
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </footer>
      <bottomfoot className=" z-50   bg-[#262626]   ">
        <div
          className="  sm:flex items-center  max-sm:flex-col justify-between justify-items-center  px-[10px] md:px-[10px] mx-auto w-full px-[15px]  bg-[#262626] border-[#666666] "
          style={{
            borderTop: "1px solid #666666",
          }}
        >
          <div className=" mx-auto max-w-[1400px]    sm:flex items-center  max-sm:flex-col justify-between justify-items-center   md:px-2 xl:px-0 mx-auto w-full   bg-[#262626]">
            <div className="text-center max-sm:pt-4">
              <span className=" text-[18px] text-white max-sm:text-center">
                © 2023 - Ecommerce software by PrestaShop™
              </span>
            </div>
            <div>
              <ul className=" flex items-center justify-center  text-white no-underline ">
                <li>
                  <Link href="#" className="mx-[22px]">
                    <Image src={ce} alt="visa" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mx-[22px]">
                    <Image src={visa} alt="visa" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mx-[22px]">
                    <Image src={mastercard} alt="mastercard" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mx-[22px]">
                    <Image src={express} alt="express" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mx-[22px]">
                    <Image src={paypal} alt="express" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </bottomfoot>
    </>
  );
};

export default Footer;
