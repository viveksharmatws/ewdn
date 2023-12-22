"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import message from "../public/images/message.svg";
import globe from "../public/images/globe.svg";
import america from "../public/images/america.jpg";
import person from "../public/images/person.svg";
import heart from "../public/images/heart.svg";
import bag from "../public/images/bag.svg";
import { AlignJustify } from "lucide-react";
import { Trash } from "lucide-react";

// const { toast } = useToast();
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import logo from "../public/images/logoecommerce.jpg";
import search from "../public/images/search.svg";
import NavigationMenubar from "./NavigationMenu";
import Sidebar from "../components/Sidebar";
import Link from "@/node_modules/next/link";

const Navbar = () => {
  const [products, setProduct] = useState(null);
  const [wishlist, setWishlist] = useState(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));

    if (storedCart && Array.isArray(storedCart)) {
      setProduct(storedCart);
    } else {
      setProduct([]);
    }

    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));

    if (storedWishlist && Array.isArray(storedWishlist)) {
      setWishlist(storedWishlist);
    } else {
      setWishlist([]);
    }
  }, []);

  const pricesArray = [];

  if (products && Array.isArray(products)) {
    products.forEach((item) => {
      const price = Number(item.price);
      if (!isNaN(price)) {
        pricesArray.push(price);
      }
    });
  }

  const sumOfPrices = pricesArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <>
      <nav className="bg-[#222222] md:block hidden   ">
        <div className=" mx-auto    flex max-w-[1430px]  justify-between gap-4 py-[8px] px-[15px] flex-row">
          <div className="flex gap-5">
            <ul className="flex items-center gap-[9px]">
              <li className="text-white shrink-0 ">
                <Link href="/" className="">
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
                <Image
                  src={logo}
                  alt="logo"
                  className=" w-full"
                  width={115}
                  height={30}
                />
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

              <Link href="/wishlist" className="cursor-pointer  relative">
                <div className=" absolute min-w-[18px] flex  justify-center min-h-[15px] right-[-8px]  opacity-80 bg-black top-[-8px] rounded-full">
                  <p className="text-white text-[12px] px-1 ">
                    {wishlist?.length || 0}
                  </p>
                </div>
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
                      <p className="text-white text-[12px] px-1 ">
                        {products?.length || 0}
                      </p>
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
                <SheetContent side="right" className="bg-white overflow-y-auto">
                  <div className=" flex-col">
                    <div>
                      <h2 className="text-xl text-[#666] font-semibold border-b-2 pb-5">
                        Shopping Cart
                      </h2>
                    </div>
                    {products?.length > 0 ? (
                      <>
                        {products?.map((item, index) => (
                          <>
                            <div className="overflow-y-auto">
                              <div className="flex  pt-[10px] gap-[10px] ">
                                <div className="shrink-0">
                                  <Image
                                    src={`/images${item.all_images[1]}`}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className=""
                                  />
                                </div>
                                <div className="flex-col shrink-1">
                                  <div>
                                    <h1
                                      className="text-[18px]  tracking-[0.5px] line-clamp-1"
                                      key={index}
                                    >
                                      {item?.heading}
                                    </h1>
                                  </div>
                                  <div className="flex items-center ">
                                    <h1
                                      className="text-[18px] tracking-[0.5px]"
                                      key={index}
                                    >
                                      1 X {item?.price}
                                    </h1>

                                    <span className=" px-1 text-[#ff0000] text-[18px] font-medium">
                                      ${item?.product?.price}
                                    </span>
                                  </div>
                                </div>
                                <div className="px-[10px] pt-[8px] cursor-pointer  ">
                                  <AlertDialog>
                                    <AlertDialogTrigger>
                                      <Trash
                                        size={20}
                                        className="hover:fill-[#000000] "
                                      />
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className="bg-white">
                                      <AlertDialogHeader>
                                        <AlertDialogTitle>
                                          Are you absolutely sure?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                          This action cannot be undone. This
                                          will permanently delete your account
                                          and remove your data from our servers.
                                        </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter>
                                        <AlertDialogCancel className="cursor-pointer">
                                          Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction className="bg-red-600 text-white cursor-pointer">
                                          Continue
                                        </AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>
                                </div>
                              </div>
                            </div>
                          </>
                        ))}

                        <div className="border-gray-200 border-b mt-2 border-t">
                          <div className="p-[20px]  ">
                            <div className="flex  justify-between mt-1">
                              <div>
                                <p className="text-[18px] tracking-[0.5px] leading-[26px] font-normal">
                                  {products?.length} items
                                </p>
                              </div>
                              <div>
                                <p className="text-[18px] font-semibold text-[#ff0000]">
                                  ${sumOfPrices}
                                </p>
                              </div>
                            </div>
                            <div className="flex  justify-between mt-1">
                              <div>
                                <p className="text-[18px] tracking-[0.5px] leading-[26px] font-normal">
                                  Shipping
                                </p>
                              </div>
                              <div>
                                <p className="text-[18px] font-semibold text-[#ff0000]">
                                  $7.00
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-[20px]  ">
                          <div className="flex  justify-between mt-1">
                            <div>
                              <p className="text-[18px] tracking-[0.5px] leading-[26px] font-normal">
                                Total (tax excl.)
                              </p>
                            </div>
                            <div>
                              <p className="text-[18px] font-semibold text-[#ff0000]">
                                $351.00
                              </p>
                            </div>
                          </div>
                          <div className="flex  justify-between mt-1">
                            <div>
                              <p className="text-[18px] tracking-[0.5px] leading-[26px] font-normal">
                                Total (tax incl.)
                              </p>
                            </div>
                            <div>
                              <p className="text-[18px] font-semibold text-[#ff0000]">
                                ${sumOfPrices}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-5 w-full">
                          <div className="bg-[#222] text-white px-5 py-3 w-full flex items-center justify-center">
                            View Cart
                          </div>

                          <div className="bg-[#222] text-white px-5 py-3 w-full flex items-center justify-center">
                            Checkout
                          </div>
                        </div>
                      </>
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

              <p className="text-black lg:block hidden ">$0.00 </p>
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
