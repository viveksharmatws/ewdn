import Image from "next/image";
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

import headphone from "../public/images/headphone.png";
import arrow from "../public/images/right-arrow.png";

const Footer = () => {
  return (
    <>
      <footer className=" bg-[#262626]">
        <div className="pb-[70px] pt-[90px]">
          <footer className="bg-[#262626] ">
            <div className="mx-auto w-full max-w-[1400px]">
              <div className="grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-4 lg:py-8">
                <div>
                  <h2 className="mb-6  text-[22px] font-semibold uppercase text-white ">
                    Store information
                  </h2>
                  <ul className=" font-[22px]  no-underline invert">
                    <li className="mb-4  flex items-start gap-2">
                      <FaMapMarkerAlt className=" h-[25px] w-[25px]" />

                      <a href="#" className="text-[18px]">
                        Clostich - Apparel & Clothing Store 507-Union Trade
                        Centre 123456 France
                      </a>
                    </li>
                    <li className="mb-4 flex items-center gap-2">
                      <AiOutlineMail height={20} width={20} />
                      <a href="#" className="text-[18px]">
                        sales@yourcompany.com
                      </a>
                    </li>

                    <li className="mb-4 flex items-center gap-2">
                      <Image
                        src={headphone}
                        alt="headphone"
                        className="h-[20px] w-[20px]"
                      />
                      <a href="#" className="text-[18px]">
                        (+91) 9876-543-210
                      </a>
                    </li>
                    <li>
                      <div className=""></div>
                    </li>
                  </ul>
                </div>
                <div className="xl:pl-[60px]">
                  <h2 className="mb-6 text-[18px] font-semibold uppercase text-white ">
                    Products
                  </h2>
                  <ul className="font-[18px] no-underline invert">
                    <li className="mb-4 flex items-center gap-1 hover:translate-x-2 hover:text-black hover:transition hover:duration-1000">
                      <Image
                        src={arrow}
                        alt="arrow-right"
                        className="h-3 w-3"
                      />
                      <a href="#" className="text-[18px]">
                        Discord Server
                      </a>
                    </li>
                    <li className="mb-4 flex items-center gap-1 hover:translate-x-2 hover:transition hover:duration-1000">
                      <Image
                        src={arrow}
                        alt="arrow-right"
                        className="h-3 w-3"
                      />
                      <a href="#" className="text-[18px]">
                        Twitter
                      </a>
                    </li>
                    <li className="mb-4 flex items-center gap-1 hover:translate-x-2 hover:transition hover:duration-1000">
                      <Image
                        src={arrow}
                        alt="arrow-right"
                        className="h-3 w-3"
                      />
                      <a href="#" className="text-[18px]">
                        Facebook
                      </a>
                    </li>
                    <li className="mb-4 flex items-center gap-1 hover:translate-x-2 hover:transition hover:duration-1000">
                      <Image
                        src={arrow}
                        alt="arrow-right"
                        className="h-3 w-3"
                      />
                      <a href="#" className="text-[18px]">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-[18px] font-semibold uppercase text-white ">
                    Our Company
                  </h2>
                  <ul className="font-[18px] no-underline invert">
                    <li className="mb-4 flex items-center gap-1 hover:translate-x-2 hover:transition hover:duration-1000">
                      <Image
                        src={arrow}
                        alt="arrow-right"
                        className="h-3 w-3"
                      />
                      <a href="#" className="text-[18px]">
                        Discord Server
                      </a>
                    </li>
                    <li className="mb-4 flex items-center gap-1 hover:translate-x-2 hover:transition hover:duration-1000">
                      <Image
                        src={arrow}
                        alt="arrow-right"
                        className="h-3 w-3"
                      />
                      <a href="#" className="text-[18px]">
                        Legal Notice
                      </a>
                    </li>
                    <li className="mb-4 flex items-center gap-1 hover:translate-x-2 hover:transition hover:duration-1000">
                      <Image
                        src={arrow}
                        alt="arrow-right"
                        className="h-3 w-3"
                      />
                      <a href="#" className="text-[18px]">
                        Terms and conditions
                      </a>
                    </li>
                    <li className="mb-4 flex items-center gap-1 hover:translate-x-2 hover:transition hover:duration-1000">
                      <Image
                        src={arrow}
                        alt="arrow-right"
                        className="h-3 w-3"
                      />
                      <a href="#" className="text-[18px]">
                        About Us
                      </a>
                    </li>
                    <li className="mb-4 flex items-center gap-1 hover:translate-x-2 hover:transition hover:duration-1000">
                      <Image
                        src={arrow}
                        alt="arrow-right"
                        className="h-3 w-3"
                      />
                      <a href="#" className="text-[18px]">
                        Secure Payments
                      </a>
                    </li>
                    <li className="mb-4 flex items-center gap-1 hover:translate-x-2 hover:transition hover:duration-1000">
                      <Image
                        src={arrow}
                        alt="arrow-right"
                        className="h-3 w-3"
                      />
                      <a href="#" className="text-[18px]">
                        My Account
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-[18px] font-semibold uppercase text-white ">
                    Subscribe Our Newsletter
                  </h2>
                  <ul className="font-[18px] no-underline">
                    <li className="mb-4 text-[18px] invert">
                      Subscribe to our latest newsletter to get news about
                      special discounts.
                    </li>
                    <li className="mb-4">
                      <Input
                        placeholder="Your Email Address"
                        className="text-gray_two rounded-none bg-[#262626]   text-[18px] placeholder:text-white "
                      />
                    </li>
                    <li className="mb-4">
                      <a href="#" className="text-[18px]">
                        <Button
                          variant="outline"
                          className="bg-red rounded-none border-none text-white"
                        >
                          Subscribe
                        </Button>
                      </a>
                    </li>
                    <li className="mb-4 flex gap-2">
                      <a href="#" className="text-[18px]">
                        <Checkbox className="mt-1 invert" />
                      </a>
                      <p className="text-[18px] invert">
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
      <bottomfoot className="  w-full max-w-[1400px]    ">
        <div className="  flex items-center justify-between justify-items-center border border-t-white bg-[#262626] md:px-[100px] ">
          <div>
            <span className=" text-[18px] text-white sm:text-center">
              © 2023 - Ecommerce software by PrestaShop™
            </span>
          </div>

          <ul className="mt-3 flex items-center  text-black no-underline sm:mt-0">
            <li>
              <a href="#" className="mx-[22px]">
                <Image src={ce} alt="visa" />
              </a>
            </li>
            <li>
              <a href="#" className="mx-[22px]">
                <Image src={visa} alt="visa" />
              </a>
            </li>
            <li>
              <a href="#" className="mx-[22px]">
                <Image src={mastercard} alt="mastercard" />
              </a>
            </li>
            <li>
              <a href="#" className="mx-[22px]">
                <Image src={express} alt="express" />
              </a>
            </li>
            <li>
              <a href="#" className="mx-[22px]">
                <Image src={paypal} alt="express" />
              </a>
            </li>
          </ul>
        </div>
      </bottomfoot>
    </>
  );
};

export default Footer;
