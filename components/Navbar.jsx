"use client";
import Image from "next/image";
import React, { useState } from "react";
import message from "../public/images/message.svg";
import globe from "../public/images/globe.svg";
import america from "../public/images/america.jpg";
import person from "../public/images/person.svg";
import heart from "../public/images/heart.svg";
import bag from "../public/images/bag.svg";
import { AlignJustify } from "lucide-react";

import {
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import logo from "../public/images/logoecommerce.jpg";
import search from "../public/images/search.svg";
import NavigationMenubar from "./NavigationMenu";
import Sidebar from "../components/Sidebar";
import Link from "@/node_modules/next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const [products, setproducts] = useState(false);
  return (
    <>
      <nav className="bg-[#222222] md:block hidden   ">
        <div className=" mx-auto    flex max-w-[1430px]  justify-between gap-4 py-[8px] px-[15px] flex-row">
          <div className="flex gap-5">
            <ul className="flex items-center gap-[9px]">
              <li className="text-white shrink-0 ">
                <Link href="/ " className="">
                  <Image
                    src={message}
                    alt="message1"
                    width={18}
                    height={19}
                    className="invert "
                  />
                </Link>
              </li>
              <Link
                href="/contact"
                className="text-white text-[16px] font-normal  leading-[20px] tracking-[0.5px]  "
              >
                Support
              </Link>
            </ul>
            <span className="text-gray-300 font-extralight">|</span>
            <ul className="flex items-center gap-[9px]">
              <li className="text-white">
                <Link href="URL2">
                  <Image
                    src={globe}
                    alt="message2"
                    width={18}
                    height={18}
                    className="invert ml-[2px]"
                  />
                </Link>
              </li>
              <Link href="/stores" className="text-white ">
                Store Location
              </Link>
            </ul>
          </div>

          <div>
            <p className="text-white text-[15px] lg:block hidden">
              Summer Sale Season Up To 25% OFF
              <span className="px-1">-</span>
              <Link href="/products" className="text-[#ff7979] underline">
                Shop Now
              </Link>
            </p>
          </div>
          <div className="flex gap-5">
            <div className="text-white">
              <Select className="items-start bg-white border-none outline-none">
                <SelectTrigger className="text-[16px]  font-normal tracking-[0.5px]">
                  <div className="flex items-center justify-center gap-1">
                    <div></div>
                    <div className="flex items-start">
                      <SelectValue
                        className="text-[16px] font-normal tracking-[0.5px]"
                        placeholder="English"
                      />
                    </div>
                  </div>
                </SelectTrigger>
                <SelectContent
                  className="bg-white"
                  style={{ background: "#fffffff" }}
                >
                  <SelectItem className="text-[#222] " value="light">
                    <div className="flex p-0 items-center justify-start gap-1">
                      <div>
                        <Image
                          src={america}
                          alt="america"
                          width={16}
                          height={11}
                        />
                      </div>

                      <button
                        onClick={() => changeLanguage("en")}
                        className="cursor-pointer"
                      >
                        <p>English</p>
                      </button>
                    </div>
                  </SelectItem>
                  <SelectItem className="text-[#222]" value="dark">
                    <div className="flex p-0 items-center justify-start gap-1">
                      <div>
                        <Image
                          src={america}
                          alt="america"
                          width={16}
                          height={11}
                        />
                      </div>

                      <button
                        onClick={() => changeLanguage("es")}
                        className="cursor-pointer"
                      >
                        <p>Spanish</p>
                      </button>
                    </div>
                  </SelectItem>
                  <SelectItem className="text-[#222]" value="system">
                    <div className="flex items-center justify-center gap-1">
                      <div>
                        <Image
                          src={america}
                          alt="america"
                          width={16}
                          height={11}
                        />
                      </div>

                      <button
                        ton
                        onClick={() => changeLanguage("fr")}
                        className="cursor-pointer"
                      >
                        <p>French</p>
                      </button>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-gray-300 font-extralight">|</div>
            <div className="text-white flex gap-2 items-center">
              <Select className="">
                <SelectTrigger className="">
                  <SelectValue className="text-[20px]" placeholder="USD" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem className="text-black" value="light">
                    <Link className="cursor-pointer" href="/">
                      EUR
                    </Link>
                  </SelectItem>
                  <SelectItem className="text-black" value="dark">
                    <Link className="cursor-pointer" href="/">
                      USD
                    </Link>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </nav>
      <Sheet>
        <div className="bg-white  ">
          <div className="mx-auto flex max-w-[1430px] justify-between  py-[12px] md:py-[20px] px-[15px]  max-md:items-center max-md:gap-10">
            <div className="flex items-center justify-center gap-2">
              <div className="lg:hidden block">
                <SheetTrigger className="flex bg-white">
                  <AlignJustify />
                </SheetTrigger>
              </div>
              <Link
                href="/"
                className="sm:w-[115px] sm:h-[30px]  max-sm:w-[75px] max-sm:h-[20px] shrink-0"
              >
                <Image src={logo} alt="logo" className=" w-full" />
              </Link>
            </div>
            <div className="lg:block hidden ">
              <NavigationMenubar />
            </div>
            <div className="flex items-center sm:gap-3 gap-2 md:gap-3  ">
              <Link href="" className="cursor-pointer ">
                <Image
                  width={20}
                  height={20}
                  src={search}
                  alt="search"
                  className="max-sm:h-[18px] max-sm:w-[18px] "
                />
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Image
                    width={20}
                    height={20}
                    src={person}
                    alt="person"
                    className="max-sm:h-[18px] max-sm:w-[18px] "
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white p-[5px] min-w-[160px] mt-3">
                  <div className="flex-col p-2  ">
                    <div className="py-[3px] px-[10px]">
                      <Link href="/login" className=" capitalize">
                        login
                      </Link>
                    </div>
                    <div className="py-[3px] px-[10px]">
                      <Link href="/register" className=" capitalize">
                        Register
                      </Link>
                    </div>
                    <div className="py-[3px] px-[10px]">
                      <Link href="" className=" capitalize">
                        Comments (0)
                      </Link>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="" className="cursor-pointer ">
                <Image
                  width={20}
                  height={20}
                  src={heart}
                  alt="heart"
                  className="max-sm:h-[22px] max-sm:w-[20px] "
                />
              </Link>

              <Sheet className="">
                <SheetTrigger asChild>
                  <div className="relative cursor-pointer  ">
                    <div className=" absolute min-w-[18px] flex  justify-center min-h-[15px] right-[-8px]  opacity-80 bg-black top-[-8px] rounded-full">
                      <p className="text-white text-[12px] px-1 ">0</p>
                    </div>
                    <Image
                      width={20}
                      height={20}
                      src={bag}
                      alt="bag"
                      className="max-sm:h-[18px] max-sm:w-[18px] "
                    />
                  </div>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white">
                  <div className=" flex-col">
                    <div>
                      <h2 className="text-2xl text-[#666] font-semibold border-b-2 pb-5">
                        Shoping Cart
                      </h2>
                    </div>
                    {products ? (
                      <></>
                    ) : (
                      <div className="border-red-700   flex-col">
                        <div>
                          <div className="py-10">
                            <p className="text-center text-[15px]">
                              There are no more items in your cart
                            </p>
                          </div>
                          <div>
                            <Image
                              src="/images/cart.jpg"
                              alt="cart"
                              width="400"
                              height="400"
                            />
                          </div>
                          <div className="flex items-center justify-center">
                            <Link
                              href="/bloggrid"
                              variant="secondary"
                              className=" bg-[#222] text-[20px] font-medium py-[10px] px-[20px] focus:none outline-none text-white"
                            >
                              Explore Products
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              <p className="text-black lg:block hidden ">$0.00</p>
            </div>
          </div>
        </div>
        <section>
          <SheetContent className="bg-white">
            <Sidebar />
          </SheetContent>
        </section>
      </Sheet>
    </>
  );
};

export default Navbar;
